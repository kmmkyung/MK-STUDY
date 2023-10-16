// 1. 함수(function)
// 함수 선언문(Declaration)
function A (){}
// 함수 표현식(Expression)
const A = function(){}

// 둘 다 함수 표현식이다. 차이는 호이스팅!

// 2. 호이스팅(Hoisting)
// 함수가 선언된 코드를 유효한 범위 안에서 제일 위로 끌어올려 동작한다.
// 함수 표현식에서는 실행되지 않는다!
hello1()
function hello1(){ // 호이스팅을 해서 hello()실행 가능
  console.log('hello');// hello
}

// 3. 반환 및 종료
// return : 데이터를 결과로 남기고 함수를 종료시킨다.
function hello2(){
  return 'hello~';
  console.log('world'); // 위에서 종료되서 실행되지 않는다.
}
console.log(hello2()); // hello~

function hello3(){
  return // 반환할 값을 남기지 않으면 암시적으로 undefined 
}
console.log(hello2()); // undefined

function plus(num){
  if(typeof num !== 'number'){
    return '숫자가 아님'
  }
  return num + 1
}
console.log(plus(2)); // 3
console.log(plus()); // 숫자가 아님


// 4. 매개변수 패턴(Parameter pattern)
// = : 기본값(Default value) <- 파라미터값이 없으면 기본값으로 출력됨
function sum(a, b=1){
  return a+b
}
console.log(sum(1,2)); // 3
console.log(sum(7)); // 8


