const body = document.querySelector('body')

window.addEventListener('resize',function(){
  let winWidth = window.innerWidth;
  
  if(600 > winWidth){
    body.classList.remove('yellow')
    body.classList.remove('purple')
    body.classList.add('blue')
  }
  else if(1000 > winWidth || winWidth <= 600){
    body.classList.remove('blue')
    body.classList.remove('yellow')
    body.classList.add('purple')
  }
  else if(1000 <= winWidth){
    body.classList.remove('blue')
    body.classList.remove('purple')
    body.classList.add('yellow')
  }
})
