import { blockInfo, diff} from "..";

export const calcBlockOriginPos=(offsetX,offsetY,blockShape:number[][])=>{
     //orgin block 좌표와 마우스 좌표 차이 계산
     console.log(offsetX,offsetY)
     const diffX=offsetX- blockShape[0].length*20;
     const diffY= offsetY-blockShape.length*20;
     return {diffX,diffY};
   
}

export const statesSetter=(diffX,diffY,block,blockShape)=>{
    const bindDiffSetter=diff.setter.bind(diff);
    bindDiffSetter(diffX,diffY)
    const bindBlockSetter=blockInfo.setter.bind(blockInfo);
    bindBlockSetter(block,blockShape);
}