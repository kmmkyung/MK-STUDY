window.addEventListener('DOMContentLoaded',function(){
  const badgeEl = document.querySelector('.badges')
  window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
      // gsap.to(요소,지속시간,옵션(객체))
      gsap.to(badgeEl, 0.6,{
        opacity:0,
        display:'none'
      })
    }
    else{
      gsap.to(badgeEl, 0.6,{
        opacity:1,
        display:'block'
      })
    }
  },300))
  
  const fadeEls = document.querySelectorAll('.fade-in')
  fadeEls.forEach(function(v,i){
    gsap.to(v,1,{
      opacity:1,
      delay:(i+1)*.7
    })
  })

  new Swiper('.notice-line .swiper',{
    direction:'vertical',
    autoplay: true,
    loop: true
  });

  new Swiper('.promotion .swiper',{
    // direction:'horizontal', // 기본값
    slidesPerView :3, // 한번에 보여줄 슬라이드 개수
    spaceBetween:10, // 슬라이드 사이 여백
    centeredSlides:true, // 1번 슬라이드가 가운데 보이게
    autoplay: {
      delay: 3000
    },
    loop: true,
    pagination:{
      el:'.swiper-pagination', // 페이지 번호 선택자
      clickable: true, // 사용자의 페이지 번호 요소 제어
    },
    navigation:{
      prevEl:'.swiper-prev',
      nextEl:'.swiper-next'
    }
  });

  const promotionEl = document.querySelector('.promotion');
  const promotionToggleBtn = document.querySelector('.toggle-promotion');
  let isHidePromotoin = false;

  promotionToggleBtn.addEventListener('click',function(){
    isHidePromotoin = !isHidePromotoin
    if(isHidePromotoin){
      promotionEl.classList.add('hide')
    }
    else{
      promotionEl.classList.remove('hide')
    }
  })

  // 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
  function floatingObj(selector, delay, size){
    gsap.to(selector, random(1.5,2.5), {
      y: size,
      repeat:-1,
      yoyo:true,
      ease: Power1.easeInOut,
      delay: random(0,delay)
    });
  }
  floatingObj('.floating1',1,15)
  floatingObj('.floating2',.5,15)
  floatingObj('.floating3',1.5,20)
})