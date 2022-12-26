import  './styles/style.css';
const root=document.getElementById('root')  as HTMLElement;

function Board (){
  const onDrop=(e)=>{
    console.log(e.target.dataset);
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
   root.appendChild(rowContainer);
 });
}
function BlockTile (block:HTMLDivElement){
 
  const tile=document.createElement('div');
 
  


   tile.setAttribute('class','tile');  
  // tile.draggable=true
  //  tile.addEventListener('drag',onDrag);
  
   block.appendChild(tile);

}
function Block (){
  const onDrag=(e)=>{
    e.preventDefault();
    console.log("block  drag",e.offsetY);
  }
 const block=document.createElement('div');
 
 BlockTile(block); 
 BlockTile(block);
 BlockTile(block);
 block.draggable=true;
 block.addEventListener("dragend",onDrag);

root.appendChild(block);

}


function render(){
 
  Board();
  Block();

  
}




render();





  