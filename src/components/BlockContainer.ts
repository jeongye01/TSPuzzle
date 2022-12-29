export default function BlockContainer (blockRowContainer:HTMLDivElement){
  
    const tile=document.createElement('div');  
    tile.setAttribute('class','tile');  
    const tile2=document.createElement('div');  
    tile2.setAttribute('class','tile');  
    blockRowContainer.appendChild(tile);
    blockRowContainer.appendChild(tile2);
    blockRowContainer.style.display="flex";
  
  }