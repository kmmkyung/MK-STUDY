const basketStarterEl = document.querySelector('.basket-starter')
const basketEl = basketStarterEl.querySelector('.basket')

function showBasket(){
  basketEl.classList.add('show')
}

function hideBasket(){
  basketEl.classList.remove('show')
}

basketStarterEl.addEventListener('click', function(event){
  // 이벤트 버블링 막기
  event.stopPropagation()
  // contains = 있으면 true / 없으면 false
  if(basketEl.classList.contains('show')){
    hideBasket()
  }
  else{
    showBasket()
  }
})

basketEl.addEventListener('click', function(event){
  event.stopPropagation()
})

window.addEventListener('click',function(){
  hideBasket()
})
