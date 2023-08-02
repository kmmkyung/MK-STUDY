window.addEventListener('DOMContentLoaded',function(){
  const lineWidth = document.querySelector('#line-width')  
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 800;
  let isPainting = false;
  ctx.lineWidth = lineWidth.value;
  
  function onMove(event){
    if(isPainting){
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
      return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
  }
  function startPainting(){
    isPainting = true;
  }
  function cancelPainting(){
    isPainting = false;
  }
  canvas.addEventListener('mousemove',onMove);
  canvas.addEventListener('mousedown',startPainting);
  canvas.addEventListener('mouseup',cancelPainting);
  canvas.addEventListener('mouseleave',cancelPainting);

  function onLineWidthChange(event){
    ctx.lineWidth=event.target.value;
    
  }
  lineWidth.addEventListener('change',onLineWidthChange);
})