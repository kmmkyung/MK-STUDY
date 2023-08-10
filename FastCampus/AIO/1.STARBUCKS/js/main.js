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
})