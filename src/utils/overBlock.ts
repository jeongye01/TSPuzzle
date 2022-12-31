import { getLeftEnd, getUpEnd } from "./blockEnds";
import { isBlockOverlapping } from "./isBlockOverlapping";
import { isOutOfRange } from "./isOutOfRange";

export const overBlock=(x:number,y:number,blockShape:number[][])=>{
    const rowLength=blockShape.length;
    const colLength=blockShape[0].length;
    if(isOutOfRange(x,y,rowLength,colLength))return;
  
    if(isBlockOverlapping(x,y,rowLength,colLength,blockShape))return;
   for(let ox=0; ox<colLength;ox++){
    for(let oy=0; oy<rowLength;oy++){
      if(!blockShape[oy][ox]) continue;
       document.getElementById(`${ox+getLeftEnd(x,colLength)}+${oy+getUpEnd(y,rowLength)}`).classList.add('tile-over');
    }
  }
  }