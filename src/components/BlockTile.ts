export default function BlockTile (block:HTMLDivElement,x:number,y:number){
 
    const tile=document.createElement('div');
   
    
  
  
     tile.setAttribute('class','tile');  
     if(x===0 && y===0){
      tile.setAttribute('id',`tile1-1`);
      
     }
     
     block.appendChild(tile);
  
  }