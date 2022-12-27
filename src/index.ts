import  './styles/style.css';
const root=document.getElementById('root')  as HTMLElement;

let diffX=0,diffY=0;
const board=document.createElement('div');
function Board (){
  const onDrop=(e)=>{
    e.stopPropagation();

    const mainX=e.x-diffX;
    const mainY=e.y+diffY;
    
    console.log(mainX,e.x,mainY,e.y);
    e.target.classList.remove('tile-over')
    e.target.classList.toggle('tile-filled')
 }
 const onDragOver=(e)=>{
 e.preventDefault();
 
 e.target.classList.add('tile-over')
}
const onDragLeave=(e)=>{
  e.preventDefault();
  e.target.classList.remove('tile-over')
 }

 // 10*10 크기의 보드생성
 [1,1,1,1,1,1,1,1,1,1].forEach((_,row)=>{
   const rowContainer=document.createElement('div');
   rowContainer.setAttribute('class','row-container');
   [1,1,1,1,1,1,1,1,1,1].forEach((_,col)=>{
   
     const tile=document.createElement('div');
   
     tile.setAttribute('class','tile');
     tile.dataset.x=col+'';
     tile.dataset.y=row+'';
     tile.addEventListener("dragover",onDragOver);
     tile.addEventListener( "dragleave",onDragLeave);
     tile.addEventListener("drop",onDrop);

     rowContainer.appendChild(tile);
 
   });
   board.appendChild(rowContainer);
   
 });

 root.appendChild(board);
}
function BlockTile (block:HTMLDivElement,x:number,y:number){
 
  const tile=document.createElement('div');
 
  


   tile.setAttribute('class','tile');  
   if(x===0 && y===0){
    tile.setAttribute('id',`tile1-1`);
    
   }
   
   block.appendChild(tile);

}
function Block (){
 
 const block=document.createElement('div');

 
 const onDragStart=(e)=>{
  
  
  // main block 좌표와 마우스 좌표 차이 계산
  diffX=Math.abs(e.offsetX-20);
  diffY=Math.abs(e.offsetY-60);
  
  
  console.log("drag start");
}
const onDragEnd=(e)=>{
  console.log(e,"block");
  console.log(e.target.children[0].style.x)
}
 BlockTile(block,-1,0); 
 BlockTile(block,0,0);
 BlockTile(block,1,0);
 block.draggable=true;
 block.addEventListener("dragstart" ,onDragStart);
 block.addEventListener("dragend",onDragEnd);
// block.setAttribute('class','block')
root.appendChild(block);

}


function render(){
 
  Board();
  Block();

  
}




render();





  