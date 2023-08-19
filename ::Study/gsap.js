import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const target = document.querySelector('.box');

gsap.to(target, {
  duration: 2,
  x: 500,
  borderRadius: 100,
  rotation: 360, 
});

// gsap.to("target",{
//   scrollTrigger:{
//     trigger:"target",
//     // markers:"true",
//     // start:"top 90%",
//     // end:"bottom top"
//     x:200
//   },
// })