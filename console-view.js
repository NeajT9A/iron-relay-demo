import * as E from './engine.js';
import {reactionSummary} from './reaction-view.js';

export function consoleMarkup({game,u,mode,view,attackId,powerId,targetId}) {
 const enabled=E.active(game,u),a=E.attackOf(u,attackId),p=E.POWERS[powerId],target=E.findTarget(game,targetId);
 const terrainEffect=target&&a&&target.kind!=='cell'?E.trajectory(game,u,E.aimPoint(u,target,attackId,game),{ignoreTerrain:!!u.curvedShot,melee:a.range===1}):null;
 const reaction=mode==='fire'&&target?.pilot&&a?E.aiReaction(game,u,target,attackId):null;
 const outcome=mode==='fire'&&target&&a?E.defensePreview(game,u,target,attackId,reaction?.type):null;
 const reduced=view==='target';
 const header=`<header class="console-header"><strong>${u.name}</strong><small>${u.code} / ${E.columnLabel(u.x)}${u.y+1} / N${E.elevationAt(game,u)}</small><button class="console-close" data-console="close" aria-label="Fermer la console">×</button></header>`;
 const passive=`<p class="console-passive">${u.passives?.includes('grapple')?'Grappin · peut changer de niveau':''}${u.passives?.includes('stealth')?'Furtivité · inciblable à travers un terrain gênant':''}${u.curvedShot?'Tir courbé prêt · prochain tir ignore le terrain':''}</p>`;
 const meters=`<div class="console-meters"><span>FOCUS <b>${u.pilot.focus}</b></span><span>TENSION <b>${u.pilot.tension}</b></span></div>`;
 const tabs=`<nav class="console-tabs" aria-label="Ordres de l’unité">${[['move','Déplacer'],['fire','Attaques'],['power','Pouvoirs']].map(([id,label])=>`<button data-mode="${id}" aria-pressed="${mode===id}" ${!enabled||(id==='move'&&u.moved)?'disabled':''}>${label}</button>`).join('')}</nav>`;
 const back=`<button data-console="back">${mode==='move'?'Autres ordres':'Changer'}</button>`;
 const confirmation=(label,action)=>`<p class="console-message">Recliquez sur la cible pour confirmer.</p><div class="console-controls">${back}<button class="console-confirm" data-console="${action}">${label}</button></div>`;
 let body='',foot='';
 if(!enabled)body=`<p class="console-detail">${u.hp<=0?'Unité hors combat.':'Activation terminée.'}</p><p class="console-message">Sélectionnez un autre mecha pour donner un ordre.</p>`;
 else if(reduced){
  const title=mode==='move'?'Déplacement':mode==='fire'?a.name:p.name;
  const hint=mode==='move'?'Choisissez une case surlignée.':mode==='fire'?a.kind==='smoke'?'Choisissez une case dorée : croix de 5 cases.':'Choisissez une unité rouge ou un terrain doré.':'Choisissez un allié blessé, à 3 cases.';
  const candidates=E.targets(game).filter(v=>mode==='fire'?v.team!==u.team&&E.canShoot(u,v,attackId,game):mode==='power'&&v.team===u.team&&v.hp<v.maxHp&&E.distance(u,v)<=3);
  return `<header class="console-header"><strong>${title}</strong><button data-console="back" aria-label="Modifier l’ordre">Modifier</button><button class="console-close" data-console="close" aria-label="Fermer la console">×</button></header><div class="console-body"><p class="console-message">${mode!=='move'&&a?.kind!=='smoke'&&!candidates.length?'Aucune cible disponible · changez d’ordre.':hint}</p></div>`;
 }else if(view==='confirm'&&target){
  if(mode==='fire'&&a.kind==='smoke')body=`<h3 class="console-detail-title">Grenade de fumée</h3><p class="console-detail">5 cases en croix · mouvement ×2 · tirs −22 points · active la furtivité de Hawk.</p><p class="console-message">Dure jusqu’à la fin du tour ${game.turn+E.TERRAIN.smokeTurns-1}. Aucun dégât.</p><p class="console-warning">Termine l’activation</p>${confirmation('Déployer la fumée','fire')}`;
  else if(mode==='fire')body=`<h3 class="console-detail-title">${a.name} → ${target.name}</h3><div class="console-outcome"><span><b>${outcome.damage}</b><small>Dégâts après défense</small></span><span><b>${outcome.chance} %</b><small>Chances de toucher</small></span></div><p class="console-message">${target.kind==='terrain'?`${target.hp} / ${target.maxHp} HP · armure ${target.armor}. ${target.type==='building'?'Bâtiment entier : effondrement et 5 dégâts par niveau aux occupants.':'Devient gênant après destruction.'}`:`${target.hp} / ${target.maxHp} HP · armure ${target.armor}`}</p>${reaction?reactionSummary(game,u,target,attackId,reaction,true):''}<p class="console-warning">Termine l’activation${!u.moved?' · déplacement abandonné':''}</p>${confirmation('Confirmer l’attaque','fire')}`;
  else body=`<h3 class="console-detail-title">Réparation → ${target.name}</h3><p class="console-detail">${target.hp} → ${Math.min(target.maxHp,target.hp+p.healing)} / ${target.maxHp} HP</p><p class="console-warning">1 charge consommée · termine l’activation</p>${confirmation('Confirmer le soin','repair')}`;
 }else if(mode==='power'){
  body=`<div class="console-list">${u.pilot.powers.map(charge=>{
   const d=E.POWERS[charge.id],chosen=powerId===d.id,preview=[];
   if(chosen){if(d.focus)preview.push(`Focus ${u.pilot.focus} → ${Math.max(0,Math.min(100,u.pilot.focus+d.focus))}`);if(d.tension)preview.push(`Tension ${u.pilot.tension} → ${Math.max(0,Math.min(100,u.pilot.tension+d.tension))}`);if(d.mobility)preview.push(`Mobilité ${u.mobility} → ${u.mobility+d.mobility}`);}
   return `<button class="console-choice" data-power="${charge.id}" aria-pressed="${chosen}" ${charge.charges?'':'disabled'}><strong>${d.name}</strong><small>${d.description}</small><small class="${d.endsActivation?'console-missing':''}">${charge.charges?'1 charge · '+(d.endsActivation?'termine l’activation':'action conservée'):'Charge utilisée pour cette mission'}</small>${chosen?`<small class="power-preview">${preview.join(' · ')}</small><small class="power-confirm-hint">Recliquer pour activer</small>`:''}</button>`;
  }).join('')}</div>`;
 }else{
  body=`<div class="console-list">${E.attacksFor(u).map(d=>{const missing=[];if(u.pilot.focus<d.focus)missing.push(`${d.focus-u.pilot.focus} focus`);if(u.pilot.tension<d.tension)missing.push(`${d.tension-u.pilot.tension} tension`);return `<button class="console-choice" data-attack="${d.id}" ${missing.length?'disabled':''}><strong>${d.name}</strong><small>${d.kind==='smoke'?'5 cases en croix':d.damage+' dégâts'}${d.terrainMultiplier?' · ×2 au terrain':''} · portée ${d.minRange===d.range?d.range:d.minRange+'–'+d.range}</small>${missing.length?`<small class="console-missing">Manque ${missing.join(' + ')}</small>`:''}</button>`}).join('')}</div>`;
 }
 if(enabled&&!reduced&&view==='menu')foot=`<footer class="console-foot"><small>${mode==='power'?'Sélectionner, puis recliquer pour activer':'Choisir une attaque, puis une cible'}</small>${E.canUndoMove(game,u)?'<button class="undo-order" data-console="undo" title="Annuler le déplacement (Z)">↶ Déplacement</button>':''}<button data-console="wait">Attendre</button></footer>`;
 if(view==='confirm'&&mode==='fire'&&a.kind!=='smoke'&&(u.curvedShot||terrainEffect?.hindered))body=`<p class="console-message">${u.curvedShot?'Tir courbé · effets du terrain ignorés':terrainEffect?.hindered?'Trajectoire gênée · précision −22 points':a.range===1?'Portée 1 · même niveau, terrain gênant ignoré':'Trajectoire dégagée'}</p>`+body;
 return header+(!reduced&&enabled&&view==='menu'?tabs+meters+passive:'')+`<div class="console-body">${body}</div>`+foot;
}
