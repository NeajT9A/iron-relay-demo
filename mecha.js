// Approved style 4 miniatures; shared by the tactical map, roster and portraits.
export const REBEL_ART={
 assault:{file:'style-4/kestrel.png',size:42},
 bastion:{file:'style-4/bulwark.png',size:46},
 sniper:{file:'style-4/longshot.png',size:43},
 support:{file:'style-4/patch.png',size:40},
 skirmisher:{file:'style-4/hawk.png',size:36}
};
export function rebelArt(u){return u.team==='player'?REBEL_ART[u.chassis]:null;}
export function miniature(u){
 const art=rebelArt(u);if(!art)return '';
 return `<image class="mecha-sprite" href="assets/mechas/${art.file}" x="${-art.size/2}" y="${20-art.size}" width="${art.size}" height="${art.size}" preserveAspectRatio="xMidYMax meet"/>`;
}
export function rebelPortrait(u){
 const art=rebelArt(u);if(!art)return '';
 return `<img class="rebel-portrait" src="assets/mechas/${art.file}" alt="${u.name}, mecha rebelle réparé"/>`;
}

const PICROCHOLE_ART={
 pikeman:{file:'style-4/lancier.png',size:46},
 musketeer:{file:'style-4/fusilier.png',size:42},
 grenadier:{file:'style-4/grenadier.png',size:44}
};
export function automatonArt(u,portrait=false){
 const art=u.automaton&&PICROCHOLE_ART[u.chassis];if(!art)return '';
 if(portrait)return `<img class="rebel-portrait" src="assets/mechas/${art.file}" alt="${u.name}, automate de Picrochole"/>`;
 return `<image class="mecha-sprite" href="assets/mechas/${art.file}" x="${-art.size/2}" y="${20-art.size}" width="${art.size}" height="${art.size}" preserveAspectRatio="xMidYMax meet"/>`;
}
