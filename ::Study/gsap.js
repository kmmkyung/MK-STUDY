gsap.registerPlugin(ScrollTrigger);
const target = document.querySelector('.box');


gsap.to(target,{
  scrollTrigger:{
    trigger:target,
    markers:"true",
    x:200
  },
})

// gsap.to(target, {
//   duration: 2,
//   // x: 100,
//   // y:100,
//   rotation: 360,
//   borderRadius: 100,
//   scrollTrigger: {
//     trigger: target,  //시작점 설정
//     markers:"true",
//   }
// });