import { block, distanceFromOrigin} from "..";

export const calcBlockOriginPos=(offsetX,offsetY,blockShape:number[][])=>{
     //orgin block 좌표와 마우스 좌표 차이 계산
     console.log(offsetX,offsetY)
     const originX=offsetX- blockShape[0].length*20;
     const originY= offsetY-blockShape.length*20;
     return {originX,originY};
   
}

export const blockStateSetter=(distanceFromOriginX,distanceFromOriginY,blockElement,blockShape)=>{
    const bindDiffSetter=distanceFromOrigin.setter.bind(distanceFromOrigin);
    bindDiffSetter(distanceFromOriginX,distanceFromOriginY)
    const bindBlockSetter=block.setter.bind(block);
    bindBlockSetter(blockElement,blockShape);
}