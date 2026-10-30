const params=new URLSearchParams(location.search);
// Preserve the existing direct links to both tactical demos.
if(['industrial','paris'].includes(params.get('mission'))){
 location.replace(`mission.html?mission=${params.get('mission')}`);
}else{
 const title={options:'Options',intermission:'Intermission'}[params.get('screen')];
 if(title){
  document.getElementById('main-menu').hidden=true;
  document.getElementById('empty-menu').hidden=false;
  document.getElementById('screen-title').textContent=title;
  document.title=`${title} — SIC SEMPER TYRANNIS`;
  document.getElementById('screen-title').focus();
 }
}
