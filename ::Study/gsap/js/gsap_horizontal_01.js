const arrow = document.querySelector('.arrow');
const container = gsap.utils.toArray('.container')

gsap.to(arrow,{ y:10, repeat:-1, yoyo:true });

gsap.to(container,{
  xPercent: -100 * (container.length),
  scrollTrigger:{
    markers:true,
    trigger:'main',
    pin: true,
    scrub: 1,
    snap: 1 / (container.length-1),
    end:'+=' + document.querySelector('#container1').offsetWidth,
  }
})