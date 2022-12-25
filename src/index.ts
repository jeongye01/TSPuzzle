import  './styles/style.css';




function render(){
  const root=document.getElementById('root')  as HTMLElement;
  
  const onDragEnd=(e:any)=>{
    console.log( e.target.style.backgroundColor);
    e.target.style.backgroundColor="#ED1A25";
  }
  // 10*10 크기의 보드생성
  [1,1,1,1,1,1,1,1,1,1].forEach(()=>{
    const rowContainer=document.createElement('div');
    rowContainer.setAttribute('class','row-container');
    [1,1,1,1,1,1,1,1,1,1].forEach(()=>{
  
      const tile=document.createElement('div');
      tile.setAttribute('class','tile');
      tile.addEventListener("",onDragEnd);
      rowContainer.appendChild(tile);
  
    });
    root.appendChild(rowContainer);
  });

  
}




render();





  