import { boardState } from "..";
import { getDownEnd, getLeftEnd, getRightEnd, getUpEnd } from "./blockEnds";

/**
 * 블록일부가 보드 바깥으로 벗어난 경우 판단 
 * @param x 변환된 구간 배열
 * @param y mainder 선택되지 않은 구간 배열
 * @param blockShape block 모양 데이터 
 * @return 블록일부가 보드 바깥으로 벗어난 경우 true 아니면 false 리턴 
 */

export const isOutOfRange=(x:number,y:number,rowLength:number,colLength:number)=>{
    

  const isUpEndOut=getUpEnd(y,rowLength)<0;
  const isDownEndOut=getDownEnd(y,rowLength)>boardState.length-1;
  const isLeftEndOut=getLeftEnd(x,colLength)<0;
  const isRightEndOut=getRightEnd(x,colLength)>boardState.length-1;

  return isUpEndOut || isDownEndOut || isLeftEndOut || isRightEndOut;
  
   }
