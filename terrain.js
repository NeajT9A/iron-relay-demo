// Terrain belongs to a mission: destroying an object never changes the template.
export const W=16,H=12;
export const buildings=[{x:4,y:1,w:3,h:2,name:'ENTREPÔT 04'},{x:10,y:2,w:2,h:3,name:'TRANSFO.'},{x:5,y:7,w:2,h:3,name:'ATELIER'},{x:11,y:8,w:3,h:3,name:'DÉPÔT 09'}];
export const covers=[[3,4],[4,4],[7,5],[8,5],[8,8],[9,8],[12,6],[13,6],[3,9]];
export const TERRAIN={penalty:22,fallDamage:5,buildingHp:28,buildingArmor:3,blockHp:10,blockArmor:1,smokeTurns:2};
export const inside=(x,y,s)=>Number.isInteger(x)&&Number.isInteger(y)&&x>=0&&y>=0&&x<(s?.width??W)&&y<(s?.height??H);
export const key=(x,y)=>`${x},${y}`;
export const contains=(b,x,y)=>x>=b.x&&y>=b.y&&x<b.x+b.w&&y<b.y+b.h;
export function createTerrain({buildings:blocks=buildings,covers:barriers=covers,rough=[{x:6,y:5},{x:6,y:6},{x:7,y:6}]}={}){return {objects:[...blocks.map((b,i)=>({...b,id:`building-${i}`,kind:'terrain',type:'building',elevation:1,baseElevation:0,hp:TERRAIN.buildingHp,maxHp:TERRAIN.buildingHp,armor:TERRAIN.buildingArmor})),...barriers.map(([x,y],i)=>({id:`block-${i}`,kind:'terrain',type:'blocking',name:'BARRICADE',x,y,w:1,h:1,elevation:0,hp:TERRAIN.blockHp,maxHp:TERRAIN.blockHp,armor:TERRAIN.blockArmor}))],smoke:[],rough:rough.map(c=>({...c}))};}
const initial=createTerrain();
export const terrainObjects=s=>(s?.terrain||initial).objects;
export function terrainAt(s,x,y){
 const t=s?.terrain||initial,object=t.objects.find(b=>contains(b,x,y));
 const elevation=object?.type==='building'&&object.hp>0?object.elevation:object?.baseElevation||0;
 const smoke=t.smoke.some(c=>c.x===x&&c.y===y),rubble=object&&object.hp<=0;
 return {object,elevation,type:smoke||rubble||t.rough.some(c=>c.x===x&&c.y===y)?'hindering':object?.hp>0&&object.type==='blocking'?'blocking':'normal',smoke,rubble};
}
export const elevationAt=(s,p)=>terrainAt(s,p.x,p.y).elevation;
export function boundary(s,p){const z=elevationAt(s,p);return [[1,0],[-1,0],[0,1],[0,-1]].some(([dx,dy])=>elevationAt(s,{x:p.x+dx,y:p.y+dy})<z);}
export function movementCost(s,u,from,to){
 if(!inside(to.x,to.y,s))return Infinity;
 const tile=terrainAt(s,to.x,to.y);
 if(tile.type==='blocking'||tile.object?.hp>0&&tile.object.type==='blocking')return Infinity;
 if(elevationAt(s,from)!==tile.elevation&&!u.passives?.includes('grapple'))return Infinity;
 return tile.type==='hindering'?2:1;
}
// Supercover segment: even an exact corner touched by the ray belongs to its path.
export function rayCells(a,b){
 const result=[],dx=b.x-a.x,dy=b.y-a.y;
 for(let y=Math.min(a.y,b.y);y<=Math.max(a.y,b.y);y++)for(let x=Math.min(a.x,b.x);x<=Math.max(a.x,b.x);x++){
  let lo=0,hi=1;
  for(const [origin,delta,min] of [[a.x+.5,dx,x],[a.y+.5,dy,y]]){
   if(!delta){if(origin<min||origin>min+1){lo=2;break;}}
   else{const t1=(min-origin)/delta,t2=(min+1-origin)/delta;lo=Math.max(lo,Math.min(t1,t2));hi=Math.min(hi,Math.max(t1,t2));}
  }
  if(lo<=hi&&hi>=0&&lo<=1)result.push({x,y,t:(lo+hi)/2});
 }
 return result.sort((a,b)=>a.t-b.t);
}
export function trajectory(s,a,b,{ignoreTerrain=false,melee=false}={}){
 const az=elevationAt(s,a),bz=b.kind==='terrain'?(b.baseElevation||0):elevationAt(s,b);
 if(melee&&az!==bz)return {blocked:'Élévations différentes : aucune attaque de portée 1',hindered:false};
 if(ignoreTerrain)return {blocked:'',hindered:false};
 if(b.kind!=='terrain'&&az<bz&&!boundary(s,b))return {blocked:'Cible en hauteur : elle doit être au bord du toit',hindered:false};
 let hindered=false;
 for(const p of rayCells(a,b)){
  const tile=terrainAt(s,p.x,p.y),o=tile.object,endpoint=(p.x===a.x&&p.y===a.y)||(p.x===b.x&&p.y===b.y);
  if(!melee&&tile.type==='hindering'&&tile.elevation>=az+(bz-az)*p.t-.01)hindered=true;
  if(endpoint||o?.id===b.id)continue;
  if(o?.hp>0&&o.type==='building'&&o.elevation>az+(bz-az)*p.t+.001)return {blocked:'Ligne de tir bloquée par un bâtiment',hindered};
  if(o?.hp>0&&o.type==='blocking'&&(o.elevation||0)>=az+(bz-az)*p.t-.001)return {blocked:'Ligne de tir bloquée par un terrain',hindered};
 }
 return {blocked:'',hindered};
}
export function smokeCross(s,p){return [[0,0],[1,0],[-1,0],[0,1],[0,-1]].map(([dx,dy])=>({x:p.x+dx,y:p.y+dy})).filter(c=>{const t=terrainAt(s,c.x,c.y);return inside(c.x,c.y,s)&&t.elevation===elevationAt(s,p)&&!(t.object?.type==='blocking'&&t.object.hp>0);});}
