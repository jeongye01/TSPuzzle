import { blockInfo, diff, root } from "../..";
import { boardState } from "../..";
import BlockGenerator from "../BlockGenerator";
import { statesSetter,calcBlockOriginPos } from "../blockDragStart";

const blockShape=[[0,0,1],[0,0,1],[1,1,1]];
export function Block10 (){
 
  const block=document.createElement('div');
   
    
  const onDragStart=(e)=>{
     const {diffX,diffY} =calcBlockOriginPos(e.offsetX,e.offsetY,blockShape);
     statesSetter(diffX,diffY,block,fillBlock,overBlock);
  
 }
 
 BlockGenerator(block,blockShape);
  block.draggable=true;
  block.addEventListener("dragstart" ,onDragStart);
  block.setAttribute('class','block -block--eight');
 // block.setAttribute('class','block')
 root.appendChild(block);
 
}
export const fillBlock =(x:number,y:number)=>{
    console.log(x,y);
    if(x-1<0 ||x+1>9 || y+1>9 || y-1<0)return;
  console.log(boardState);
  for(let ox=0; ox<blockShape[0].length;ox++){
    for(let oy=0; oy<blockShape.length;oy++){
       if(boardState[y+oy-1][x+ox-1]&& blockShape[oy][ox]) return;
    }
 }
 for(let ox=0; ox<blockShape[0].length;ox++){
  for(let oy=0; oy<blockShape.length;oy++){
    if(!blockShape[oy][ox])continue;
    boardState[y+oy-1][x+ox-1] =1;
     const targetTile= document.getElementById(`${x+ox-1}+${y+oy-1}`);
     targetTile.classList.add('tile-filled');
     targetTile.classList.remove('tile-over');
  }
}


}

export const overBlock=(x:number,y:number)=>{
  if(x-1<0 ||x+1>9 || y+1>9 || y-1<0)return;
  for(let ox=0; ox<blockShape[0].length;ox++){
    for(let oy=0; oy<blockShape.length;oy++){
      if(boardState[y+oy-1][x+ox-1]&& blockShape[oy][ox]) return;
    }
 }
 for(let ox=0; ox<blockShape[0].length;ox++){
  for(let oy=0; oy<blockShape.length;oy++){
    if(!blockShape[oy][ox])continue;
     const targetTile= document.getElementById(`${x+ox-1}+${y+oy-1}`);
     targetTile.classList.add('tile-over');
  }
}
}