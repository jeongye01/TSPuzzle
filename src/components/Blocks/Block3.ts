import { blockInfo, boardState, diff, root } from "../..";
import BlockTile from "../BlockTile";

export function Block3 (diffSetter:(x:number,y:number)=>void,blockSetter:(block:HTMLDivElement,fillFunc:(x:number,y:number)=>void,overFunc:(x:number,y:number)=>void)=>void){
 
    const block=document.createElement('div');
    const blockRowContainer=document.createElement('div');
    
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
    const tile=document.createElement('div');  
    tile.setAttribute('class','tile');  
    const tile2=document.createElement('div');  
    tile2.setAttribute('class','tile');  
    blockRowContainer.appendChild(tile);
    blockRowContainer.appendChild(tile2);
    blockRowContainer.style.display="flex";
    block.appendChild(blockRowContainer);
  
    block.draggable=true;
    block.addEventListener("dragstart" ,onDragStart);
    block.setAttribute('class','-block--three');
   
   // block.setAttribute('class','block')
   root.appendChild(block);
   
   }
export const fillBlock =(x:number,y:number)=>{
    console.log(x,y);
  if(x-1<0 || y+1>9)return;
  console.log(boardState[x][y] , boardState[x][y+1] , boardState[x-1][y+1])
  if(boardState[x][y] || boardState[x][y+1] || boardState[x-1][y+1]) return;

  boardState[x][y]= boardState[x][y+1]=boardState[x-1][y+1]=1;
  document.getElementById(`${x}+${y}`).classList.add('tile-filled');
  document.getElementById(`${x}+${y+1}`).classList.add('tile-filled');
  document.getElementById(`${x-1}+${y+1}`).classList.add('tile-filled');
  document.getElementById(`${x}+${y}`).classList.remove('tile-over');
  document.getElementById(`${x}+${y+1}`).classList.remove('tile-over');
  document.getElementById(`${x-1}+${y+1}`).classList.remove('tile-over');
}

export const overBlock=(x:number,y:number)=>{
    if(x-1<0 || y+1>9)return;
    if(boardState[x][y] || boardState[x][y+1] || boardState[x-1][y+1]) return;
  
   

    document.getElementById(`${x}+${y}`).classList.add('tile-over');
    document.getElementById(`${x}+${y+1}`).classList.add('tile-over');
    document.getElementById(`${x-1}+${y+1}`).classList.add('tile-over');
}
  