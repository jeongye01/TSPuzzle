import { boardState } from "..";

export const isOutOfRange=(x:number,y:number,blockShape:number[][])=>{
    
    const rowLength=blockShape.length;
  const colLength=blockShape[0].length;
  const isUpEndOut=((y-Math.trunc(rowLength/2)+(rowLength%2===0?1:0)))<0;
  const isDownEndOut=(y+Math.trunc(rowLength/2))>boardState.length-1;
  const isLeftEndOut=(x-Math.trunc(colLength/2))<0;
  const isRightEndOut=(x+Math.trunc(colLength/2)-(colLength%2===0?1:0))>boardState.length-1;

  return isUpEndOut || isDownEndOut || isLeftEndOut || isRightEndOut;
  
   }
