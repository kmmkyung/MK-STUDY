let hcode= "" // 코드저장변수
let text = `for of문으로 텍스트감싸기`

for(let x of text ){
  console.log(x); // text 글씨가 한글자씩 나온다!
  if(x === " "){ // 만약 x의 글자가 공백이라면 띄어쓰기 해줘
    x = "&nbsp;"
  }
  hcode += `<span>${x}</span>`; // x의 글자를 span 태그에 담아줘
}
document.querySelector(".stage").innerHTML = hcode;
