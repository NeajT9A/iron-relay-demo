// Decorative geometry follows the same road axes used by the playable terrain.
export function cityBackdrop(){
 const point=(x,y)=>`${64+x*48} ${62+y*48}`;
 const roads=[[[0,6],[31,6]],[[0,12],[31,12]],[[0,19],[31,19]],[[7,0],[7,23]],[[16,0],[16,23]],[[25,0],[25,23]],[[0,2],[31,22.15]],[[0,23],[31,2.85]]];
 let svg='<rect x="40" y="38" width="1536" height="1152" fill="var(--map-bg)"/>';
 for(const [a,b] of roads){const d=`M${point(...a)}L${point(...b)}`;svg+=`<path d="${d}" stroke="#687171" stroke-width="145" opacity=".35"/><path d="${d}" stroke="var(--map-road)" stroke-width="129"/><path d="${d}" stroke="#9b9c86" stroke-width="1" stroke-dasharray="9 15" opacity=".38"/>`;}
 svg+=`<circle cx="832" cy="638" r="178" fill="#364749" stroke="#8c9175" stroke-opacity=".45"/><circle cx="832" cy="638" r="148" fill="none" stroke="#92947c" stroke-dasharray="2 8" opacity=".4"/><circle cx="832" cy="638" r="49" fill="none" stroke="#b1a980" opacity=".35"/><path d="M806 638h52M832 612v52" stroke="#b1a980" opacity=".35"/>`;
 const labels=[[330,950,'BOULEVARD DES COURONNES',0],[1190,346,'RUE DES ARCHIVES',0],[832,590,'PLACE DE L’ÉTOILE',0],[406,170,'AVENUE DE LA RÉPUBLIQUE',90],[1120,810,'BOULEVARD HAUSSMANN',33],[1130,300,'AVENUE DE L’OPÉRA',-33]];
 for(const [x,y,label,angle]of labels)svg+=`<text x="${x}" y="${y}" transform="rotate(${angle} ${x} ${y})" fill="#c2bda2" opacity=".55" font-family="monospace" font-size="10" letter-spacing="2" text-anchor="middle">${label}</text>`;
 return svg;
}
