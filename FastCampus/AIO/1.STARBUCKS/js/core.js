window.addEventListener('DOMContentLoaded',function(){

  const searchInput = document.querySelector('.search input') 
  const searchIcon = document.querySelector('.search i')
  searchInput.addEventListener('focus',function(){
    searchIcon.classList.add('-opacity')
    searchInput.setAttribute('placeholder',' 검색어를 입력해 주세요');
  })
  searchInput.addEventListener('blur',function(){
    searchIcon.classList.remove('-opacity')
    searchInput.setAttribute('placeholder','');
  })
})