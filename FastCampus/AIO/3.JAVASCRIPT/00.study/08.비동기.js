// 1. 동기(Synchronous) 비동기(ASynchronous)
// 동기: 순차적으로 코드 실행 o
// 비동기: 순차적으로 코드 실행 x

// 동기벙삭
console.log('1');
console.log('2');
console.log('3'); // 콘솔에는 1,2,3 순서대로 출력됨

// 비동기방식
console.log('1');
setTimeout(function(){console.log('2')},1000)
console.log('3'); // 콘솔에는 1,3,2 로 출력됨
// 1 > (1초쉬고) 2 > 3 이 아니다. 순서대로 출력되지 않고 사건아 걸리는 코드는 나중에 처리한다.

// 2. 콜백(Callback) 패턴
function a(){ console.log(1) }
function b(){ console.log(2) }
a()
b() // 콘솔에는 1 > 2 출력

// 1초후에 1, 2가 출력되려면 X
function a(){
  setTimeout(function(){console.log(1);
  },1000)
}
a()
b() // 콘솔에는 2 > 1 출력

// 1최후에 1, 2가 출려되려면 O
function a(callback){
  setTimeout(function(){
    console.log(1)
    callback()
  },1000)
}
function b(callback){
  setTimeout(function(){
    console.log(2)
    callback()
  },1000)
}
function c(){
  setTimeout(function(){
    console.log(3)
  },1000)
}

// 실행하려면...  콜백지옥
a(function(){
  b(function(){
    c()
  })
})

a(()=>{
  b(()=>{
    c()
  })
})