import { blockInfo, boardState, diff, root } from "../..";
import BlockTile from "../BlockTile";

export function Block2 (diffSetter:(x:number,y:number)=>void,blockSetter:(block:HTMLDivElement,fillFunc:(x:number,y:number)=>void,overFunc:(x:number,y:number)=>void)=>void){
 
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
   
    BlockTile(block); 
    BlockTile(block);
    BlockTile(block);
    block.draggable=true;
    block.addEventListener("dragstart" ,onDragStart);
    block.setAttribute('class','-block--two block');

   // block.setAttribute('class','block')
   root.appendChild(block);
   
   }
export const fillBlock =(x:number,y:number)=>{
    // main block 좌표가 속해있는 board 좌표
 // console.log(e.target.dataset);
   
  // console.log(Math.trunc(mainX/40),Math.trunc(mainY/40));
  if(x-1<0 || x+1>9)return;
  // console.log(boardState[x][y] , boardState[x-1][y] , boardState[x+1][y])
  if(boardState[x][y] || boardState[x-1][y] || boardState[x+1][y]) return;

  boardState[x][y]= boardState[x-1][y]=boardState[x+1][y]=1;
  document.getElementById(`${x}+${y}`).classList.add('tile-filled');
  document.getElementById(`${x-1}+${y}`).classList.add('tile-filled');
  document.getElementById(`${x+1}+${y}`).classList.add('tile-filled');
  document.getElementById(`${x}+${y}`).classList.remove('tile-over');
  document.getElementById(`${x-1}+${y}`).classList.remove('tile-over');
  document.getElementById(`${x+1}+${y}`).classList.remove('tile-over');
}

export const overBlock=(x:number,y:number)=>{
   if(x-1<0 || x+1>9)return;
if(boardState[x][y] || boardState[x-1][y] || boardState[x+1][y]) return;

document.getElementById(`${x}+${y}`).classList.add('tile-over');
document.getElementById(`${x-1}+${y}`).classList.add('tile-over');
document.getElementById(`${x+1}+${y}`).classList.add('tile-over');
}
  