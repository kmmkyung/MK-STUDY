// 안정화를 위해 불러주기!
gsap.registerPlugin(ScrollTrigger);


let sections = gsap.utils.toArray(".panel");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // 이걸넣어야 가로스크롤 좌표가 안밀림!
    scrollTrigger: {
      trigger: ".container",
      start : "top top",
      end: "+=500%",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      invalidateOnRefresh: true, //화면 리사이징 
    }
  });

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
  hide(elem);
  
  ScrollTrigger.create({
    containerAnimation: scrollTween,
    toggleClass: "active",
    star: "center 60%",
    // onEnter: function() { animateFrom(elem) }, 
    // onEnterBack: function() { animateFrom(elem, -1) },
    onLeave: function() { hide(elem) }
  });
});
