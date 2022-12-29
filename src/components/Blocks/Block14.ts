import { blockInfo, boardState, diff, root } from "../..";

import BlockGenerator from "../BlockGenerator";


const blockShape=[[1,1],[0,1]];
export function Block14 (diffSetter:(x:number,y:number)=>void,blockSetter:(block:HTMLDivElement,fillFunc:(x:number,y:number)=>void,overFunc:(x:number,y:number)=>void)=>void){
 
    const block=document.createElement('div');
    
    const onDragStart=(e)=>{
     
     
        // main block 좌표와 마우스 좌표 차이 계산
        console.log(e.offsetX,e.offsetY)
        const diffX=e.offsetX-60;
        const diffY=e.offsetY-20;
        const bindDiffSetter=diffSetter.bind(diff);
        bindDiffSetter(diffX,diffY)
        const bindBlockSetter=blockSetter.bind(blockInfo);
        bindBlockSetter(block,fillBlock,overBlock)
        // console.log("drag start");
      }
   
      BlockGenerator(block,blockShape);
  
    block.draggable=true;
    block.addEventListener("dragstart" ,onDragStart);
    block.setAttribute('class','-block--three block');

   
   // block.setAttribute('class','block')
   root.appendChild(block);
   
   }
export const fillBlock =(x:number,y:number)=>{
    console.log(x,y);
  if(x-1<0 || y+1>9)return;
  for(let i=-1;i<1;i++){
    for(let j=0;j<2;j++){
       if(  boardState[x+i][y+j]&& blockShape[i+1][j])return;
    }
  }  
  for(let i=-1;i<1;i++){
    for(let j=0;j<2;j++){
        if(!blockShape[i+1][j])  continue;
        if(boardState[y+j][x+i])return;
        document.getElementById(`${x+i}+${y+j}`).classList.add('tile-filled');
        document.getElementById(`${x+i}+${y+j}`).classList.remove('tile-over');
      
    }
  } 
  
}

export const overBlock=(x:number,y:number)=>{
    if(x-1<0 || y+1>9)return;
    if(boardState[x][y] || boardState[x][y+1] || boardState[x-1][y+1]) return;
  
   

    document.getElementById(`${x}+${y}`).classList.add('tile-over');
    document.getElementById(`${x}+${y+1}`).classList.add('tile-over');
    document.getElementById(`${x-1}+${y+1}`).classList.add('tile-over');
}
  