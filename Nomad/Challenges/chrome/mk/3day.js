const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.querySelector('h2')

const superEventHandler = {
  'titleEnter': function(){
    title.addEventListener('mouseenter',()=>{
      title.style.color=colors[0]
      title.innerText = "The mouse is here!";
    })
  },
  'titleLeave': function(){
    title.addEventListener('mouseleave',()=>{
      title.style.color=colors[1]
      title.innerText = "The mouse is gone!";
    })
  },
  'titleClick': function(){
    title.addEventListener('contextmenu',function(){
      title.style.color=colors[4]
      title.innerText = "That was mouse rigth click!";
    })
  },
  'windowresize': function(){
    window.addEventListener('resize',function(){
      title.style.color=colors[2]
      title.innerText = "you just resized!";
    })
  }
};

superEventHandler.titleEnter()
superEventHandler.titleLeave()
superEventHandler.titleClick()
superEventHandler.windowresize()
