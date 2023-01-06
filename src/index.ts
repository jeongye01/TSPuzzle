
import { Block } from './components/Blocks/Block';
import { BLOCK_SHAPES } from './constants/BlockShapes';


import  './styles/style.css';
import { fillBlock } from './utils/fillBlock';
import { generateRandomBlocks } from './utils/generateRandomBlocks';
import { overBlock } from './utils/overBlock';
export const root=document.getElementById('root')  as HTMLElement;

export const calcOriginTileBoardIndex=(mouseX:number,mouseY:number)=>{
  const originPosX=mouseX-distanceFromOrigin.x;
  const originPosY=mouseY-distanceFromOrigin.y;
  const x=Math.trunc(originPosX/tileSize.value); // 보드 상에서의 x좌표
  const y=Math.trunc(originPosY/tileSize.value); // 보드 상에셔의 y좌표
  return {x,y};
}

export const distanceFromOrigin={
  x:null,
  y:null,
  setter:function(x:number,y:number){
    this.x=x;
    this.y=y;
  }
}
export const tileSize={
  value:null,
 
  setter:function(value:number){
    this.value=value;
  }
};
export const point={
  value:0,
  element:null,
  setter:function(newPoint:number){
    this.value+=newPoint;
    this.element.innerText=this.value;
  }
}
export const block={
   element:null,
   shape:null,
   isPlaceable:true,
   setter:function(element:HTMLDivElement,shape:number[][]){
     this.element=element;
     this.shape=shape;
   },
   setIsPlaceable:function(isPlaceable:boolean){
    this.isPlaceable=isPlaceable;
  },

}
export const generatedBlocks={
  leftCount:null,
  setter:function(leftCount:number){
    this.leftCount=leftCount;
  },
  removeOne:function(){
    this.leftCount-=1;
  }
}


export const boardState = Array.from(Array(10), () => Array(10).fill(0));
const board=document.createElement('div');
function Board (){
  const onDrop=(e)=>{
    e.stopPropagation();
   // 보드 상에서의 x,y좌표
   const {x,y}=calcOriginTileBoardIndex(e.x-board.getBoundingClientRect().left,e.y-board.getBoundingClientRect().top);
   fillBlock(x,y);
 }
 const onDragOver=(e)=>{
 e.preventDefault();
 const allTileOver=document.querySelectorAll('.board__tile--over')
 allTileOver.forEach((tileOver)=>{
   tileOver.classList.remove('board__tile--over');
 });

 // 보드 상에서의 x,y좌표
 const {x,y}=calcOriginTileBoardIndex(e.x-board.getBoundingClientRect().left,e.y-board.getBoundingClientRect().top);

 overBlock(x,y);

 


}


 // 10*10 크기의 보드생성
 [1,1,1,1,1,1,1,1,1,1].forEach((_,row)=>{
   const rowContainer=document.createElement('div');
   rowContainer.setAttribute('class','board__row');
   [1,1,1,1,1,1,1,1,1,1].forEach((_,col)=>{
   
     const tile=document.createElement('div');
     tile.setAttribute('class','board__tile');
     if(boardState[col][row]){
      tile.classList.add('board__tile--filled')
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
  board.id='board';
 
    
   
 root.appendChild(board);
}




function render(){
  const pointText=document.createElement('span');
  pointText.innerText=point.value+'';
  pointText.style.fontSize="2.4rem";
  point.element=pointText;
  root.appendChild(pointText);
  const blockContainer=document.createElement('div');
  Board();
  const originTile=document.getElementById('0+0').clientWidth;
  tileSize.setter(originTile);

  blockContainer.style.display="flex";
  blockContainer.style.width="full";
  blockContainer.style.marginTop="50px";
  blockContainer.style.gap="20px";
  blockContainer.id="blockContainer";
  root.appendChild(blockContainer);

  generateRandomBlocks();

 


  
}




render();





  