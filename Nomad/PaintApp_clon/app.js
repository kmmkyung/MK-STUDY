window.addEventListener('DOMContentLoaded',function(){
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const CANVAS_W = 800;
  const CANVAS_H = 800;
  canvas.width = 800;
  canvas.height = 800;

  //------------------------------------ 그리기
  let isPainting = false;
  ctx.lineCap='round'
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

  //------------------------------------ 선 두께 설정
  const lineWidth = document.querySelector('#line-width');
  ctx.lineWidth = lineWidth.value;
  lineWidth.addEventListener('change',onLineWidthChange);
  function onLineWidthChange(event){
    ctx.lineWidth = event.target.value;
  }
    
  //------------------------------------ 컬러 설정
  const color = document.querySelector('#color');
  const colorOptions = Array.from(document.querySelectorAll('.color-option'));
  function onColorChange(event){
    // console.log(event.target.value);
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
  }
  color.addEventListener('change',onColorChange)
  colorOptions.forEach(function(v){
    console.log(v);
    v.addEventListener('click',onColorClick)
  })
  function onColorClick(event){
    const colorValue = event.target.dataset.color;
    // console.log(colorValue);
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
  }

  //------------------------------------ fill
  const modeBtn = document.querySelector('#mode-btn');
  let isFilling = false;
  // fill 버튼 체인지
  modeBtn.addEventListener('click',onModeClick)
  function onModeClick(){
    if(isFilling){
      isFilling = false
      modeBtn.innerText = 'Fill'
      ctx.stroke();
    }
    else{
      isFilling = true
      modeBtn.innerText = 'Draw'
      ctx.fill();
    }
  }
  // 채우기
  canvas.addEventListener('click',onCanvasClick)
  function onCanvasClick(){
    if(isFilling){
      ctx.fillRect(0,0,CANVAS_W,CANVAS_H);
    }
  }

  //------------------------------------ Reset
  const resetBtn = document.querySelector('#Reset-btn')
  resetBtn.addEventListener('click',onResetClick)
  function onResetClick(){
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,CANVAS_W,CANVAS_H);
  }

  //------------------------------------ Eraser
  const eraserBtn  = document.querySelector('#Eraser-btn')
  eraserBtn.addEventListener('click',onEraserClick);
  function onEraserClick(){
    ctx.strokeStyle = 'white';
    isFilling = false;
    modeBtn.innerText = 'Fill';
  }

    //------------------------------------ File
    const fileInput = document.querySelector('#file')
    fileInput.addEventListener('change',onFileChange);
    function onFileChange(event){
      console.log(event.target);
      
      const file = event.target.files[0]
      const url = URL.createObjectURL(file);
      const img = new Image()
      img.src = url;
      img.onload = function(){
        ctx.drawImage(img,0,0,CANVAS_W,CANVAS_H)
        fileInput.value = null;
      }
    }

    //------------------------------------ Text
    const textInput = document.querySelector('#text');
    canvas.addEventListener('dblclick',onDoubleClick)
    function onDoubleClick(event){
      const text = textInput.value;
      if(text !== ""){
        ctx.save();
        ctx.lineWidth = 1;
        ctx.font = '48px serif'
        ctx.fillText(text,event.offsetX,event.offsetY);
        ctx.restore()
      }
    }

    //------------------------------------ Save
    const saveBtn =  document.querySelector('#save')
    saveBtn.addEventListener('click',onSaveClick)
    function onSaveClick(){
      const url = canvas.toDataURL();
      const a = document.createElement('a');
      a.href = url
      a.download = 'myDrawing.png'
      a.click();
    }
    

  })