const firstNum = document.querySelector('#firstNum');
const twoNum = document.querySelector('#twoNum');
const playBtn = document.querySelector('.guess button');
const p = document.querySelector('p');
const h3 = document.querySelector('h3');

playBtn.addEventListener('click',function(e){
  e.preventDefault();

  if(firstNum.value ===''|| twoNum.value===''){
    return alert('숫자를 입력하세요')
  }
  else if(Number(firstNum.value) < 0 || Number(twoNum.value) < 0){
    return alert('0 이상의 숫자를 입력하세요')
  }
  const randomNum = Math.ceil(Math.random()*firstNum.value);
  p.innerText= `You chose: ${twoNum.value}, the machine chose:${randomNum}`
  if(parseInt(twoNum.value,10) === randomNum){
    h3.innerText=`You Win`
  }
  else{
    h3.innerText=`You lost!`
  }
})
