import { boardState,block,distanceFromOrigin } from "..";
import { getLeftEnd, getUpEnd } from "./blockEnds";
import { isBlockOverlapping } from "./isBlockOverlapping";
import { isOutOfRange } from "./isOutOfRange";

export const fillBlock =(x:number,y:number)=>{
    console.log("x:",x,"y:",y);
    const {shape:blockShape}= block;
    const rowLength=blockShape.length;
    const colLength=blockShape[0].length;
    if(isOutOfRange(x,y,rowLength,colLength))return;
    // if(x-1<0 || y+1>9)return;
    if(isBlockOverlapping(x,y,rowLength,colLength))return;
    for(let ox=0; ox<colLength;ox++){
        for(let oy=0; oy<rowLength;oy++){
            if(!blockShape[oy][ox]) continue;
             boardState[oy+getUpEnd(y,rowLength)][ox+getLeftEnd(x,colLength)]=1;
             document.getElementById(`${ox+getLeftEnd(x,colLength)}+${oy+getUpEnd(y,rowLength)}`).classList.add('board__tile--filled');
             document.getElementById(`${ox+getLeftEnd(x,colLength)}+${oy+getUpEnd(y,rowLength)}`).classList.remove('board__tile--over');
        }
        }
    block.element.remove();
}


