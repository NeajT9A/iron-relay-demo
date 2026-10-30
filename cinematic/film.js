/* Deterministic 15-second animatic. The same frame renderer drives playback and video export. */
const canvas=document.getElementById('film'), ctx=canvas.getContext('2d');
const DURATION=15, W=1280,H=720;
const image=new Image(); image.src='assets/abbey-v1.png';
const audio=new Audio('assets/awakening-v1.wav'); audio.preload='auto';
const play=document.getElementById('play'),seek=document.getElementById('seek'),status=document.getElementById('status');
let position=0,playing=false,epoch=0,muted=false;
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
const smooth=(a,b,t)=>{const v=clamp((t-a)/(b-a));return v*v*(3-2*v)};
const mix=(a,b,v)=>a+(b-a)*v;
function rect(x,y,w,h,r,fill){ctx.fillStyle=fill;ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fill()}
function line(x,y,x2,y2,color,width=1){ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x2,y2);ctx.stroke()}
function text(s,x,y,size=18,color='#cbd2cd',font='monospace'){ctx.font=`${size}px ${font}`;ctx.fillStyle=color;ctx.fillText(s,x,y)}
// Fixed character cells, rasterized once at low resolution, then enlarged without
// interpolation: a videotex-like display rather than smooth modern UI typography.
const glyphCache=new Map();
function videotex(s,x,y,size=24,color='#d4dbd6',center=false){
 const scale=size/12,cell=8*scale;
 if(center)x-=s.length*cell/2;
 ctx.save();ctx.imageSmoothingEnabled=false;
 for(let i=0;i<s.length;i++){
  const key=s[i]+color;let glyph=glyphCache.get(key);
  if(!glyph){
   glyph=document.createElement('canvas');glyph.width=8;glyph.height=14;
   const g=glyph.getContext('2d');g.font='12px monospace';g.textBaseline='alphabetic';g.fillStyle=color;g.fillText(s[i],0,11);
   const pixels=g.getImageData(0,0,8,14);
   for(let p=3;p<pixels.data.length;p+=4)pixels.data[p]=pixels.data[p]>80?255:0;
   g.putImageData(pixels,0,0);glyphCache.set(key,glyph);
  }
  ctx.drawImage(glyph,Math.round(x+i*cell),Math.round(y-11*scale),8*scale,14*scale);
 }
 ctx.restore();
}
function terminal(t){
 const away=smooth(10.5,11.65,t),zoom=mix(.97,1.025,clamp(t/10.5));
 ctx.save();ctx.globalAlpha=1-away;ctx.translate(640,360+away*190);ctx.scale(zoom*(1-away*.18),zoom*(1-away*.18));ctx.translate(-640,-360);
 ctx.shadowColor='#000';ctx.shadowBlur=70;ctx.shadowOffsetY=25;
 let housing=ctx.createLinearGradient(250,55,960,680);housing.addColorStop(0,'#b7b5a7');housing.addColorStop(.24,'#96998e');housing.addColorStop(.7,'#73796f');housing.addColorStop(1,'#494f49');
 rect(232,51,816,581,18,housing);ctx.shadowBlur=0;ctx.shadowOffsetY=0;
 line(258,74,1023,74,'#c1c2b7');
 rect(263,82,754,452,14,'#303630');rect(275,94,730,428,16,'#111715');
 let screen=ctx.createRadialGradient(630,275,50,640,310,430);screen.addColorStop(0,'#141c1b');screen.addColorStop(1,'#080d0d');rect(287,106,706,404,15,screen);
 // Dust and scratches fixed to the Bakelite case.
 for(let i=0;i<100;i++){let x=250+(Math.sin(i*123.4)*.5+.5)*780,y=58+(Math.cos(i*51.7)*.5+.5)*565;if(x<275||x>1005||y<90||y>525){ctx.fillStyle='rgba(224,209,171,.1)';ctx.fillRect(x,y,2,1)}}
 ctx.save();ctx.beginPath();ctx.roundRect(288,107,704,402,18);ctx.clip();
 const boot=smooth(0,.65,t);ctx.globalAlpha=(1-away)*boot;
 ctx.shadowColor='#d1dfd8';ctx.shadowBlur=1.5;
 rect(319,127,641,25,0,'#adb8b0');
 videotex('ABBAYE / TERMINAL 07',328,145,16,'#111917');
 videotex('CONNECTÉ',843,145,16,'#111917');
 videotex('Sur quoi allons-nous travailler ?',640,229,27,'#e0e6df',true);
 if(t>=1.9){
  const question='Comment renverser le tyran Picrochole ?';
  const n=Math.floor(clamp((t-1.9)/3.0)*question.length);
  videotex('> '+question.slice(0,n)+(t<5.05&&Math.floor(t*3)%2===0?'█':''),324,301,23);
 }
 const steps=[[5.15,'Délibère…'],[6.05,'Consulte les archives…'],[7.0,'Fait appel aux instruments…']];
 steps.forEach(([start,label],i)=>{if(t>=start){videotex((t>start+.7?'. ':'> ')+label,324,361+i*29,19,'#aab9af')}});
 if(t>=8.35){
  const a=smooth(8.35,8.55,t);ctx.globalAlpha=(1-away)*a;
  rect(315,338,650,151,0,'#111918');
  videotex('SIC SEMPER TYRANNIS',640,419,36,'#e3e9e1',true);
  videotex('█',324,466,21,'#b9c8bd');
 }
 ctx.shadowBlur=0;ctx.globalAlpha=(1-away)*.13;
 for(let y=107;y<510;y+=3){ctx.fillStyle='#000';ctx.fillRect(288,y,704,1)}
 const reflection=ctx.createLinearGradient(300,100,650,500);reflection.addColorStop(0,'rgba(210,228,219,.035)');reflection.addColorStop(.6,'rgba(255,255,255,0)');ctx.globalAlpha=1-away;ctx.fillStyle=reflection;ctx.fillRect(288,107,704,402);
 ctx.restore();
 text('ORDINATEUR CONVERSANT',275,555,11,'#222b22');text('MOD.  /  07',918,555,11,'#242c23');
 rect(280,574,700,23,4,'#3d4237');
 for(let row=0;row<2;row++)for(let i=0;i<17;i++){let key=ctx.createLinearGradient(0,577+row*18,0,595+row*18);key.addColorStop(0,'#aaa18b');key.addColorStop(1,'#6f705e');rect(290+i*40+row*4,575+row*19,34,15,2,key)}
 rect(245,627,790,12,4,'#232a24');
 const light=ctx.createRadialGradient(993,550,0,993,550,10);light.addColorStop(0,'#ffbb50');light.addColorStop(1,'#a7772100');ctx.fillStyle=light;ctx.fillRect(980,538,26,26);
 ctx.restore();
}
function renderFrame(t){
 t=clamp(t,0,DURATION);ctx.clearRect(0,0,W,H);ctx.fillStyle='#050806';ctx.fillRect(0,0,W,H);
 const awaken=smooth(10.5,13.65,t),z=mix(1.045,1.0,smooth(10.4,15,t));
 ctx.save();ctx.translate(W/2,H/2);ctx.scale(z,z);ctx.translate(-W/2,-H/2);
 ctx.drawImage(image,0,0,W,H);
 ctx.fillStyle=`rgba(2,8,5,${mix(.88,.13,awaken)})`;ctx.fillRect(0,0,W,H);
 // Sequential lamps brighten from the distant choir toward the viewer.
 const lamps=[[610,300,10.5],[543,263,10.9],[478,211,11.3],[361,132,11.7],[194,33,12.1],[666,298,10.65],[741,251,11.05],[830,172,11.45],[900,27,11.85]];
 lamps.forEach(([x,y,start])=>{const a=smooth(start,start+.4,t);if(!a)return;const g=ctx.createRadialGradient(x,y,0,x,y,140);g.addColorStop(0,`rgba(255,207,112,${a*.20})`);g.addColorStop(.2,`rgba(238,178,80,${a*.08})`);g.addColorStop(1,'rgba(210,170,80,0)');ctx.fillStyle=g;ctx.fillRect(x-140,y-140,280,280)});
 ctx.restore();
 if(t<11.65)terminal(t);
 // Slow motes, deterministic at every timecode. No rapid strobing.
 ctx.save();ctx.globalAlpha=.22;for(let i=0;i<55;i++){let x=(i*197.3+t*(i%3+1)*2)%W,y=(i*83.7-t*(i%4+1)*1.4+H)%H;ctx.fillStyle='#cbb58a';ctx.fillRect(x,y,i%3===0?2:1,1)}ctx.restore();
 const vignette=ctx.createRadialGradient(640,340,240,640,360,760);vignette.addColorStop(0,'#00000000');vignette.addColorStop(1,'#000000bb');ctx.fillStyle=vignette;ctx.fillRect(0,0,W,H);
 // Cinema matte and a modest fade into the next planned shot.
 ctx.fillStyle='#050604';ctx.fillRect(0,0,W,27);ctx.fillRect(0,H-27,W,27);
 if(t<.35){ctx.fillStyle=`rgba(0,0,0,${1-smooth(0,.35,t)})`;ctx.fillRect(0,0,W,H)}
 if(t>14.55){ctx.fillStyle=`rgba(0,0,0,${smooth(14.55,15,t)})`;ctx.fillRect(0,0,W,H)}
}
function sync(){seek.value=position;document.getElementById('time').textContent=`00:${String(Math.floor(position)).padStart(2,'0')} / 00:15`;play.textContent=playing?'Pause':position>=DURATION?'Rejouer':'Lire la séquence'}
function stop(){playing=false;audio.pause();sync()}
async function start(){if(position>=DURATION)position=0;playing=true;epoch=performance.now()-position*1000;audio.currentTime=position;audio.muted=muted;try{await audio.play()}catch{status.textContent='Lecture sans son. Le son pourra être réactivé.'}sync()}
function loop(now){if(playing){position=Math.min(DURATION,(now-epoch)/1000);renderFrame(position);if(position>=DURATION)stop();sync()}requestAnimationFrame(loop)}
play.addEventListener('click',()=>playing?stop():start());
document.getElementById('restart').addEventListener('click',()=>{stop();position=0;renderFrame(0);start()});
seek.addEventListener('input',()=>{position=Number(seek.value);epoch=performance.now()-position*1000;audio.currentTime=position;renderFrame(position);if(position>=DURATION)stop();sync()});
document.getElementById('sound').addEventListener('click',async()=>{muted=!muted;audio.muted=muted;document.getElementById('sound').textContent=muted?'Son coupé':'Son activé';document.getElementById('sound').setAttribute('aria-pressed',String(!muted));if(playing&&!muted){audio.currentTime=position;try{await audio.play()}catch{status.textContent='Le navigateur ne peut pas lire la bande-son.'}}});
document.getElementById('fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.querySelector('main').requestFullscreen()}catch{status.textContent='Le plein écran n’est pas disponible dans cet aperçu.'}});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing)stop()});
window.animatic={render:renderFrame,duration:DURATION,ready:false};
image.onload=()=>{renderFrame(.95);play.disabled=false;seek.disabled=false;document.getElementById('restart').disabled=false;window.animatic.ready=true;sync();requestAnimationFrame(loop)};
image.onerror=()=>{status.classList.remove('sr-only');status.textContent='Le décor n’a pas pu être chargé. Vérifiez le dossier assets.'};
