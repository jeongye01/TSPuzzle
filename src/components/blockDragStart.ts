import { block, distanceFromOrigin, tileSize} from "..";



export const calcBlockOriginPos=(offsetX,offsetY,blockShape:number[][])=>{

     const halfTileSize=(tileSize.value/2);
     const originX=offsetX- blockShape[0].length*halfTileSize;
     const originY= offsetY-blockShape.length*halfTileSize;
     return {originX,originY};
   
}

export const blockStateSetter=(distanceFromOriginX,distanceFromOriginY,blockElement,blockShape)=>{
    const bindDiffSetter=distanceFromOrigin.setter.bind(distanceFromOrigin);
    bindDiffSetter(distanceFromOriginX,distanceFromOriginY)
    const bindBlockSetter=block.setter.bind(block);
    bindBlockSetter(blockElement,blockShape);
}