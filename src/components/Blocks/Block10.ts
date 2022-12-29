import { blockInfo, boardState, diff, root } from "../..";
import BlockGenerator from "../BlockGenerator";
import BlockTile from "../BlockTile";
const blockShape=[[0,0,1],[0,0,1],[1,1,1]];
export function Block10 (diffSetter:(x:number,y:number)=>void,blockSetter:(block:HTMLDivElement,fillFunc:(x:number,y:number)=>void,overFunc:(x:number,y:number)=>void)=>void){
 
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
    block.setAttribute('class','-block--ten block');

   // block.setAttribute('class','block')
   root.appendChild(block);
   
   }
export const fillBlock =(x:number,y:number)=>{
    // main block 좌표가 속해있는 board 좌표
 // console.log(e.target.dataset);
   
  // console.log(Math.trunc(mainX/40),Math.trunc(mainY/40));

  if(x-1<0 || x+1>9)return;
  if( y+2>9)return;
  
  for(let i=-1;i<2;i++){
    for(let j=0;j<3;j++){
        // console.log("fill",i+1,j)
       console.log(boardState[x+i][y+j] , blockShape[i+1][j])
       if(  boardState[x+i][y+j] && blockShape[i+1][j])return;
    }
  }  
  for(let i=-1;i<2;i++){
    for(let j=0;j<3;j++){
         if(!blockShape[i+1][j])  continue;
        boardState[x+i][y+j]=1;
        document.getElementById(`${x+i}+${y+j}`).classList.add('tile-filled');
        document.getElementById(`${x+i}+${y+j}`).classList.remove('tile-over');
    }
  }  
}

export const overBlock=(x:number,y:number)=>{
    if(x-1<0 || x+1>9)return;
  if( y+2>9)return;
  for(let i=-1;i<2;i++){
    for(let j=0;j<3;j++){
       if(  boardState[x+i][y+j]&& blockShape[i+1][j])return;
    }
  }  
  for(let i=-1;i<2;i++){
    for(let j=0;j<3;j++){
        if(!blockShape[i+1][j])  continue;
        if(boardState[x+i][y+j])return;
        document.getElementById(`${x+i}+${y+j}`).classList.add('tile-over');
      
    }
  }  
}
  