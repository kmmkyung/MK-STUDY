gsap.registerPlugin(ScrollTrigger);
const target = document.querySelector('.box');

// gsap.to(target, {
//   duration: 2,
//   rotation: 360,
//   y:1000,
//   borderRadius: 100,
//   scrollTrigger: {
//     trigger: target,  //시작점 설정
//     markers:"true",
//     end: "+=400" // 요소의 상단이 스크롤의 300px 더 간 후 종료

//   }
// });


const tl = gsap.timeline({
  repeat: 1, // 반복횟수 총 2번
  repeatDelay: 3, // 반복할때마다의 딜레이 3초
  yoyo: true, // 재시작할때는 끝부터 시작
  defaults: {duration: 2},
  paused: true})  // timeline이 공통으로 가지는 속성
  // 전체 박스들을!
  tl.to(".box", {x: 50});
  tl.to(".box", {backgroundColor:'white'})
  tl.to(".box", {y: 50},'-=1'); // 앞 타임라인 END 1초전 진행(앞의 애니메이션과 겹침)
  tl.to(".box", {backgroundColor:'tomato'},4) // 타임라인이 시작하고 4초 후 시작
  tl.to(".box", {opacity: 0, stagger: 0.3}); // 요소들이 0.3초씩 딜레이해서 변경
  tl.to(".box", {opacity: 1 ,stagger: 0.3});
  tl.to(".box", {x: -50});
  tl.to(".box", {rotation:360},"<"); // 앞의 START에 바로 진행
  tl.to(".box", {y: -100});
  tl.to(".box", {scale:.5},"+=4"); // 앞 타임라인 END 후 4초 후 진행
  tl.to(".box", {y: 100});

  const play = document.querySelector('.play');
  const pause = document.querySelector('.pause');
  const resume = document.querySelector('.resume');
  const reverse = document.querySelector('.reverse');
  const restart = document.querySelector('.restart');

  play.onclick = function() {
    tl.play();
  }
  
  pause.onclick = function() {
    tl.pause();
  }
  
  resume.onclick = function() {
    tl.resume();
  }
  
  reverse.onclick = function() {
    tl.reverse();
  }
  
  restart.onclick = function() {
    tl.restart();
  }