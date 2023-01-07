import { boardState } from "..";

 // 들어갈 공간이 한 군데라도 있으면 true 
 export const isPlaceable=(blockElement:HTMLElement,blockShape:number[][])=>{
 
    let result=false;
    const boardSize=boardState.length;
    for(let x=0;x<=boardSize-blockShape[0].length;x++){
     
      for(let y=0;y<=boardSize-blockShape.length;y++){
        let tmp=true;
         for(let bx=0;bx<blockShape[0].length;bx++){
          for(let by=0;by<blockShape.length;by++){
             // 겹치는 공간이 있음. -> 배치할 수 없음. 
             console.log("?");
           if(boardState[y+by][x+bx] && blockShape[by][bx] ){
            console.log(boardState,"보드상태")
            console.log(boardState[y+by][x+bx] , blockShape[by][bx],y+by,x+by,x,y,"못채움");
            tmp=false;
           }
          }
         }
        if(tmp){
          // 배치할 공간을 찾음 
          result=true;
          console.log(x,y,"break");
          break;
        }
      }
      console.log(x,boardState,"bug");
      if(result){
        console.log(x,"break");
        break;
      }
    }
  const tiles=blockElement.getElementsByClassName('board__tile');
  // console.log(tiles);
  
     Array.prototype.forEach.call(tiles,(tile) => {
       tile.style.backgroundColor=`${result? 'green' : 'gray'}`;
   })
    // console.log(blockElement.classList);
    // blockElement.setIsPlaceable(result);
    return result;
    }