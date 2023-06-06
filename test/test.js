
// function upresize(){
//   let winH = window.innerWidth;
//   const body = document.querySelector(".color")
//   // console.log("가로",winH);
//   if( winH < 400){
//     body.classList.add("blue")
//     body.classList.remove("purple")
//     body.classList.remove("gold")
//   }
//   else if(400 <= winH && winH <800){
//     body.classList.add("purple")
//     body.classList.remove("blue")
//   }
//   else{
//     body.classList.remove("blue")
//     body.classList.remove("purple")
//     body.classList.add("gold")
//   }
// }
    
// window.addEventListener("resize",upresize)


document.querySelector(".select_1").addEventListener("input",function(){

  const val = document.querySelector(".select_1").value
  const se1 = document.querySelector(".select_1")
  const se2 = document.querySelector(".select_2")

  console.log('val',val);
  
  if(val == "셔츠"){
    se2.classList.remove("hidden");
  }

  else if(val == "바지"){
    se2.classList.remove("hidden");
    const push = `<option>100</option><option>105</option>`;
    se2.innerHTML=push
  }

  else{
    document.querySelector(".select_2").classList.add("hidden");
  }

})