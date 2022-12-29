import Block1 from './components/Blocks/Block1';
import { Block10 } from './components/Blocks/Block10';
import { Block11 } from './components/Blocks/Block11';
import {Block12} from './components/Blocks/Block12';
import { Block2 } from './components/Blocks/Block2';
import { Block3 } from './components/Blocks/Block3';
import { Block4 } from './components/Blocks/Block4';
import { Block5 } from './components/Blocks/Block5';
import { Block6 } from './components/Blocks/Block6';
import Block7 from './components/Blocks/Block7';
import { Block8 } from './components/Blocks/Block8';
import { Block9 } from './components/Blocks/Block9';

import  './styles/style.css';
export const root=document.getElementById('root')  as HTMLElement;

export const diff={
  x:0,
  y:0,
  setter:function(diffX:number,diffY:number){
    console.log(diffX,diffY,"qwer");
    this.x=diffX;
    this.y=diffY;
  }
}
export const blockInfo={
   block:null,
   fillFunc:null,
   overFunc:null,
   setter:function(block:HTMLDivElement,fillFunc:(x:number,y:number)=>void,overFunc:(x:number,y:number)=>void){
     this.block=block;
     this.fillFunc=fillFunc;
     this.overFunc=overFunc;
   }
}
export const boardState = Array.from(Array(10), () => Array(10).fill(0));
const board=document.createElement('div');
function Board (){
  const onDrop=(e)=>{
    e.stopPropagation();
   // main block 좌표
    const mainX= e.x-diff.x;
    const mainY=e.y-diff.y;
    const x=Math.trunc(mainX/40);
    const y=Math.trunc(mainY/40);
    console.log(x,y);
   blockInfo.fillFunc(x,y);
 }
 const onDragOver=(e)=>{
 e.preventDefault();
 const allTileOver=document.querySelectorAll('.tile-over')
 allTileOver.forEach((tileOver)=>{
   tileOver.classList.remove('tile-over');
 });
 const mainX=e.x-diff.x;
 const mainY=e.y-diff.y;
 const x=Math.trunc(mainX/40);
 const y=Math.trunc(mainY/40);
 
// main block 좌표가 속해있는 board 좌표

blockInfo.overFunc(x,y);

 


}


 // 10*10 크기의 보드생성
 [1,1,1,1,1,1,1,1,1,1].forEach((_,row)=>{
   const rowContainer=document.createElement('div');
   rowContainer.setAttribute('class','row-container');
   [1,1,1,1,1,1,1,1,1,1].forEach((_,col)=>{
   
     const tile=document.createElement('div');
     tile.setAttribute('class','tile');
     if(boardState[col][row]){
      tile.classList.add('tile-filled')
     }
     tile.id=`${col}+${row}`;
     tile.dataset.x=col+'';
     tile.dataset.y=row+'';
     tile.addEventListener("dragover",onDragOver);
     tile.addEventListener("drop",onDrop);

     rowContainer.appendChild(tile);
 
   });
   board.appendChild(rowContainer);
   
 });

 root.appendChild(board);
}




function render(){
 
  Board();
  const blockContainer=document.createElement('div');
  
 /* Block1(diff.setter,blockInfo.setter);
  Block2(diff.setter,blockInfo.setter);
 Block3(diff.setter,blockInfo.setter);
  Block4(diff.setter,blockInfo.setter);
   Block5(diff.setter,blockInfo.setter);
 Block6(diff.setter,blockInfo.setter);
 Block7(diff.setter,blockInfo.setter);
 Block8(diff.setter,blockInfo.setter);
  Block9(diff.setter,blockInfo.setter);
  Block10(diff.setter,blockInfo.setter); 
   Block11(diff.setter,blockInfo.setter); */
   Block12(diff.setter,blockInfo.setter);
  const blocks=document.querySelectorAll('.block');

  blocks.forEach((b)=> blockContainer.appendChild(b));

  blockContainer.style.display="flex";
  blockContainer.style.width="full";
  blockContainer.style.marginTop="50px";
  blockContainer.style.gap="20px";
  root.appendChild(blockContainer);
  
}




render();





  