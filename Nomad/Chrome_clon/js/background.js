// 랜덤 배경화면 만들기

const images = [
  "background_1.jpg","background_2.jpg","background_3.jpg","background_4.jpg","background_5.jpg"
]

const rdbg = images[Math.floor(Math.random()*images.length)];
// console.log(rdbg);

const bgImg = document.createElement("img");
// console.log(bgImg)
bgImg.src = `img/${rdbg}`;
console.log(bgImg)

document.body.appendChild(bgImg)