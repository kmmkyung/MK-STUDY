// document.getElementById('input').onkeyup = _.debounce(function() {
//   document.getElementById('debounced').innerText = 'Debounced message!';
// }, 500);

const input = document.querySelector('input');
const keyevent = document.querySelector('.event');
const debounce = document.querySelector('.debounce');
let num = 0;
let debouncednum = 0;

function keyevent(){
  keyevent.innerText = num++
}

// function debounce = ._debounce(function(){
//   debounce.innerText=debouncednum++
// })

input.addEventListener('keyup',function(){
  keyevent()
  // debounce()
})