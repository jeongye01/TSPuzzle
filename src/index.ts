
function component() {
    const root = document.getElementById('root') as HTMLElement;
    root.innerHTML='hello'
    return root;
  }
  
document.body.appendChild(component());