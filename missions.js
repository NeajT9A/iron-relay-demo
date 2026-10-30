// Fictional Paris-inspired sector: radial boulevards, squares and dense city blocks.
export const MISSIONS={
 industrial:{id:'industrial',title:'Silence industriel',number:'001',sector:'SECTEUR 07 · ZONE DE CONFINEMENT',caption:'SECTEUR INDUSTRIEL / 07',width:16,height:12,objective:'Reprendre le relais industriel.',briefing:'Quatre mechas ennemis occupent le relais. Guidez vos cinq mechas rebelles à distance et neutralisez tous les contacts.',enemies:4},
 paris:{id:'paris',title:'Les boulevards de Picrochole',number:'002',sector:'PARIS IMAGINAIRE · QUARTIER DES COURONNES',caption:'QUARTIER DES COURONNES / PARIS',width:32,height:24,objective:'Libérer le quartier des Couronnes.',briefing:'Dix-huit automates de Picrochole occupent les boulevards. Vos cinq mechas rebelles sont déployés au sud-ouest. Les automates sont fragiles, mais nombreux : avancez de place en place et exploitez les angles des rues.',enemies:18}
};
export const columnLabel=x=>{let label='';for(let n=x+1;n>0;n=Math.floor((n-1)/26))label=String.fromCharCode(65+(n-1)%26)+label;return label;};
export const parisRoad=(x,y)=>x<2||x>29||y<2||y>21||Math.abs(x-7)<=1||Math.abs(x-16)<=1||Math.abs(x-25)<=1||Math.abs(y-6)<=1||Math.abs(y-12)<=1||Math.abs(y-19)<=1||Math.abs(y-(.65*x+2))<1.65||Math.abs(y-(-.65*x+23))<1.65||Math.hypot(x-16,y-12)<4;
export function parisTerrain(){
 const used=new Set(),buildings=[];
 const available=(x,y)=>x<32&&y<24&&!parisRoad(x,y)&&!used.has(`${x},${y}`);
 for(let y=0;y<24;y++)for(let x=0;x<32;x++){
  if(!available(x,y))continue;
  let w=1,h=1;while(w<5&&available(x+w,y))w++;
  while(h<4&&Array.from({length:w},(_,dx)=>available(x+dx,y+h)).every(Boolean))h++;
  for(let dy=0;dy<h;dy++)for(let dx=0;dx<w;dx++)used.add(`${x+dx},${y+dy}`);
  buildings.push({x,y,w,h,name:w>=3?'ÎLOT DES COURONNES':w>=2?'IMMEUBLE':'ÎLOT'});
 }
 return {buildings,covers:[[6,10],[17,5],[24,15],[22,19],[11,6],[27,12]],rough:[{x:8,y:15},{x:9,y:15},{x:19,y:12},{x:20,y:12},{x:25,y:8}]};
}
export const PARIS_ALLIES=[[3,19],[2,20],[4,20],[2,18],[5,19]];
export const PARIS_ENEMIES=[[10,19],[13,15],[7,13],[16,13],[19,12],[16,9],[21,19],[25,18],[27,19],[25,12],[28,12],[25,8],[22,6],[19,6],[16,4],[10,6],[7,6],[29,3]];
