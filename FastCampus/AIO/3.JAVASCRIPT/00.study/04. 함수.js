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

// 5. 화살표 함수(Arrow function)
// function sum(){}
// const sum = function(){}
// const sum = ()=>{} <- 화살표 함수
// 5-1. 화살표 함수는 function 을 생략 가능하며 중괄호 내 코드가 한줄이면 return 키워드와 중괄호를 생략할 수 있다.
// 매개변수가 하나일 경우 소괄호 생략 가능하다.
// 5-2. 만약 객체데이터를 return 할 경우에는 중괄호 생략 불가하다.(중괄호는 코드 범위를 나타내기 때문) 생략하려면 소괄호로 감싸줘야함
// 배열데이터일 경우는 상관없음

// 5-1.
function sum(a,b){
  return a+b;
}
const sum = (a,b)=>{
  return a+b;
}
const sum = (a,b) => a+b
console.log(sum(1,2)); // 3

// 5-2.
const a = ()=>{return{aa:1}} // 가능
const b = ()=>{bb:1} // 불가능
const c = ()=>({cc:1}) // 가능

// 6. 즉시실행함수(IIFE) <- 함수의 이름이 없는 익명함수
((code))(); // (F)() 화살표함수일경우
(function(){code})() // (F)() 일반함수일경우
(function(){code} ()) // (F())
!function(){code} () // !F()
+function(){code} () // +F()

// 일반적으로는...
const a = 7;
const double=()=>{
  console.log(a*2);
}
double(); // 함수 실행
// 익명함수로는...
(()=>{console.log(a*2);})()

// 6. 콜백함수(Callback)
// 함수가 어떤 함수의 인수(함수데이터)로 들어갈때 인수로 들어가는 함수를 콜백이라 부른다
const a = callback =>{
  console.log('A')
  callback()
};
const b = ()=>{console.log('B')};
a(b) // a함수가 실행될때 b함수 실행

// 1초 있다 찍히는 함수를 만들어보자
const sum = (a,b)=>{
  setTimeout(()=>{
    return a+b
  },1000)
}
console.log(sum(1,2)); // undefined <- return 값은 setTimeout에서 끝나고 sum함수 밖으로 나가지 못했기 때문

const sum = (a,b,c)=>{
  setTimeout(()=>{
    c(a+b)
  },1000)
}
sum(1,2,(value)=>{console.log(value);}) // 3

// ex ---
// div.container
// - <h1>loading...</h1>
// loading... 텍스트가 보이고 이미지 띄우기
const containerEl = document.querySelector('.container')
const loadImg = (url,callback)=>{
  const imgEl = document.createElement('img')
  imgEl.src = url
  imgEl.addEventListener('load',()=>{ // imgEl의 로드가 끝나면 1초 후 callback함수 실행
    setTimeout(()=>{callback(imgEl)},1000)
  })
}
loadImg('http://www.aaa/aaa.jpg', imgElCode=>{ containerEl.innerHTML = ''; containerEl.append(imgElCode);})

// 7. 재귀함수
// 하나의 함수에서 그 함수 자기 자신을 다시 내부에서 호출할떄
// 무한으로 실행되기 때문에 조건을 걸어줘야 한다!
let i = 0;
const a = ()=>{
  console.log('A');
  i += 1
  if(i<4){a()} // i = 0,1,2,3
}
a() // A A A A

const userA  = {name:'A', parent:null}
const userB  = {name:'B', parent:userA}
const userC  = {name:'C', parent:userB}
const userD  = {name:'D', parent:userC}
const getRootUser = user =>{
  if(user.parent){
    return getRootUser(user.parent)
  }
  return user
}
console.log(getRootUser(userD)); // {name:'A', parent:null}

// 8. 호출 스케줄링
// 호출을 지연하거나 반복적으로 호출할 수 있도록 만들어보기
// body태그 안에 h1태그가 있다고 가정
const hello = ()=>{
  console.log('Hello');
}
const timeout = setInterval(hello,2000) // Hello 함수 2초 마다 실행
const h1El = document.querySelector('h1')
h1El.addEventListener('click',function(){ // h1을 클릭하면 timeout 해제
  console.log('Clear!');
  clearInterval(timeout)
})

// 9. this
// 일반함수의 this는 호출 위치에서 정의
// 화살표함수의 this는 자신이 선언된 함수(렉시컬-함수가 동작할 수 있는 유효한 범위) 범위에서 정의
const user = {
  firstName: 'kim',
  lastName: 'min',
  age:30,
  getFullName: function(){
    return `${this.firstName} ${this.lastName}` // = return `${user.firstName} ${user.lastName}`
  }
}
console.log(user.getFullName()); // kim min

const user2 = {
  firstName: 'kim',
  lastName: 'min',
  age:30,
  getFullName: ()=>{
    return `${this.firstName} ${this.lastName}` // = return `${user.firstName} ${user.lastName}`
  }
}
console.log(user2.getFullName()); // undefined undefined

