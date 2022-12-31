import { boardState } from "..";
import { getLeftEnd, getUpEnd } from "./blockEnds";

export const isBlockOverlapping=(x:number,y:number,blockShape:number[][])=>{
    const rowLength=blockShape.length;
    const colLength=blockShape[0].length;
    let result=false;
    for(let ox=0; ox<colLength;ox++){
      for(let oy=0; oy<rowLength;oy++){
         if(boardState[getUpEnd(y,rowLength)+oy][getLeftEnd(x,colLength)+ox] && blockShape[oy][ox] ) {
          result=true;
          break;
         }
      }
    }
    return result;
  }