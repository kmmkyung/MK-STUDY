const arrow = document.querySelector('.arrow');
const container = gsap.utils.toArray('.container')

gsap.to(arrow,{ y:10, repeat:-1, yoyo:true });

gsap.to(container,{
  xPercent: -100 * (container.length-1),
  scrollTrigger:{
    // markers:true,
    trigger:'#main',
    pin: true,
    scrub: 1,
    // snap: 1 / (container.length-1),
    end:'+=' + document.querySelector('#main').offsetWidth,
  }
})

// container.forEach((v,i) => {
//   ScrollTrigger.create({
//     trigger:v,
//     start: 'bottom 20%'+ (v.offsetLeft - window.innerWidth/2) * (document.querySelector("#main").offsetWidth/(v.offsetWidth * (container.length - 1))),
//     // end: '+=' + v.offsetWidth * (document.querySelector("#main").offsetWidth/(v.offsetWidth * (container.length - 1))),
//     markers:true,
//     toggleClass:{
//       targets:v,
//       className: 'active'
//     }
//   })
// });