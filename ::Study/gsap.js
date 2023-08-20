gsap.registerPlugin(ScrollTrigger);
const target = document.querySelector('.box');

gsap.to(target, {
  duration: 2,
  rotation: 360,
  y:1000,
  borderRadius: 100,
  scrollTrigger: {
    trigger: target,  //시작점 설정
    markers:"true",
    end: "+=400" // 요소의 상단이 스크롤의 300px 더 간 후 종료

  }
});