// 안정화를 위해 불러주기!
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");
let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none", // 이걸넣어야 가로스크롤 좌표가 안밀림!
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "+=500%",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    invalidateOnRefresh: true, //화면 리사이징
  },
});

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 5,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
  hide(elem);

  ScrollTrigger.create({
    trigger: elem,
    containerAnimation: scrollTween,
    onEnter: function () {
      animateFrom(elem);
    },
    onEnterBack: function () {
      animateFrom(elem, -1);
    },
    onLeave: function () {
      hide(elem);
    }, // assure that the element is hidden when scrolled into view
  });
});
