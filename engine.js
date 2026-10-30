import {MISSIONS,parisTerrain,PARIS_ALLIES,PARIS_ENEMIES,columnLabel} from './missions.js';
export {MISSIONS,columnLabel};
import {ATTACKS,POWERS,BALANCE,CHASSIS} from './catalog.js';
import {W,H,buildings,covers,inside,key,createTerrain,terrainAt,terrainObjects,elevationAt,movementCost,trajectory,smokeCross,TERRAIN} from './terrain.js';
export {W,H,buildings,covers,inside,key,terrainAt,terrainObjects,elevationAt,smokeCross,trajectory,TERRAIN};
export {ATTACKS,POWERS,BALANCE};
export const distance=(a,b)=>Math.abs(a.x-b.x)+Math.abs(a.y-b.y);
export const blocked=(x,y,s)=>{const t=terrainAt(s,x,y);return t.object?.hp>0;};
export const living=s=>s.units.filter(u=>u.hp>0);
export const covered=(u,s)=>terrainAt(s,u.x,u.y).type==='hindering';
export const attacksFor=u=>u.attacks.map(id=>ATTACKS[id]);
export const attackOf=(u,id=u.attacks[0])=>u.attacks.includes(id)?ATTACKS[id]:undefined;
const clampStat=n=>Math.max(0,Math.min(BALANCE.maxPilotStat,n));
export function createGame(missionId='industrial'){
 const mission=MISSIONS[missionId]||MISSIONS.industrial;
 const specs=[['p1','01','KESTREL','Assaut','Lt. Hana Mori',2,3,'assault'],['p2','02','BULWARK','Bastion','Sgt. Viktor Hale',1,5,'bastion'],['p3','03','LONGSHOT','Tireur','Cpl. Rei Sato',2,8,'sniper'],['p4','04','PATCH','Soutien','Slt. Noa Weiss',1,10,'support'],['p5','05','HAWK','Escarmouche','Pilote Kai Voss',1,7,'skirmisher'],['e1','H1','HOUND-01','Assaut','Pilote inconnu H1',13,2,'assault'],['e2','H2','HOUND-02','Assaut','Pilote inconnu H2',14,4,'assault'],['e3','H3','WARDEN','Bastion','Pilote inconnu H3',12,7,'bastion'],['e4','H4','NEEDLE','Tireur','Pilote inconnu H4',14,10,'sniper']];
 if(mission.id==='paris'){
  specs.splice(5);
  specs.forEach((spec,i)=>{[spec[5],spec[6]]=PARIS_ALLIES[i];});
  PARIS_ENEMIES.forEach(([x,y],i)=>{const chassis=['pikeman','musketeer','grenadier'][i%3],role={pikeman:'Lancier',musketeer:'Fusilier',grenadier:'Grenadier'}[chassis],code=String(i+1).padStart(2,'0');specs.push(['e'+(i+1),'P'+code,role.toUpperCase()+' '+code,role,'Automate de Picrochole',x,y,chassis]);});
 }
 const units=specs.map(([id,code,name,role,pilotName,x,y,chassis])=>{const c=CHASSIS[chassis],enemy=id[0]==='e',hp=c.hp-(enemy&&!c.automaton?4:0);return {id,code,name,role,chassis,automaton:!!c.automaton,x,y,hp,maxHp:hp,armor:c.armor,evasion:c.evasion,mobility:c.mobility,attacks:[...c.attacks],team:enemy?'enemy':'player',moved:false,done:false,shield:false,pilot:{id:`pilot-${id}`,name:pilotName,focus:BALANCE.initialFocus,tension:BALANCE.initialTension,powers:(c.automaton?[]:[c.special,'concentration','adrenaline']).map(id=>({id,charges:1,maxCharges:1}))}};});
 units.find(u=>u.id==='p1').passives=['grapple'];units.find(u=>u.id==='p5').passives=['stealth'];
 units.find(u=>u.id==='p3').pilot.powers.push({id:'curved',charges:1,maxCharges:1});units.find(u=>u.id==='p4').attacks.push('smoke');
 return {missionId:mission.id,width:mission.width,height:mission.height,turn:1,phase:'player',winner:null,terrain:createTerrain(mission.id==='paris'?parisTerrain():undefined),units,logs:[{text:mission.id==='paris'?'Dix-huit automates de Picrochole. Libérez les boulevards.':'Quatre signatures hostiles. Autorisation de feu.',kind:'system'},{text:'Liaison établie. Cinq mechas rebelles. Escouade RAVEN en position.',kind:'system'}]};
}
export function log(s,text,kind='system'){s.logs.unshift({text,kind});s.logs=s.logs.slice(0,40);}
export function reachable(s,u){
 const result=new Map([[key(u.x,u.y),[]]]),costs=new Map([[key(u.x,u.y),0]]),queue=[{x:u.x,y:u.y,path:[],cost:0}];
 while(queue.length){queue.sort((a,b)=>a.cost-b.cost);const p=queue.shift();if(p.cost!==costs.get(key(p.x,p.y)))continue;for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const x=p.x+dx,y=p.y+dy,k=key(x,y),cost=p.cost+movementCost(s,u,p,{x,y});if(cost>u.mobility||cost>=(costs.get(k)??Infinity)||living(s).some(v=>v.id!==u.id&&v.x===x&&v.y===y))continue;const path=[...p.path,{x,y}];result.set(k,path);costs.set(k,cost);queue.push({x,y,path,cost});}}
 result.delete(key(u.x,u.y));return result;
}
export function pathCost(s,u,path){let cost=0,previous=u;for(const p of path){cost+=movementCost(s,u,previous,p);previous=p;}return cost;}
export const lineOfSight=(a,b,s)=>!trajectory(s,a,b).blocked;
export function requirements(u,attackId){const attack=attackOf(u,attackId);if(!attack)return ['Attaque non équipée'];const missing=[];if(u.pilot.focus<attack.focus)missing.push(`Focus ${u.pilot.focus}/${attack.focus}`);if(u.pilot.tension<attack.tension)missing.push(`Tension ${u.pilot.tension}/${attack.tension}`);return missing;}
// A building can be targeted through any visible, in-range cell of its footprint.
export function targetCells(b){if(b.kind!=='terrain')return [b];const cells=[];for(let y=b.y;y<b.y+b.h;y++)for(let x=b.x;x<b.x+b.w;x++)cells.push({...b,x,y});return cells;}
function cellReason(a,b,attack,s){
 const d=distance(a,b);if(d<attack.minRange)return 'Cible trop proche · minimum '+attack.minRange+' cases';if(d>attack.range)return 'Hors de portée · maximum '+attack.range+' cases';
 const ray=trajectory(s,a,b,{ignoreTerrain:!!a.curvedShot,melee:attack.range===1});
 if(ray.blocked)return ray.blocked;
 if(ray.hindered&&b.passives?.includes('stealth'))return 'Furtivité : Hawk est inciblable à travers un terrain gênant';return '';
}
export function attackReason(a,b,attackId,s){
 if(!a||!b||a.hp<=0||b.hp<=0)return 'Cible hors combat';if(a.team===b.team)return 'Cible alliée';
 const missing=requirements(a,attackId);if(missing.length)return missing.join(' · ');
 const attack=attackOf(a,attackId);if(attack.kind==='smoke')return 'Choisissez une case pour la fumée';
 const reasons=targetCells(b).map(c=>cellReason(a,c,attack,s));return reasons.includes('')?'':reasons[0];
}
export const canShoot=(a,b,attackId,s)=>!attackReason(a,b,attackId,s);
function chanceAt(a,b,attack,s){const ray=trajectory(s,a,b,{ignoreTerrain:!!a.curvedShot,melee:attack.range===1});return Math.max(BALANCE.minAccuracy,Math.min(BALANCE.maxAccuracy,BALANCE.baseAccuracy+attack.accuracy-distance(a,b)*BALANCE.distancePenalty-(b.evasion||0)-(ray.hindered?TERRAIN.penalty:0)));}
export function aimPoint(a,b,attackId,s){const attack=attackOf(a,attackId);return targetCells(b).filter(c=>!cellReason(a,c,attack,s)).sort((c,d)=>chanceAt(a,d,attack,s)-chanceAt(a,c,attack,s))[0]||b;}
export function hitChance(a,b,attackId,s){const attack=attackOf(a,attackId);return attack&&b?chanceAt(a,aimPoint(a,b,attackId,s),attack,s):0;}
export function damageFor(a,b,attackId){const attack=attackOf(a,attackId);return attack?Math.max(1,attack.damage*(b.kind==='terrain'?(attack.terrainMultiplier||1):1)-b.armor-(b.shield?3:0)):0;}
export const targets=s=>[...living(s),...terrainObjects(s).filter(t=>t.hp>0)];
export function findTarget(s,id){if(id?.startsWith('cell:')){const [x,y]=id.slice(5).split(',').map(Number);return inside(x,y,s)?{id,x,y,kind:'cell',name:'Fumée '+columnLabel(x)+(y+1)}:undefined;}return targets(s).find(t=>t.id===id);}
export function smokeReason(s,u,p){if(!p||!inside(p.x,p.y,s))return 'Case invalide';const a=attackOf(u,'smoke');if(!a)return 'Arme non équipée';if(distance(u,p)<a.minRange||distance(u,p)>a.range)return 'Fumée : portée 1–5';if(!lineOfSight(u,p,s))return 'Trajectoire de grenade bloquée';if(smokeCross(s,p).length!==5)return 'La croix nécessite 5 cases au même niveau, sans obstacle';return '';}
export function deploySmoke(s,u,p){if(!active(s,u)||smokeReason(s,u,p))return false;for(const c of smokeCross(s,p)){const previous=s.terrain.smoke.find(v=>v.x===c.x&&v.y===c.y);if(previous)previous.expiresTurn=s.turn+TERRAIN.smokeTurns;else s.terrain.smoke.push({...c,expiresTurn:s.turn+TERRAIN.smokeTurns});}delete u.moveOrigin;u.done=true;u.moved=true;log(s,u.name+' · Grenade de fumée : 5 cases gênantes jusqu’à la fin du tour '+(s.turn+TERRAIN.smokeTurns-1)+'.','ally');return true;}
export function active(s,u){return !!u&&u.hp>0&&!u.done&&!s.winner&&s.phase===u.team;}
export function move(s,u,x,y){if(!active(s,u)||u.moved||!reachable(s,u).has(key(x,y)))return false;u.moveOrigin=u.team==='player'?{x:u.x,y:u.y,elevation:elevationAt(s,u),turn:s.turn,phase:s.phase}:null;u.x=x;u.y=y;u.moved=true;log(s,`${u.name} → ${columnLabel(x)}${String(y+1).padStart(2,'0')}.`);return true;}
// Only the relocation is reversible; actions and phase changes commit it.
export function canUndoMove(s,u){
 const origin=u?.moveOrigin;
 return !!(origin&&u.team==='player'&&active(s,u)&&u.moved&&origin.turn===s.turn&&origin.phase===s.phase&&inside(origin.x,origin.y,s)&&elevationAt(s,origin)===origin.elevation&&Number.isFinite(movementCost(s,u,u,origin))&&!living(s).some(v=>v.id!==u.id&&v.x===origin.x&&v.y===origin.y));
}
export function undoMove(s,u){
 if(!canUndoMove(s,u))return false;
 const {x,y}=u.moveOrigin;u.x=x;u.y=y;u.moved=false;delete u.moveOrigin;
 log(s,`${u.name} · déplacement annulé, retour ${columnLabel(x)}${y+1}.`,'ally');return true;
}
export function checkWin(s){for(const team of ['player','enemy'])if(!living(s).some(u=>u.team===team)){s.winner=team==='player'?'enemy':'player';s.phase='ended';return s.winner;}return null;}
export function shoot(s,a,b,{attackId,rng=Math.random}={}){
 if(!active(s,a)||!canShoot(a,b,attackId,s))return null;
 delete a.moveOrigin;a.done=true;a.moved=true;
 return strike(s,a,b,{attackId,rng});
}
// A strike never opens another reaction and never changes activation flags.
function strike(s,a,b,{attackId,rng,defense}={}){
 const attack=attackOf(a,attackId),preview=defensePreview(s,a,b,attack.id,defense),hit=rng()*100<preview.chance,damage=hit?Math.min(b.hp,preview.damage):0;
 const falling=b.kind==='terrain'&&b.type==='building'?living(s).filter(u=>terrainAt(s,u.x,u.y).object?.id===b.id).map(u=>({u,height:elevationAt(s,u)})):[];
 b.hp-=damage;a.curvedShot=false;
 if(b.hp===0&&b.kind==='terrain'){for(const {u,height} of falling){const fall=Math.min(u.hp,Math.max(0,height-elevationAt(s,u))*TERRAIN.fallDamage);u.hp-=fall;if(fall)u.pilot.tension=clampStat(u.pilot.tension+BALANCE.tensionOnTake);log(s,u.name+' tombe : −'+fall+' HP (armure ignorée).','enemy');}log(s,b.name+' détruit : terrain gênant'+(b.type==='building'?', toit effondré.':'.'));}
 if(hit){a.pilot.focus=clampStat(a.pilot.focus+BALANCE.focusOnHit);if(damage>0){a.pilot.tension=clampStat(a.pilot.tension+BALANCE.tensionOnDeal);if(b.pilot)b.pilot.tension=clampStat(b.pilot.tension+BALANCE.tensionOnTake);}}else if(b.pilot)b.pilot.focus=clampStat(b.pilot.focus+BALANCE.focusOnDodge);
 const gains=hit?`FOC +${BALANCE.focusOnHit} / TEN +${BALANCE.tensionOnDeal}`:b.pilot?`${b.name} esquive / FOC +${BALANCE.focusOnDodge}`:'Terrain intact';
 log(s,`${a.name} · ${attack.name} → ${b.name} : ${hit?`−${damage} HP${b.hp===0?' / neutralisé':''}`:'manqué'}. ${gains}.`,a.team==='player'?'ally':'enemy');checkWin(s);return {hit,damage,attackId:attack.id};
}
export function defensePreview(s,a,b,attackId,defense){
 const chance=hitChance(a,b,attackId,s),damage=damageFor(a,b,attackId);
 if(b.kind==='terrain')return {chance,damage};
 return {chance:defense==='dodge'?Math.max(BALANCE.minAccuracy,chance-BALANCE.dodgePenalty):chance,damage:defense==='block'?Math.max(1,Math.floor(damage*(1-BALANCE.blockReduction))):damage};
}
export function counterOptions(s,defender,attacker){
 if(!defender?.pilot||!attacker?.pilot)return [];
 return attacksFor(defender).filter(attack=>attack.kind!=='smoke'&&canShoot(defender,attacker,attack.id,s));
}
export function aiReaction(s,attacker,defender,attackId){
 const incoming=defensePreview(s,attacker,defender,attackId),block=defensePreview(s,attacker,defender,attackId,'block'),dodge=defensePreview(s,attacker,defender,attackId,'dodge');
 const risk=p=>p.chance/100*(Math.min(defender.hp,p.damage)+(p.damage>=defender.hp?defender.maxHp:0));
 let best={type:'block',score:-risk(block)};
 if(-risk(dodge)>best.score)best={type:'dodge',score:-risk(dodge)};
 const survival=incoming.damage>=defender.hp?1-incoming.chance/100:1;
 for(const attack of counterOptions(s,defender,attacker)){
  const damage=damageFor(defender,attacker,attack.id),reward=hitChance(defender,attacker,attack.id,s)/100*(Math.min(attacker.hp,damage)+(damage>=attacker.hp?attacker.maxHp:0));
  const score=survival*reward-risk(incoming);
  if(score>best.score)best={type:'counter',attackId:attack.id,score};
 }
 return {type:best.type,...(best.attackId?{attackId:best.attackId}:{})};
}
// Validate both orders before any mutation: thresholds are checked before the incoming hit.
export function resolveCombat(s,a,b,{attackId, reaction,rng=Math.random}={}){
 if(!active(s,a)||!canShoot(a,b,attackId,s))return null;
 if(b.kind==='terrain')return shoot(s,a,b,{attackId,rng});
 const choice=reaction??aiReaction(s,a,b,attackId);
 if(!['counter','block','dodge'].includes(choice.type))return null;
 if(choice.type==='counter'&&!counterOptions(s,b,a).some(attack=>attack.id===choice.attackId))return null;
 const label={counter:'Contre-attaque',block:'Blocage',dodge:'Esquive'}[choice.type];
 log(s,`${b.name} · ${label}${choice.type==='counter'?' : '+ATTACKS[choice.attackId].name:''}.`,b.team==='player'?'ally':'enemy');
 delete a.moveOrigin;a.done=true;a.moved=true;
 const result=strike(s,a,b,{attackId,rng,defense:choice.type});
 result.reaction=choice;result.counter=null;
 if(choice.type==='counter'&&a.hp>0&&b.hp>0&&!s.winner)result.counter=strike(s,b,a,{attackId:choice.attackId,rng});
 return result;
}
export function power(s,u,powerId,target=u){
 const charge=u?.pilot.powers.find(p=>p.id===powerId),definition=POWERS[powerId];if(!active(s,u)||!charge||charge.charges<=0||!definition)return false;
 if(definition.target==='ally'){if(!target||target.team!==u.team||target.hp<=0||target.hp>=target.maxHp||distance(u,target)>definition.range)return false;const healed=Math.min(definition.healing,target.maxHp-target.hp);target.hp+=healed;log(s,`${u.pilot.name} · ${definition.name} → ${target.name} : +${healed} HP.`,u.team==='player'?'ally':'enemy');}
 else{if(powerId==='shield')u.shield=true;if(powerId==='curved')u.curvedShot=true;if(definition.mobility)u.mobility+=definition.mobility;u.pilot.focus=clampStat(u.pilot.focus+(definition.focus||0));u.pilot.tension=clampStat(u.pilot.tension+(definition.tension||0));log(s,`${u.pilot.name} · ${definition.name}. ${definition.description}`,u.team==='player'?'ally':'enemy');}
 delete u.moveOrigin;charge.charges--;if(definition.endsActivation){u.done=true;u.moved=true;}return true;
}
export function waitUnit(s,u){if(!active(s,u))return false;delete u.moveOrigin;u.done=true;u.moved=true;log(s,`${u.name} maintient sa position.`);return true;}
export function startPhase(s,team){if(s.winner)return;for(const u of s.units)delete u.moveOrigin;s.phase=team;if(team==='player'){s.turn++;s.terrain.smoke=s.terrain.smoke.filter(c=>c.expiresTurn>s.turn);}for(const u of living(s).filter(u=>u.team===team)){u.done=false;u.moved=false;u.shield=false;}log(s,team==='enemy'?'Activité hostile détectée.':'Canal de commandement ouvert.');}
function approachDistances(s,u,targets){
 const costs=new Map(),queue=targets.map(v=>({x:v.x,y:v.y,cost:0}));
 queue.forEach(p=>costs.set(key(p.x,p.y),0));
 while(queue.length){queue.sort((a,b)=>a.cost-b.cost);const p=queue.shift();if(p.cost!==costs.get(key(p.x,p.y)))continue;
  for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const next={x:p.x+dx,y:p.y+dy};if(!inside(next.x,next.y,s))continue;const cost=p.cost+movementCost(s,u,next,p),k=key(next.x,next.y);if(cost<(costs.get(k)??Infinity)){costs.set(k,cost);queue.push({...next,cost});}}
 }
 return costs;
}
export function aiPlan(s,u){
 const enemies=living(s).filter(v=>v.team!==u.team);if(!enemies.length)return null;
 const approach=s.missionId==='paris'?approachDistances(s,u,enemies):null;
 let best={x:u.x,y:u.y,score:-Infinity};
 for(const p of [{x:u.x,y:u.y},...[...reachable(s,u).keys()].map(k=>{const[x,y]=k.split(',').map(Number);return{x,y};})]){
 const ghost={...u,...p},shot=aiAttack(s,ghost);const score=(shot?30+shot.score:0)-(approach?(approach.get(key(p.x,p.y))??1000):Math.min(...enemies.map(e=>distance(ghost,e))))+(covered(ghost,s)?4:0);
 if(score>best.score)best={...p,score};}
 return best;
}
export function aiAttack(s,u){let best=null;for(const attack of attacksFor(u))for(const target of living(s).filter(v=>v.team!==u.team)){if(!canShoot(u,target,attack.id,s))continue;const dmg=damageFor(u,target,attack.id),chance=hitChance(u,target,attack.id,s)/100,score=chance*(Math.min(target.hp,dmg)+(target.hp<=dmg?10:0));if(!best||score>best.score)best={target,attackId:attack.id,score};}return best;}
export function aiPrepare(s,u){if(u.pilot.focus<65)power(s,u,'concentration');if(u.pilot.tension<60)power(s,u,'adrenaline');}
