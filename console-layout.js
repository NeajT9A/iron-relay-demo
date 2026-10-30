// All geometry is in map-container pixels. Prefer keeping both units visible.
export function consolePosition({width,height,panelWidth,panelHeight,anchor,avoid=[]}) {
 const margin=8,gap=22,w=Math.min(panelWidth,width-2*margin),h=Math.min(panelHeight,height-2*margin);
 const clamp=(n,min,max)=>Math.max(min,Math.min(n,Math.max(min,max)));
 const candidates=[
  [anchor.x+gap,anchor.y-h/2], [anchor.x-w-gap,anchor.y-h/2],
  [anchor.x-w/2,anchor.y+gap], [anchor.x-w/2,anchor.y-h-gap],
  [margin,margin],[width-w-margin,margin],[margin,height-h-margin],[width-w-margin,height-h-margin]
 ].map(([left,top])=>({left:clamp(left,margin,width-w-margin),top:clamp(top,margin,height-h-margin)}));
 const overlaps=(p,a,padding=gap)=>a.x>p.left-padding&&a.x<p.left+w+padding&&a.y>p.top-padding&&a.y<p.top+h+padding;
 const score=p=>(overlaps(p,anchor)?1000000:0)+avoid.reduce((n,a)=>n+(overlaps(p,a,0)?100000:overlaps(p,a)?10000:0),0)+Math.hypot(p.left+w/2-anchor.x,p.top+h/2-anchor.y);
 return candidates.reduce((best,p)=>score(p)<score(best)?p:best);
}
