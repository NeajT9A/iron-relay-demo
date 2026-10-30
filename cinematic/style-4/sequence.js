/* L'Éveil. Deterministic 45-second illustrated animation, shared by player and MP4 export. */
(() => {
'use strict';
const W=1920,H=1080,DURATION=45;
const campaign=new URLSearchParams(location.search).get('campaign')==='1';
let completed=false;
function completePrologue(){
 if(!campaign||completed)return;
 completed=true;pause();location.replace('../../mission.html?mission=paris');
}
if(campaign){
 document.body.classList.add('campaign');
 const skip=document.createElement('button');skip.id='skip';skip.textContent='Passer la cinématique →';
 skip.addEventListener('click',completePrologue);document.querySelector('.controls').append(skip);
 document.querySelector('header span').textContent='PROLOGUE / L’ÉVEIL';
}
const canvas=document.getElementById('film'),c=canvas.getContext('2d',{alpha:false});
const ui={play:document.getElementById('play'),seek:document.getElementById('seek'),time:document.getElementById('time'),status:document.getElementById('status')};
const chapters=[
 {start:0,end:5,name:'Catacombes',file:'01-catacombes'},
 {start:5,end:10,name:'L’abbaye',file:'02-decouverte'},
 {start:10,end:15,name:'Le terminal',file:'03-accueil-blank'},
 {start:15,end:22,name:'La requête',file:'04-requete-blank'},
 {start:22,end:26,name:'La réponse',file:'05-reponse-blank'},
 {start:26,end:31,name:'Le réveil',file:'06-reveil'},
 {start:31,end:39,name:'Manufactures',file:'07-manufacture'},
 {start:39,end:45,name:'Activation',file:'08-activation'}
];
const images={};const audio=new Audio('assets/sequence-sound-45s.wav');audio.preload='auto';
let position=0,playing=false,epoch=0,raf=0,lastFrame=-1,token=0,audioClock=false,ready=false;
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const ease=(a,b,t)=>{const x=clamp((t-a)/(b-a));return x*x*(3-2*x)};
const lerp=(a,b,t)=>a+(b-a)*t;
const rand=n=>{const x=Math.sin(n*127.1+91.7)*43758.5453;return x-Math.floor(x)};
const tint=(a,color='#03090e')=>{c.save();c.globalAlpha=clamp(a);c.fillStyle=color;c.fillRect(0,0,W,H);c.restore()};
function glow(x,y,r,color,alpha=1){if(alpha<=0)return;c.save();c.globalAlpha=alpha;c.globalCompositeOperation='screen';const g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,color);g.addColorStop(.16,color);g.addColorStop(1,'transparent');c.fillStyle=g;c.fillRect(x-r,y-r,2*r,2*r);c.restore()}
function camera(z,x=.5,y=.5){c.translate(W/2,H/2);c.scale(z,z);c.translate(-x*W,-y*H)}
function base(name){c.drawImage(images[name],0,0,W,H)}
function particles(t,strength=.2){c.save();c.fillStyle='#e4e0cc';for(let i=0;i<70;i++){const x=(rand(i)*W+t*(5+rand(i+3)*13))%W,y=(rand(i+200)*H-t*(2+rand(i+6)*6)+H*8)%H;c.globalAlpha=strength*(.3+.7*rand(i+11));c.fillRect(x,y,1+rand(i+400)*2,1+rand(i+50)*2)}c.restore()}
function steam(t,x,y,alpha=.2,width=360){c.save();c.globalCompositeOperation='screen';for(let i=0;i<8;i++){const age=(t*.16+i*.139)%1,px=x+(rand(i+40)-.5)*width+Math.sin(t*.3+i)*25,py=y-age*230;const r=50+age*100;const g=c.createRadialGradient(px,py,0,px,py,r);g.addColorStop(0,`rgba(181,199,187,${alpha*Math.sin(age*Math.PI)})`);g.addColorStop(1,'rgba(181,199,187,0)');c.fillStyle=g;c.fillRect(px-r,py-r,r*2,r*2)}c.restore()}
// A low-resolution glyph atlas preserves the fixed-cell appearance of the approved terminal.
const terminal=document.createElement('canvas');terminal.width=900;terminal.height=500;
const tc=terminal.getContext('2d');const glyphs=new Map();
function pixelText(s,x,y,size=28,color='#e3e9e5',align='left'){
 const scale=size/12,cell=8*scale;if(align==='center')x-=s.length*cell/2;
 tc.save();tc.imageSmoothingEnabled=false;
 for(let i=0;i<s.length;i++){
  const key=s[i]+color;let g=glyphs.get(key);
  if(!g){g=document.createElement('canvas');g.width=8;g.height=14;const q=g.getContext('2d');q.font='12px monospace';q.fillStyle=color;q.fillText(s[i],0,11);const p=q.getImageData(0,0,8,14);for(let n=3;n<p.data.length;n+=4)p.data[n]=p.data[n]>80?255:0;q.putImageData(p,0,0);glyphs.set(key,g)}
  tc.drawImage(g,x+i*cell,y-11*scale,8*scale,14*scale);
 }tc.restore();
}
function triangle(source,a,b,d,A,B,D){
 const den=a[0]*(b[1]-d[1])+b[0]*(d[1]-a[1])+d[0]*(a[1]-b[1]);
 const coeff=values=>[(values[0]*(b[1]-d[1])+values[1]*(d[1]-a[1])+values[2]*(a[1]-b[1]))/den,(values[0]*(d[0]-b[0])+values[1]*(a[0]-d[0])+values[2]*(b[0]-a[0]))/den,(values[0]*(b[0]*d[1]-d[0]*b[1])+values[1]*(d[0]*a[1]-a[0]*d[1])+values[2]*(a[0]*b[1]-b[0]*a[1]))/den];
 const X=coeff([A[0],B[0],D[0]]),Y=coeff([A[1],B[1],D[1]]);
 c.save();c.beginPath();c.moveTo(...A);c.lineTo(...B);c.lineTo(...D);c.closePath();c.clip();c.transform(X[0],Y[0],X[1],Y[1],X[2],Y[2]);c.drawImage(source,0,0);c.restore();
}
function projectText(points){
 const p=points.map(([x,y])=>[x*W,y*H]);
 const point=(u,v)=>[lerp(lerp(p[0][0],p[1][0],u),lerp(p[3][0],p[2][0],u),v),lerp(lerp(p[0][1],p[1][1],u),lerp(p[3][1],p[2][1],u),v)];
 for(let j=0;j<8;j++){const v=j/8,n=(j+1)/8,A=point(0,v),B=point(1,v),C=point(1,n),D=point(0,n);triangle(terminal,[0,v*500],[900,v*500],[900,n*500],A,B,C);triangle(terminal,[0,v*500],[900,n*500],[0,n*500],A,C,D)}
}
const quads={
 welcome:[[.506,.393],[.731,.378],[.738,.652],[.493,.662]],
 request:[[.518,.409],[.743,.385],[.752,.658],[.508,.670]],
 verdict:[[.184,.141],[.807,.117],[.847,.817],[.168,.824]]
};
function screenText(kind,t){
 tc.clearRect(0,0,900,500);
 if(kind==='welcome'){
  tc.globalAlpha=ease(.45,.85,t);pixelText('Sur quoi allons-nous travailler ?',450,220,32,'#e4eae6','center');tc.globalAlpha=1;
  if(t>.85&&Math.floor(t*1.35)%2===0)pixelText('█',445,290,29);
 }else if(kind==='request'){
  const q='Comment renverser le tyran Picrochole ?',n=Math.floor(q.length*clamp((t-.3)/3.1));
  pixelText(q.slice(0,n),34,110,29);if(t<3.5&&Math.floor(t*3)%2===0)pixelText('█',34+n*(8*29/12),110,29);
  const lines=[[3.8,'Délibère…'],[4.8,'Consulte les archives…'],[5.8,'Fait appel aux instruments…']];
  for(let i=0;i<lines.length;i++){const [start,label]=lines[i];if(t>=start){tc.globalAlpha=ease(start,start+.25,t);pixelText(label,34,220+i*60,28,'#cbd7ce')}}tc.globalAlpha=1;
 }else{
  const q='SIC SEMPER TYRANNIS',n=Math.floor(q.length*clamp((t-.4)/.45));pixelText(q.slice(0,n),450,265,45,'#eef5ef','center');
  if(t>1.6&&Math.floor(t*1.2)%2===0)pixelText('█',140,340,32);
 }
 projectText(quads[kind]);
}
function sparks(t,x,y){
 const power=.55+.45*Math.sin(t*3.1)**2;c.save();c.globalCompositeOperation='screen';
 glow(x,y,90,'#ffbd58',.16*power);
 for(let i=0;i<45;i++){const age=(t*(.6+rand(i)*1.4)+rand(i+80))%1,angle=-2.8+rand(i+20)*5.1,speed=60+rand(i+30)*230,xx=x+Math.cos(angle)*speed*age,yy=y+Math.sin(angle)*speed*age+100*age*age;c.globalAlpha=(1-age)*power;c.strokeStyle=i%4===0?'#fff3d3':'#ffae49';c.lineWidth=1+rand(i+42)*2;c.beginPath();c.moveTo(xx,yy);c.lineTo(xx-Math.cos(angle)*11*(1-age),yy-Math.sin(angle)*11*(1-age));c.stroke()}c.restore();
}
function scene(index,t){
 const s=chapters[index],u=clamp(t/(s.end-s.start));c.save();
 if(index===0){camera(lerp(1.04,1.15,u),lerp(.50,.53,u),.50);base(s.file);tint(.22);glow(.46*W,.69*H,200,'#d9953c',.12+.025*Math.sin(t*4));particles(t,.16)}
 if(index===1){camera(lerp(1.15,1.025,ease(0,5,t)),.5,lerp(.57,.50,u));base(s.file);tint(.48-ease(0,4,t)*.13);particles(t,.23)}
 if(index===2){camera(lerp(1.13,1.29,ease(0,5,t)),lerp(.55,.58,u),.52);base(s.file);tint(.3);screenText('welcome',t);glow(.64*W,.53*H,220,'#cedde0',.025*ease(.45,.85,t))}
 if(index===3){camera(lerp(1.20,1.30,u),.58,.53);base(s.file);tint(.28);screenText('request',t)}
 if(index===4){camera(lerp(1.0,1.08,u),.51,.49);base(s.file);tint(.12);screenText('verdict',t)}
 if(index===5){
  camera(lerp(1.04,1.13,u),.51,lerp(.54,.48,u));base(s.file);tint(lerp(.67,.035,ease(.2,3.8,t)));
  const lamps=[[.54,.52,.25],[.53,.39,.8],[.52,.27,1.35],[.50,.14,1.9],[.49,.035,2.45]];
  for(const [x,y,start]of lamps)glow(x*W,y*H,270,'#edf1ca',.13*ease(start,start+.45,t));
  steam(t,.29*W,.85*H,.1*ease(1,3,t));steam(t,.84*W,.75*H,.08*ease(1.5,3.5,t));particles(t,.3);
 }
 if(index===6){
  // Four deliberate cuts inside the manufacturing shot: shoulder, chest, mechanisms, full chassis.
  if(t<2)camera(lerp(1.15,1.27,t/2),.54,.45);
  else if(t<3.75)camera(lerp(1.75,1.9,(t-2)/1.75),.60,.37);
  else if(t<5.75)camera(lerp(1.57,1.72,(t-3.75)/2),.52,.62);
  else camera(lerp(1.18,1.03,(t-5.75)/2.25),.50,.50);
  c.translate(Math.sin(t*19)*.65,Math.cos(t*23)*.4);base(s.file);tint(.1);
  sparks(t,.612*W,.326*H);steam(t,.47*W,.95*H,.13,700);particles(t,.25);
 }
 if(index===7){
  const z=lerp(1.035,1.0,ease(0,4,t));camera(z,.5,.50);
  base('08-decor');
  // Independent robot layer: a restrained settling motion and parallax against the abbey.
  const rise=7*(1-ease(0,2,t)),sway=Math.sin(t*.6)*1.2;
  c.save();c.translate(W*.51+sway,H*.5-18+rise);const scale=.92+.003*ease(0,4,t);c.scale(scale,scale);c.translate(-W*.51,-H*.5);base('08-mecha-layer');
  const eye=ease(1.4,1.8,t);
  c.save();c.globalAlpha=1-eye;c.strokeStyle='#242e29';c.lineWidth=10;c.beginPath();c.moveTo(.499*W,.097*H);c.lineTo(.525*W,.091*H);c.stroke();c.restore();
  glow(.512*W,.096*H,65,'#ecfff0',.32*eye);
  c.save();c.globalAlpha=eye;c.strokeStyle='#effff1';c.lineWidth=4;c.shadowColor='#e2ffe8';c.shadowBlur=15;c.beginPath();c.moveTo(.499*W,.097*H);c.lineTo(.525*W,.091*H);c.stroke();c.restore();c.restore();
  // Restore the original foreground silhouettes in front of the independently moving robot.
  c.save();c.beginPath();
  const foreground=[[550,941],[558,894],[549,870],[569,804],[578,755],[577,736],[568,731],[580,712],[569,713],[595,694],[623,682],[634,677],[632,663],[640,650],[653,646],[666,652],[671,662],[668,678],[682,691],[693,714],[699,744],[703,761],[710,740],[723,714],[743,696],[747,682],[748,664],[773,658],[785,671],[780,692],[797,704],[812,708],[817,744],[819,772],[829,803],[821,820],[814,842],[814,877],[799,899],[799,941]];
  foreground.forEach(([x,y],i)=>i?c.lineTo(x/1672*W,y/941*H):c.moveTo(x/1672*W,y/941*H));c.closePath();c.clip();base('08-activation');c.restore();
  tint(.20*(1-ease(.8,3,t)));
  steam(t,.47*W,.91*H,.18,700);particles(t,.2);
 }
 c.restore();
}
function render(t){
 t=clamp(t,0,DURATION);c.setTransform(1,0,0,1,0,0);c.globalAlpha=1;c.fillStyle='#030506';c.fillRect(0,0,W,H);
 let index=chapters.findIndex(s=>t<s.end);if(index<0)index=7;
 scene(index,t-chapters[index].start);
 // A short black transition makes the change of scale between illustrations intentional.
 if(index>0&&index!==6&&index!==7)tint(1-ease(0,.42,t-chapters[index].start),'#020405');
 const vignette=c.createRadialGradient(W*.5,H*.48,W*.22,W*.5,H*.5,W*.69);vignette.addColorStop(0,'#00000000');vignette.addColorStop(1,'#00000080');c.fillStyle=vignette;c.fillRect(0,0,W,H);
 c.fillStyle='#030506';c.fillRect(0,0,W,50);c.fillRect(0,H-50,W,50);
 if(t<1)tint(1-ease(0,1,t),'#020405');
 if(t>=42.6){
  tint(.89*ease(42.6,43.2,t),'#030708');c.save();c.globalAlpha=ease(42.9,43.4,t)*(1-ease(44.5,45,t));c.textAlign='center';c.fillStyle='#e9e5d7';c.font='bold 68px monospace';c.letterSpacing='14px';c.fillText('SIC SEMPER TYRANNIS',W/2,H*.48);c.letterSpacing='6px';c.font='22px monospace';c.fillStyle='#c64b3f';c.fillText('L’ÉVEIL',W/2,H*.55);c.restore();
 }
 if(t>44.5)tint(ease(44.5,45,t),'#020405');
 return index;
}
const timecode=t=>`${String(Math.floor(t/60)).padStart(2,'0')}:${String(Math.floor(t%60)).padStart(2,'0')}`;
function sync(){ui.seek.value=position;ui.time.textContent=`${timecode(position)} / ${timecode(DURATION)}`;ui.play.textContent=playing?'Pause':position>=DURATION?'Rejouer':'Lire la séquence';const idx=chapters.findLastIndex(x=>position>=x.start);document.querySelectorAll('#chapters button').forEach((b,i)=>b.setAttribute('aria-current',String(i===idx)))}
function pause(){token++;playing=false;audio.pause();cancelAnimationFrame(raf);sync()}
function seekTo(t){position=clamp(t,0,DURATION);audio.currentTime=position;epoch=performance.now()-position*1000;render(position);lastFrame=-1;if(position>=DURATION)pause();sync()}
async function start(){
 if(!ready)return;if(position>=DURATION)seekTo(0);playing=true;const attempt=++token;epoch=performance.now()-position*1000;audio.currentTime=position;audioClock=false;
 try{await audio.play();if(attempt!==token){audio.pause();return}audioClock=true;ui.status.textContent=''}catch{ui.status.textContent='Lecture sans son : le navigateur n’a pas autorisé la bande-son.'}
 if(attempt!==token)return;sync();raf=requestAnimationFrame(tick);
}
function tick(now){if(!playing)return;position=Math.min(DURATION,audioClock?audio.currentTime:(now-epoch)/1000);const f=Math.floor(position*24);if(f!==lastFrame){render(position);lastFrame=f;sync()}if(position>=DURATION||audio.ended){position=DURATION;render(DURATION);pause();completePrologue();return}raf=requestAnimationFrame(tick)}
ui.play.addEventListener('click',()=>playing?pause():start());
ui.seek.addEventListener('input',()=>seekTo(Number(ui.seek.value)));
document.getElementById('restart').addEventListener('click',()=>{pause();seekTo(0);start()});
document.getElementById('sound').addEventListener('click',()=>{audio.muted=!audio.muted;document.getElementById('sound').textContent=audio.muted?'Son coupé':'Son activé';document.getElementById('sound').setAttribute('aria-pressed',String(!audio.muted))});
document.getElementById('fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.getElementById('player').requestFullscreen()}catch{ui.status.textContent='Le plein écran n’est pas disponible dans cet aperçu.'}});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing)pause()});
document.addEventListener('keydown',e=>{if(e.code==='Space'&&!['BUTTON','INPUT','SUMMARY','A'].includes(document.activeElement?.tagName)){e.preventDefault();playing?pause():start()}});
chapters.forEach((s,i)=>{const b=document.createElement('button');b.type='button';b.disabled=true;b.textContent=`0${i+1} ${s.name}`;b.addEventListener('click',()=>seekTo(s.start+.5));document.getElementById('chapters').append(b)});
window.sequence={duration:DURATION,chapters,render,seek:seekTo,pause,start,ready:false,get state(){return {position,playing,audioTime:audio.currentTime,audioDuration:audio.duration,audioError:audio.error?.message,muted:audio.muted}}};
Promise.all([...chapters.map(s=>s.file),'08-decor','08-mecha-layer'].map(name=>new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>{images[name]=im;resolve()};im.onerror=()=>reject(Error(`Image manquante : ${name}`));im.src=`assets/${name}.png`;}))).then(()=>{ready=true;window.sequence.ready=true;ui.play.disabled=false;ui.seek.disabled=false;document.getElementById('restart').disabled=false;document.querySelectorAll('#chapters button').forEach(b=>b.disabled=false);render(campaign?0:6);sync();if(campaign&&!completed)start()}).catch(e=>{ui.status.textContent=e.message;ui.play.textContent='Chargement impossible'});
})();
