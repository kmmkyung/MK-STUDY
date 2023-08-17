// document.getElementById('input').onkeyup = _.debounce(function() {
//   document.getElementById('debounced').innerText = 'Debounced message!';
// }, 500);

const input = document.querySelector('input');
const eventSpan = document.querySelector('.event');
const debounceSpan = document.querySelector('.debounce');

let num = 0;
let debouncednum = 0;

const keyeventFn = function(){
  eventSpan.innerText = num++
}

const debounceFn = _.debounce(function(){
  debounceSpan.innerText=debouncednum++
},300)

input.addEventListener('keyup',function(){
  keyeventFn()
  debounceFn()
})