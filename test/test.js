
function upresize(){
  let winH = window.innerWidth;
  const body = document.querySelector(".color")
  // console.log("가로",winH);
  if( winH < 400){
    body.classList.add("blue")
    body.classList.remove("purple")
    body.classList.remove("gold")
  }
  else if(400 <= winH && winH <800){
    body.classList.add("purple")
    body.classList.remove("blue")
  }
  else{
    body.classList.remove("blue")
    body.classList.remove("purple")
    body.classList.add("gold")
  }
}
    
window.addEventListener("resize",upresize)