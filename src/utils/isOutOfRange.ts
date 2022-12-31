import { boardState } from "..";

/**
 * 블록일부가 보드 바깥으로 벗어난 경우 판단 
 * @param x 변환된 구간 배열
 * @param y mainder 선택되지 않은 구간 배열
 * @param blockShape block 모양 데이터 
 * @return 블록일부가 보드 바깥으로 벗어난 경우 true 아니면 false 리턴 
 */
export const isOutOfRange=(x:number,y:number,blockShape:number[][])=>{
    
    const rowLength=blockShape.length;
  const colLength=blockShape[0].length;
  const isUpEndOut=((y-Math.trunc(rowLength/2)+(rowLength%2===0?1:0)))<0;
  const isDownEndOut=(y+Math.trunc(rowLength/2))>boardState.length-1;
  const isLeftEndOut=(x-Math.trunc(colLength/2))<0;
  const isRightEndOut=(x+Math.trunc(colLength/2)-(colLength%2===0?1:0))>boardState.length-1;

  return isUpEndOut || isDownEndOut || isLeftEndOut || isRightEndOut;
  
   }
