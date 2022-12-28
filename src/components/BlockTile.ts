export default function BlockTile (block:HTMLDivElement){
 
    const tile=document.createElement('div');  
     tile.setAttribute('class','tile');  
     block.appendChild(tile);
  
  }