// 안정화를 위해 불러주기!
gsap.registerPlugin(ScrollTrigger);


let sections = gsap.utils.toArray(".panel");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      start : "top top",
      end: "+=100%",
      pin: true,
      scrub: 1
    }
  });


// // purple section
ScrollTrigger.create({
  trigger: ".box",
  containerAnimation: scrollTween,
  toggleClass: "active",
  start: "center 60%",
  id: "3"
});
