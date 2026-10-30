import {cityBackdrop} from './city-view.js';
import * as E from './engine.js';
import {miniature,rebelPortrait,rebelArt,automatonArt} from './mecha.js';
import {renderTelemetry, renderJournal} from './hud.js';
import {consolePosition} from './console-layout.js';
import {consoleMarkup} from './console-view.js';
import {reactionMarkup} from './reaction-view.js';
const $=id=>document.getElementById(id);
let game=E.createGame(new URLSearchParams(location.search).get('mission')),selected='p1',attackId='snap',powerId=null,mode='inspect',hover=null,grid=true,busy=false,sound=false,epoch=0,audioContext,pendingConfirm;
let consoleOpen=false,consoleView='menu',targetId=null;
let pendingReaction=null;
document.querySelector('.map-container').insertAdjacentHTML('beforeend','<section id="orders" class="tactical-console" aria-label="Console de l’unité" hidden></section>');
const mech=`<g fill="currentColor" stroke="#142326" stroke-width="1.4"><path d="M-9-15h18l4 6-3 15H-10l-3-15z"/><path d="M-17-13h7v16h-8zM10-13h7l1 16h-8z"/><path d="M-9 6h8v14h-10zM1 6h8l2 14H1z"/><path d="M-5-20H5l2 7H-7z"/><path d="M13-5h4v24h-4z"/><path d="M-6-8H6v6H-6z" fill="#142326"/><path d="M-4-6h8" stroke="var(--amber)" stroke-width="2"/></g>`;
const portrait=`<svg viewBox="-30 -32 60 64" aria-hidden="true">${mech}<path d="M-24-25h10M-24-25v9M24-25H14M24-25v9M-24 26h10M-24 26v-9M24 26H14M24 26v-9" fill="none" stroke="currentColor" stroke-width=".5"/></svg>`;
function unit(){return game.units.find(u=>u.id===selected)}
function coord(u){return E.columnLabel(u.x)+String(u.y+1).padStart(2,'0')}
function beep(freq=440,duration=.06){if(!sound)return;try{audioContext??=new (window.AudioContext||window.webkitAudioContext)();audioContext.resume();const o=audioContext.createOscillator(),g=audioContext.createGain();o.connect(g);g.connect(audioContext.destination);o.frequency.value=freq;o.type='triangle';g.gain.setValueAtTime(.035,audioContext.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioContext.currentTime+duration);o.start();o.stop(audioContext.currentTime+duration);}catch{}}
let toastTimer;function toast(text){$('toast').textContent=text;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),3500)}
function showConfirm(title,text,action){$('confirm-title').textContent=title;$('confirm-text').textContent=text;pendingConfirm=action;$('confirm').showModal()}
function select(id){
 if(busy||game.winner)return;
 const repeated=id===selected&&(consoleOpen||mode==='move');
 closePanels();selected=id;const u=unit(),enabled=u.team==='player'&&E.active(game,u),previewMove=enabled&&!u.moved&&!repeated;
 attackId=u.attacks[0];powerId=null;mode=previewMove?'move':enabled?'fire':'inspect';consoleOpen=u.team==='player'&&!previewMove;consoleView='menu';targetId=null;hover=null;beep(640);render();revealUnit(u);
}
function closeConsole(){const restore=$('orders').contains(document.activeElement);consoleOpen=false;consoleView='menu';targetId=null;powerId=null;mode='inspect';hover=null;render();if(restore)document.querySelector(`[data-unit="${selected}"]`)?.focus({preventScroll:true});}
function render(){
 const u=unit(),allies=game.units.filter(u=>u.team==='player'),remaining=allies.filter(u=>u.hp>0&&!u.done).length;
 $('roster').innerHTML=allies.map(v=>`<button class="unit-card ${selected===v.id?'selected':''} ${v.hp<=0?'dead':v.done?'completed':''}" data-unit="${v.id}" aria-label="Sélectionner ${v.name}, ${v.hp} sur ${v.maxHp} intégrité"><div class="unit-top">${rebelArt(v)?`<img class="roster-miniature" src="assets/mechas/${rebelArt(v).file}" alt=""/>`:""}<span class="unit-code">${v.code}</span><div><div class="unit-name">${v.name}</div><div class="unit-role">${v.role.toUpperCase()}</div></div><span class="unit-status">${v.hp<=0?'×':v.done?'✓':'◇'}</span></div><div class="hp-line"><span class="hp-fill" style="width:${100*v.hp/v.maxHp}%"></span></div><div class="unit-bottom"><span>${v.hp} / ${v.maxHp} HP</span><span>${v.hp<=0?'HORS LIGNE':v.done?'ACTIVÉ':v.moved?'EN POSITION':'DISPONIBLE'}</span></div></button>`).join('');
 const enemy=u.team==='enemy';
 renderTelemetry({u:structuredClone(u),portrait:automatonArt(u,true)||rebelPortrait(u)||portrait,position:coord(u)+' / N'+E.elevationAt(game,u),covered:E.covered(u,game)});
 const attack=E.attackOf(u,attackId)||E.attackOf(u);attackId=attack.id;
 $('undo-move').disabled=busy||!E.canUndoMove(game,u);
 $('turn').textContent=String(game.turn).padStart(2,'0');$('phase-label').textContent=game.winner?'MISSION TERMINÉE':busy?'PHASE HOSTILE':'PHASE ALLIÉE';$('phase-label').style.color=busy?'var(--red)':'var(--cyan)';$('remaining').textContent=busy?'Mouvements ennemis en cours…':`${remaining} unité${remaining>1?'s':''} disponible${remaining>1?'s':''}`;
 $('turn-progress').innerHTML=allies.map(v=>`<i class="${v.done||v.hp<=0?'done':''}"></i>`).join('');$('end-turn').disabled=busy||!!game.winner;$('mission-select').disabled=busy;
 $('squad-count').textContent=String(allies.length).padStart(2,'0');const hostiles=game.units.filter(v=>v.team==='enemy'),n=hostiles.filter(v=>v.hp>0).length;$('objective-count').textContent=`${hostiles.length-n} / ${hostiles.length}`;
 renderJournal(game.logs);
 $('phase-banner').textContent='ACTIVITÉ HOSTILE EN COURS';$('phase-banner').classList.toggle('visible',busy);
 drawMap();drawOverview();updateHint();renderOrders();
}
function updateHint(){const u=unit();$('map-hint').textContent=busy?'L’adversaire joue son tour.':game.winner?'Opération terminée.':u.team==='enemy'?'Contact hostile · sélectionnez un allié.':u.done?'Activation terminée. Sélectionnez un autre mecha.':mode==='move'?'Choisissez une case surlignée ou recliquez sur le mecha pour ouvrir sa console.':!consoleOpen?'Cliquez sur un mecha pour afficher ses déplacements ou sa console.':consoleView==='confirm'?'Recliquez sur la cible pour confirmer · Échap : annuler.':mode==='fire'?(consoleView==='target'?`${E.attackOf(u,attackId).name} · ${attackId==='smoke'?'choisissez le centre de la croix dorée':'cliquez sur une unité rouge ou un terrain doré (Échap : annuler)'}.`:'Choisissez une attaque dans la console.'):powerId==='repair'?'Réparation · choisissez un allié blessé.':'Cliquez pour sélectionner un pouvoir, recliquez pour l’activer.';}
function renderOrders(){
 const panel=$('orders'),u=unit();
 panel.hidden=!consoleOpen||busy||!!game.winner||u.team!=='player'||(mode==='fire'&&consoleView==='target');
 if(panel.hidden)return;
 const focused=panel.contains(document.activeElement)?document.activeElement:null;
 const focusKey=focused?['console','mode','attack','power'].find(k=>focused.dataset[k]):null;
 const focusValue=focusKey?focused.dataset[focusKey]:null;
 panel.classList.toggle('console-reduced',consoleView==='target');panel.classList.toggle('console-confirming',consoleView==='confirm');
 panel.innerHTML=consoleMarkup({game,u,mode,view:consoleView,attackId,powerId,targetId});
 positionConsole();
 if(focused){const next=focusKey&&panel.querySelector('[data-'+focusKey+'="'+focusValue+'"]');(next||panel.querySelector('.console-confirm')||panel.querySelector('[data-console="back"]')||panel.querySelector('button'))?.focus({preventScroll:true});}
}
function positionConsole(){
 const panel=$('orders');if(panel.hidden)return;
 const map=document.querySelector('.map-container'),rect=map.getBoundingClientRect(),svg=$('battlefield').getBoundingClientRect();
 panel.style.maxHeight=Math.max(0,consoleView==='confirm'?Math.min(300,rect.height*.52):rect.height-16)+'px';
 const point=v=>({x:svg.left-rect.left+(64+v.x*48)*svg.width/mapWidth(),y:svg.top-rect.top+(62+v.y*48)*svg.height/mapHeight()});
 const target=E.findTarget(game,targetId);
 let avoid=target?[point(target)]:[];
 if(consoleView==='target')avoid=mode==='move'?[...E.reachable(game,unit()).keys()].map(k=>{const[x,y]=k.split(',').map(Number);return point({x,y})}):E.living(game).filter(v=>mode==='fire'?E.canShoot(unit(),v,attackId,game):v.team===unit().team&&v.hp<v.maxHp&&E.distance(unit(),v)<=3).map(point);
 const pos=consolePosition({width:rect.width,height:rect.height,panelWidth:panel.offsetWidth,panelHeight:panel.offsetHeight,anchor:consoleView==='confirm'&&target?point(target):point(unit()),avoid:consoleView==='confirm'?[point(unit())]:avoid});
 panel.style.left=pos.left+'px';panel.style.top=pos.top+'px';
}
new ResizeObserver(()=>requestAnimationFrame(positionConsole)).observe(document.querySelector('.map-container'));
function drawMap(){
 const u=unit(),valid=E.active(game,u)&&u.team==='player'&&!busy,reach=valid&&mode==='move'&&!u.moved?E.reachable(game,u):new Map();
 const parts=[`<defs><pattern id="ground" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M3 8h1M30 32h2M19 16h1" stroke="#708480" opacity=".16"/></pattern><pattern id="roof" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M0 0v8" stroke="#50666a" opacity=".25"/></pattern><pattern id="hindering-hatch" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="var(--terrain-hindering)" opacity=".18"/><path d="M-2 2L2-2M0 10L10 0M8 12L12 8" stroke="var(--terrain-hindering)" stroke-opacity=".55" stroke-width="1.4"/></pattern></defs><rect width="${mapWidth()}" height="${mapHeight()}" fill="var(--map-bg)"/><rect x="40" y="38" width="${game.width*48}" height="${game.height*48}" fill="url(#ground)"/>${game.missionId==='paris'?cityBackdrop():industrialBackdrop()}<path d="M40 38h${game.width*48}v${game.height*48}H40z" fill="none" stroke="#6a8585" opacity=".35"/>`];
 for(let x=0;x<game.width;x++){parts.push(`<text x="${64+x*48}" y="29" text-anchor="middle" fill="#718a8b" font-family="monospace" font-size="9">${E.columnLabel(x)}</text>`);if(grid)parts.push(`<path d="M${40+x*48} 38v${game.height*48}" stroke="#688783" stroke-opacity=".17" stroke-width=".7"/>`)}
 for(let y=0;y<game.height;y++){parts.push(`<text x="28" y="${66+y*48}" text-anchor="middle" fill="#718a8b" font-family="monospace" font-size="9">${String(y+1).padStart(2,'0')}</text>`);if(grid)parts.push(`<path d="M40 ${38+y*48}h${game.width*48}" stroke="#688783" stroke-opacity=".17" stroke-width=".7"/>`)}
 if(game.missionId!=='paris')parts.push(`<path d="M40 155h24M40 155v20M40 539h24M40 539v-20" fill="none" stroke="var(--cyan)" opacity=".5"/><text x="51" y="337" transform="rotate(-90 51 337)" font-family="monospace" font-size="7" letter-spacing="3" fill="var(--cyan)" opacity=".4">ZONE D’INSERTION</text><text x="444" y="115" font-family="monospace" font-size="8" letter-spacing="3" fill="#78908c" opacity=".5">VOIE 07</text>`);
 for(const b of E.terrainObjects(game).filter(b=>b.type==='building'&&b.hp>0)){const x=40+b.x*48+4,y=38+b.y*48+4,w=b.w*48-8,h=b.h*48-8;parts.push(`<g><rect x="${x+5}" y="${y+6}" width="${w}" height="${h}" fill="#090f1a" opacity=".6"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="var(--map-building)" stroke="#697b80"/><rect x="${x+7}" y="${y+7}" width="${w-14}" height="${h-14}" fill="url(#roof)" stroke="#55676d"/><path d="M${x+10} ${y+10}l${w-20} ${h-20}M${x+w-10} ${y+10}l-${w-20} ${h-20}" stroke="#617477" opacity=".45"/><rect x="${x+8}" y="${y+h/2-8}" width="${w-16}" height="16" fill="#25333f"/><text x="${x+w/2}" y="${y+h/2+3}" text-anchor="middle" fill="#859592" font-size="8" letter-spacing="1" font-family="monospace">${b.w>=2?b.name:'N1'}</text><text x="${x+w/2}" y="${y+h/2+16}" text-anchor="middle" fill="#e4c386" font-size="8">${b.w>=2?'N'+b.elevation+' · '+b.hp+' HP · ARM '+b.armor:''}</text></g>`)}
 for(const {x,y} of E.terrainObjects(game).filter(b=>b.type==='blocking'&&b.hp>0)){parts.push(`<g transform="translate(${40+x*48+6} ${38+y*48+13})"><rect x="2" y="3" width="36" height="23" fill="#101c1f"/><rect width="36" height="22" fill="#555746" stroke="#92886b"/><path d="M5 3v16M12 3v16M19 3v16M26 3v16M33 3v16" stroke="#a99c73" opacity=".4"/><path d="M0 0h36" stroke="#c0ad7e" stroke-width="2"/></g>`)}
 for(let y=0;y<game.height;y++)for(let x=0;x<game.width;x++){const t=E.terrainAt(game,x,y);if(t.type==='hindering')parts.push(`<rect class="hindering-cell" x="${42+x*48}" y="${40+y*48}" width="44" height="44" fill="url(#hindering-hatch)" pointer-events="none"/>`);}
 if(valid&&mode==='fire'&&consoleView!=='menu'){
  if(attackId==='smoke'){for(let y=0;y<game.height;y++)for(let x=0;x<game.width;x++)if(!E.smokeReason(game,u,{x,y}))parts.push(`<rect class="terrain-aim" x="${42+x*48}" y="${40+y*48}" width="44" height="44"/>`);}
  else for(const b of E.terrainObjects(game).filter(b=>b.hp>0&&E.canShoot(u,b,attackId,game)))parts.push(`<rect class="terrain-aim" x="${42+b.x*48}" y="${40+b.y*48}" width="${b.w*48-4}" height="${b.h*48-4}"/>`);
 }
 for(let y=0;y<game.height;y++)for(let x=0;x<game.width;x++){const occupant=E.living(game).find(v=>v.x===x&&v.y===y),tile=E.terrainAt(game,x,y),smokeTarget=valid&&mode==='fire'&&attackId==='smoke'&&!E.smokeReason(game,u,{x,y}),accessible=occupant||tile.object?.hp>0||smokeTarget||reach.has(E.key(x,y));parts.push(`<rect x="${40+x*48+1}" y="${38+y*48+1}" width="46" height="46" fill="transparent" class="cell ${reach.has(E.key(x,y))?'move-cell':''}" data-x="${x}" data-y="${y}" ${accessible?`role="button" aria-label="${occupant?occupant.name:tile.object?.hp>0?tile.object.name+' '+tile.object.hp+' HP':smokeTarget?'Fumée '+E.columnLabel(x)+(y+1):'Déplacer vers '+E.columnLabel(x)+(y+1)}" tabindex="0"`:'aria-hidden="true"'}><title>${E.columnLabel(x)}${y+1} · N${tile.elevation} · ${tile.type==='hindering'?'Gênant : mouvement ×2, tir −22':tile.object?.hp>0?tile.object.name+' · '+tile.object.hp+' HP · armure '+tile.object.armor:'Normal'}${reach.has(E.key(x,y))?' · coût '+E.pathCost(game,u,reach.get(E.key(x,y))):''}</title></rect>`);}
 if(hover&&reach.has(E.key(hover.x,hover.y))){const path=reach.get(E.key(hover.x,hover.y));parts.push(`<polyline id="hover-path" points="${[{x:u.x,y:u.y},...path].map(p=>`${64+p.x*48},${62+p.y*48}`).join(' ')}" fill="none" stroke="var(--cyan)" stroke-width="1.5" stroke-dasharray="4 4" pointer-events="none"/>`)}
 for(const v of game.units){const c=v.team==='player'?'var(--cyan)':'var(--red)';const target=valid&&mode==='fire'&&E.canShoot(u,v,attackId,game);const repair=valid&&mode==='power'&&powerId==='repair'&&v.team==='player'&&v.hp>0&&v.hp<v.maxHp&&E.distance(u,v)<=3;
 parts.push(`<g class="unit-svg ${v.done?'completed':''} ${v.hp<=0?'dead':''} ${v.id===selected?'selected':''}" transform="translate(${64+v.x*48} ${62+v.y*48})" style="color:${c}"><rect class="select-ring" x="-20" y="-21" width="40" height="41" fill="${v.team==='player'?'#2e403b':'#492c33'}" stroke="${c}" stroke-opacity=".7" stroke-width=".7"/>${v.hp>0?(automatonArt(v)||miniature(v)||`<g transform="scale(.64)">${mech}</g>`):'<path d="M-10-10L10 10M10-10L-10 10" stroke="currentColor" stroke-width="3"/>'}<text x="-17" y="-13" font-family="monospace" font-size="7" fill="${c}" class="map-unit-code">${v.code}${E.elevationAt(game,v)>0?' ↑'+E.elevationAt(game,v):''}</text>${v.shield?'<circle r="24" fill="none" stroke="var(--amber)" stroke-dasharray="4 2"/>':''}<rect x="-17" y="22" width="34" height="2" fill="#0e1b1d"/><rect x="-17" y="22" width="${34*v.hp/v.maxHp}" height="2" fill="${c}"/>${target?`<circle class="aim-ring" r="25"/><rect x="-18" y="-34" width="36" height="12" fill="#39282a"/><text y="-25" text-anchor="middle" fill="#ffb1a0" font-size="9" font-family="monospace">${E.hitChance(u,v,attackId,game)}%</text>`:''}${repair?'<circle r="25" fill="none" stroke="var(--amber)" stroke-width="2"/>':''}${v.done&&v.hp>0?'<text x="11" y="-12" fill="currentColor" font-size="10">✓</text>':''}</g>`)}
 if(targetId){const target=E.findTarget(game,targetId);if(target?.kind==='cell')for(const c of E.smokeCross(game,target))parts.push(`<rect class="smoke-preview" x="${42+c.x*48}" y="${40+c.y*48}" width="44" height="44"/>`);if(target){const aim=mode==='fire'&&target.kind!=='cell'?E.aimPoint(u,target,attackId,game):target;parts.push(`<line x1="${64+u.x*48}" y1="${62+u.y*48}" x2="${64+aim.x*48}" y2="${62+aim.y*48}" stroke="#dfbd79" stroke-width="2" stroke-dasharray="5 4" pointer-events="none"/><circle class="console-target-ring" cx="${64+aim.x*48}" cy="${62+aim.y*48}" r="28"/>`);}}
 $('battlefield').innerHTML=parts.join('');
}
function effect(a,b,result){const svg=$('battlefield');svg.insertAdjacentHTML('beforeend',`<line class="${E.ATTACKS[result.attackId]?.kind==='melee'?'slash-line':'shot-line'}" x1="${64+a.x*48}" y1="${62+a.y*48}" x2="${64+b.x*48}" y2="${62+b.y*48}"/><g transform="translate(${64+b.x*48} ${45+b.y*48})"><text class="damage-label" text-anchor="middle">${result.hit?'−'+result.damage:'MANQUÉ'}</text></g>`);beep(result.hit?110:230,.18)}
function finishCheck(){
 if(!game.winner)return false;
 busy=false;
 if(game.missionId==='paris'){
  epoch++;
  location.replace('./?screen=intermission');
  return true;
 }
 render();$('result-title').textContent=game.winner==='player'?'Relais sécurisé.':'Liaison perdue.';
 $('result-text').textContent=game.winner==='player'?`Mission accomplie en ${game.turn} tours. ${E.living(game).filter(u=>u.team==='player').length} pilote(s) de retour. Tous les contacts hostiles sont neutralisés.`:'Votre escouade a été neutralisée. Utilisez les couverts, les pouvoirs et les attaques déverrouillées pour reprendre l’avantage.';
 $('result').showModal();return true;
}
function fireAt(v){
 const u=unit();if(busy||!E.active(game,u)||u.team!=='player')return;
 if(attackId==='smoke'){if(E.deploySmoke(game,u,v)){closeConsole();toast('Fumée déployée : 5 cases gênantes.');}return;}
 const reason=E.attackReason(u,v,attackId,game);if(reason){toast(reason);return}
 const point=E.aimPoint(u,v,attackId,game);
 const result=E.resolveCombat(game,u,v,{attackId});if(result){closeConsole();effect(u,point,result);if(result.counter)effect(v,u,result.counter);if(!finishCheck())toast(result.counter?'Échange terminé : attaque et contre-attaque.':result.hit?'Cible touchée.':'Tir manqué.');}
}
function repairAt(v){
 if(busy||unit().team!=='player'||powerId!=='repair')return;
 if(E.power(game,unit(),'repair',v)){closeConsole();beep(800,.15);toast('Réparation transmise. Activation terminée.');}
 else toast('Cible blessée requise, à 3 cases maximum.');
}
function previewTarget(target){
 if(consoleView==='confirm'&&targetId===target.id){if(mode==='fire')fireAt(target);else if(mode==='power'&&powerId==='repair')repairAt(target);return;}
 targetId=target.id;consoleView='confirm';render();
}
function clickCell(x,y){
 if(busy||game.winner)return;const u=unit(),v=E.living(game).find(v=>v.x===x&&v.y===y);
 if(consoleOpen&&consoleView!=='menu'&&mode==='fire'&&u.team==='player'){
  if(attackId==='smoke'){const reason=E.smokeReason(game,u,{x,y});if(reason){toast(reason);return;}previewTarget(E.findTarget(game,'cell:'+x+','+y));return;}
  const terrain=E.terrainAt(game,x,y).object;
  if(!v&&terrain?.hp>0){const reason=E.attackReason(u,terrain,attackId,game);if(reason){toast(reason);return;}previewTarget(terrain);return;}
 }
 if(consoleOpen&&consoleView!=='menu'&&mode==='power'&&powerId==='repair'&&v){if(v.team!==u.team||v.hp>=v.maxHp||E.distance(u,v)>3){toast('Choisissez un allié blessé à 3 cases maximum.');return}previewTarget(v);return}
 if(consoleOpen&&consoleView!=='menu'&&mode==='fire'&&v&&v.team!==u.team&&u.team==='player'){const reason=E.attackReason(u,v,attackId,game);if(reason){toast(reason);return}previewTarget(v);return}
 if(v){select(v.id);return}
 if(mode==='move'&&u.team==='player'&&E.move(game,u,x,y)){mode='fire';consoleOpen=true;consoleView='menu';targetId=null;hover=null;beep(380);render();toast('En position. Choisissez votre attaque ou un pouvoir.');}else closeConsole();
}
function setMode(m){const u=unit();if(busy||!E.active(game,u)||u.team!=='player'||(m==='move'&&u.moved))return;mode=m;powerId=null;targetId=null;consoleOpen=true;consoleView=m==='move'?'target':'menu';hover=null;render();}
function choosePower(id){const u=unit();if(busy||!E.active(game,u)||u.team!=='player'||!u.pilot.powers.some(p=>p.id===id&&p.charges>0))return;if(mode==='power'&&powerId===id&&E.POWERS[id].target==='self'){usePower(id);return;}powerId=id;targetId=null;mode='power';consoleOpen=true;consoleView=E.POWERS[id].target==='ally'?'target':'menu';render();}
function usePower(id){
 const u=unit(),definition=E.POWERS[id];if(busy||!E.active(game,u)||u.team!=='player'||!u.pilot.powers.some(p=>p.id===id&&p.charges>0))return;
 if(definition.target==='ally')return;
 if(E.power(game,u,id)){if(u.done)closeConsole();else{powerId=null;targetId=null;consoleView='menu';mode='power';render();}beep(780,.12);toast(`${definition.name} activé.${u.done?' Activation terminée.':' Vous pouvez encore agir.'}`);}
}
const delay=ms=>new Promise(r=>setTimeout(r,ms));
function renderReaction(){
 if(!pendingReaction)return;
 const dialog=$('reaction'),focus=document.activeElement,key=focus?.dataset?.reaction?'reaction':focus?.dataset?.counter?'counter':null,value=key?focus.dataset[key]:null;
 dialog.innerHTML=reactionMarkup({game,...pendingReaction});
 if(key)dialog.querySelector(`[data-${key}="${value}"]`)?.focus({preventScroll:true});
}
function askReaction(attacker,defender,incomingId){
 return new Promise(resolve=>{
  pendingReaction={attacker,defender,attackId:incomingId,choice:E.aiReaction(game,attacker,defender,incomingId),resolve};
  selected=defender.id;render();revealUnit(defender);renderReaction();$('reaction').showModal();
  $('reaction').querySelector('[data-reaction][aria-pressed="true"]')?.focus({preventScroll:true});
 });
}
function confirmReaction(){
 if(!pendingReaction)return;
 const {choice,resolve}=pendingReaction;pendingReaction=null;$('reaction').close();resolve(choice);
}
$('reaction').addEventListener('cancel',e=>e.preventDefault());
async function endTurn(){
 if(busy||game.winner)return;closeConsole();busy=true;const ticket=epoch;E.startPhase(game,'enemy');render();await delay(800);
 for(const v of E.living(game).filter(v=>v.team==='enemy')){if(ticket!==epoch)return;if(v.hp<=0)continue;E.aiPrepare(game,v);const p=E.aiPlan(game,v);if(p&&(p.x!==v.x||p.y!==v.y))E.move(game,v,p.x,p.y);render();revealUnit(v);await delay(game.missionId==='paris'?180:450);if(ticket!==epoch)return;
 const shot=E.aiAttack(game,v);if(shot){const reaction=await askReaction(v,shot.target,shot.attackId);if(ticket!==epoch||!reaction)return;const result=E.resolveCombat(game,v,shot.target,{attackId:shot.attackId,reaction});render();if(result){effect(v,shot.target,result);if(result.counter)effect(shot.target,v,result.counter)}}else E.waitUnit(game,v);
 if(finishCheck())return;await delay(game.missionId==='paris'?240:600);}
 if(ticket!==epoch)return;E.startPhase(game,'player');busy=false;const next=E.living(game).find(v=>v.team==='player');selected=next.id;attackId=next.attacks[0];powerId=null;mode='inspect';render();revealUnit(next);beep(520,.12);toast(`Tour ${game.turn} — à vous, commandant.`);
}
function restart(missionId=game.missionId){epoch++;if(pendingReaction){pendingReaction.resolve(null);pendingReaction=null;$('reaction').close();}game=E.createGame(missionId);busy=false;selected='p1';attackId='snap';powerId=null;mode='inspect';hover=null;consoleOpen=false;consoleView='menu';targetId=null;for(const d of document.querySelectorAll('dialog'))d.close();configureMission();render();revealUnit(unit(),true);toast('Escouade déployée. Nouvelle mission.');}
document.addEventListener('click',e=>{
 if(pendingReaction){
  const reaction=e.target.closest('[data-reaction]'),counter=e.target.closest('[data-counter]');
  if(reaction&&!reaction.disabled){const type=reaction.dataset.reaction;if(['counter','block','dodge'].includes(type)){const options=E.counterOptions(game,pendingReaction.defender,pendingReaction.attacker);if(type!=='counter'||options.length){pendingReaction.choice={type,...(type==='counter'?{attackId:options[0].id}:{})};renderReaction();}}}
  if(counter&&!counter.disabled&&pendingReaction.choice.type==='counter'&&E.counterOptions(game,pendingReaction.defender,pendingReaction.attacker).some(a=>a.id===counter.dataset.counter)){pendingReaction.choice.attackId=counter.dataset.counter;renderReaction();}
  if(e.target.closest('[data-reaction-confirm]'))confirmReaction();
  return;
 }
 const card=e.target.closest('[data-unit]');if(card)select(card.dataset.unit);
 const attack=e.target.closest('[data-attack]');if(attack&&!attack.disabled&&!busy&&E.active(game,unit())&&unit().team==='player'&&!E.requirements(unit(),attack.dataset.attack).length){attackId=attack.dataset.attack;mode='fire';powerId=null;targetId=null;consoleView='target';render();}
 const power=e.target.closest('[data-power]');if(power&&!power.disabled)choosePower(power.dataset.power);
 const tab=e.target.closest('[data-mode]');if(tab&&!tab.disabled)setMode(tab.dataset.mode);
 const control=e.target.closest('[data-console]');if(!control||control.disabled)return;
 const action=control.dataset.console;
 if(action==='close'){closeConsole();return}
 if(busy||!E.active(game,unit())||unit().team!=='player')return;
 if(action==='back'){if(mode==='move')mode='fire';powerId=null;targetId=null;consoleView='menu';render();}
 if(action==='wait')waitSelected();
 if(action==='undo')undoSelectedMove();
 if(action==='power'&&mode==='power'&&powerId)usePower(powerId);
 if(consoleView==='confirm'&&targetId){const target=E.findTarget(game,targetId);if(action==='fire'&&mode==='fire')fireAt(target);if(action==='repair'&&mode==='power')repairAt(target);}
});
$('battlefield').addEventListener('click',e=>{const c=e.target.closest('[data-x]');if(c)clickCell(+c.dataset.x,+c.dataset.y);else closeConsole()});
$('battlefield').addEventListener('keydown',e=>{if(e.key!=='Enter'&&e.key!==' ')return;const c=e.target.closest('[data-x]');if(c){e.preventDefault();clickCell(+c.dataset.x,+c.dataset.y);$('orders').querySelector('.console-confirm,button:not(:disabled)')?.focus({preventScroll:true});}});
$('battlefield').addEventListener('pointermove',e=>{const c=e.target.closest('[data-x]');if(!c||mode!=='move')return;const x=+c.dataset.x,y=+c.dataset.y;if(hover?.x===x&&hover?.y===y)return;hover={x,y};$('hover-path')?.remove();const u=unit(),path=E.reachable(game,u).get(E.key(x,y));if(path)$('battlefield').insertAdjacentHTML('beforeend',`<polyline id="hover-path" points="${[u,...path].map(p=>`${64+p.x*48},${62+p.y*48}`).join(' ')}" fill="none" stroke="var(--cyan)" stroke-width="1.5" stroke-dasharray="4 4" pointer-events="none"/>`)});
$('battlefield').addEventListener('pointerleave',()=>{hover=null;$('hover-path')?.remove()});
function waitSelected(){if(!busy&&unit().team==='player'&&E.waitUnit(game,unit())){closeConsole();toast('Position maintenue. Activation terminée.')}}
function undoSelectedMove(){
 if(busy||!E.undoMove(game,unit()))return;
 powerId=null;targetId=null;hover=null;consoleOpen=false;consoleView='menu';mode='move';render();revealUnit(unit());toast('Déplacement annulé. Choisissez une nouvelle position.');
}
$('undo-move').onclick=undoSelectedMove;
$('journal-open').onclick=()=>$('journal-dialog').showModal();
$('end-turn').onclick=()=>{const left=E.living(game).filter(u=>u.team==='player'&&!u.done).length;if(left)showConfirm('Transmettre la fin du tour ?',`${left} unité(s) peuvent encore agir. Leurs actions restantes seront abandonnées pour ce tour.`,endTurn);else endTurn()};
$('restart').onclick=()=>showConfirm('Recommencer la mission ?','La progression de cette partie sera réinitialisée.',restart);$('play-again').onclick=()=>restart();$('help').onclick=()=>$('briefing').showModal();$('cancel-confirm').onclick=()=>$('confirm').close();$('accept-confirm').onclick=()=>{$('confirm').close();pendingConfirm?.()};
$('sound').onclick=()=>{sound=!sound;$('sound').textContent=sound?'SON ON':'SON OFF';$('sound').setAttribute('aria-label',sound?'Désactiver les sons':'Activer les sons');beep(600)};
$('grid-toggle').onclick=()=>{grid=!grid;$('grid-toggle').setAttribute('aria-pressed',String(grid));drawMap()};
document.addEventListener('keydown',e=>{if(document.querySelector('dialog[open]'))return;if(e.target.matches('select,input,textarea'))return;const ids={'1':'move','2':'fire','3':'power','4':'wait'};if(ids[e.key]){e.preventDefault();if(ids[e.key]==='wait')waitSelected();else setMode(ids[e.key])}if(e.key.toLowerCase()==='z'){e.preventDefault();undoSelectedMove()}if(e.key==='Escape'){closeConsole();closePanels()}});
const viewport=$('map-viewport');
let zoom=1,spacePan=false,drag=null,suppressClick=false;
const mapWidth=()=>80+game.width*48,mapHeight=()=>76+game.height*48;
function industrialBackdrop(){return '<path d="M424 38v576M40 350h768" stroke="var(--map-road)" stroke-width="91"/><path d="M424 38v576M40 350h768" stroke="#71817c" stroke-width="1" opacity=".2" stroke-dasharray="12 15"/>';}
function configureMission(){
 const mission=E.MISSIONS[game.missionId],large=game.missionId==='paris';
 $('mission-title').textContent=mission.title;
 document.querySelector('.mission-progress').title=`${mission.title} · Neutraliser les ${mission.enemies} unités hostiles`;
 document.querySelector('#briefing h2+p').textContent=mission.briefing;
 document.querySelector('.map-caption span').textContent=mission.caption;
 document.querySelector('.map-coordinates span').textContent=large?'PLAN FICTIF · INSPIRATION PARISIENNE':'48° 12′ N · 16° 22′ E';
 $('mission-select').value=mission.id;
 $('overview').hidden=!large;
 document.querySelector('.map-container').classList.toggle('large-map',large);
 $('battlefield').setAttribute('viewBox',`0 0 ${mapWidth()} ${mapHeight()}`);
 $('battlefield').setAttribute('aria-label',`Carte tactique interactive, ${game.width} colonnes et ${game.height} lignes`);
 zoom=large?1:Math.min(1,viewport.clientWidth/mapWidth(),viewport.clientHeight/mapHeight());applyZoom();
 const url=new URL(location.href);url.searchParams.set('mission',mission.id);history.replaceState(null,'',url);
}
function applyZoom(){
 $('battlefield').style.width=mapWidth()*zoom+'px';$('battlefield').style.height=mapHeight()*zoom+'px';
 $('zoom-label').textContent=Math.round(zoom*100)+' %';$('zoom-out').disabled=zoom<=.4;$('zoom-in').disabled=zoom>=1.5;
 positionConsole();drawOverview();
}
function setZoom(value){
 const x=(viewport.scrollLeft+viewport.clientWidth/2)/zoom,y=(viewport.scrollTop+viewport.clientHeight/2)/zoom;
 zoom=Math.max(.4,Math.min(1.5,value));applyZoom();viewport.scrollLeft=x*zoom-viewport.clientWidth/2;viewport.scrollTop=y*zoom-viewport.clientHeight/2;drawOverview();
}
function revealUnit(u,center=false){
 const map=document.querySelector('.map-container'),rect=map.getBoundingClientRect();
 if(rect.top<0||rect.bottom>window.innerHeight)map.scrollIntoView({block:'center',behavior:'instant'});
 const x=(64+u.x*48)*zoom,y=(62+u.y*48)*zoom,pad=80;
 if(center||x<viewport.scrollLeft+pad||x>viewport.scrollLeft+viewport.clientWidth-pad||y<viewport.scrollTop+pad||y>viewport.scrollTop+viewport.clientHeight-pad){viewport.scrollTo({left:x-viewport.clientWidth/2,top:y-viewport.clientHeight/2,behavior:'instant'});}
 positionConsole();drawOverview();
}
function drawOverview(){
 if($('overview').hidden)return;
 const shapes=E.terrainObjects(game).filter(b=>b.hp>0).map(b=>`<rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" fill="#65716c"/>`);
 for(const u of E.living(game))shapes.push(`<circle cx="${u.x+.5}" cy="${u.y+.5}" r="${u.id===selected?.65:.4}" fill="${u.team==='player'?'var(--cyan)':'var(--red)'}"/>`);
 const x=Math.max(0,(viewport.scrollLeft/zoom-40)/48),y=Math.max(0,(viewport.scrollTop/zoom-38)/48),right=Math.min(game.width,((viewport.scrollLeft+viewport.clientWidth)/zoom-40)/48),bottom=Math.min(game.height,((viewport.scrollTop+viewport.clientHeight)/zoom-38)/48);
 shapes.push(`<rect x="${x}" y="${y}" width="${Math.max(0,right-x)}" height="${Math.max(0,bottom-y)}" fill="#b6dfcc15" stroke="var(--amber)" stroke-width=".3"/>`);
 $('overview-map').innerHTML=shapes.join('');
}
viewport.addEventListener('scroll',()=>{positionConsole();drawOverview();},{passive:true});
viewport.addEventListener('keydown',e=>{
 const directions={ArrowLeft:[-120,0],ArrowRight:[120,0],ArrowUp:[0,-120],ArrowDown:[0,120]};
 if(directions[e.key]){e.preventDefault();const [left,top]=directions[e.key];viewport.scrollBy({left,top});}
 if(e.key==='+'||e.key==='='){e.preventDefault();setZoom(zoom+.1);}
 if(e.key==='-'){e.preventDefault();setZoom(zoom-.1);}
});
document.addEventListener('keydown',e=>{if(e.code==='Space'&&!e.repeat&&!document.querySelector('dialog[open]')&&(e.target===document.body||viewport.contains(e.target))){spacePan=true;viewport.classList.add('pan-ready');if(e.target===viewport||e.target===document.body)e.preventDefault();}});
document.addEventListener('keyup',e=>{if(e.code==='Space'){spacePan=false;viewport.classList.remove('pan-ready');}});
window.addEventListener('blur',()=>{spacePan=false;drag=null;viewport.classList.remove('pan-ready','panning');});
viewport.addEventListener('pointerdown',e=>{
 if(e.button!==1&&!(e.button===0&&spacePan))return;
 e.preventDefault();drag={id:e.pointerId,x:e.clientX,y:e.clientY,left:viewport.scrollLeft,top:viewport.scrollTop};viewport.setPointerCapture(e.pointerId);viewport.classList.add('panning');
});
viewport.addEventListener('pointermove',e=>{if(!drag)return;viewport.scrollLeft=drag.left+drag.x-e.clientX;viewport.scrollTop=drag.top+drag.y-e.clientY;});
function endPan(e){if(!drag)return;suppressClick=true;drag=null;if(viewport.hasPointerCapture(e.pointerId))viewport.releasePointerCapture(e.pointerId);viewport.classList.remove('panning');setTimeout(()=>suppressClick=false,0);}
viewport.addEventListener('pointerup',endPan);viewport.addEventListener('pointercancel',endPan);
viewport.addEventListener('click',e=>{if(suppressClick){e.stopPropagation();e.preventDefault();}},true);
$('zoom-in').onclick=()=>setZoom(zoom+.1);$('zoom-out').onclick=()=>setZoom(zoom-.1);$('recenter').onclick=()=>revealUnit(unit(),true);
$('overview').onclick=e=>{if(e.detail===0){revealUnit(unit(),true);return;}const r=$('overview-map').getBoundingClientRect();viewport.scrollTo({left:(40+(e.clientX-r.left)/r.width*game.width*48)*zoom-viewport.clientWidth/2,top:(38+(e.clientY-r.top)/r.height*game.height*48)*zoom-viewport.clientHeight/2});};
function closePanels(){
 for(const [name,id] of [['squad','squad-panel'],['telemetry','telemetry-panel']]){$(id).classList.remove('panel-open');document.querySelector(`[data-panel="${name}"]`).setAttribute('aria-expanded','false');}
}
document.addEventListener('click',e=>{
 const toggle=e.target.closest('[data-panel]');if(!toggle)return;
 const id=toggle.dataset.panel==='squad'?'squad-panel':'telemetry-panel',open=$(id).classList.contains('panel-open');closePanels();
 if(!open){$(id).classList.add('panel-open');document.querySelector(`[data-panel="${toggle.dataset.panel}"]`).setAttribute('aria-expanded','true');}
});
$('mission-select').onchange=e=>restart(e.target.value);
new ResizeObserver(()=>{positionConsole();drawOverview();}).observe(viewport);

configureMission();render();revealUnit(unit(),true);
