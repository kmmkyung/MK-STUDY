// 1. 동기(Synchronous) 비동기(ASynchronous)
// 동기: 순차적으로 코드 실행 o
// 비동기: 순차적으로 코드 실행 x

// 동기방식
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

// 1최후에 1, 2가 출력되려면 O
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

// Promise
// Promise 생성자 함수를 통해 인스턴스화한다. 이렇게 구현된 생성자 함수는 Promise객체를 반환한다.
// Promise 함수는 대기(이행하기 전), 이행(연산이 성공적으로 완료), 거부(연산이 실패) 상태를 가진다. 
// Promise 생성자 함수는 콜백 함수를 인자로 전달받늩다 -> new Promise(function(resolve, reject){})
// - resolve()=이행, reject()=실패(오류) 를 호출하지 않으면 Promise는 대기상태에 머물러 있으며 이후의 .then()/await 구문이 실행되지 않는다.
// 비동기 작업이 성공할 경우 resolve함수를 호출하고 실패할 경우 reject함수를 호출한다.
const promise = new Promise(function(resolve,reject){
  // 비동기 작업 실행
  if(true){ // 비동기 작업이 성공할 경우 
    resolve(console.log('성공'))
  }
  else{ // 비동기 작업이 실패할 경우
    reject(console.log('실패'))
  }
})

function promise(){
  return new Promise((resolve,reject)=>{
    resolve()
  })
}

// 반환된 promise함수는 후속 처리하는 메서드를 통해 결과 또는 에러메시지를 전달받아 처리할 수 있다.
// promise 후 성공 실패할 경우 resolve는 성공했을때 실행되며, reject는 실패(에러)했을때 실행된다.
// then(onFulfilled, onRejected) <- onFulfilled는 성공했을때 실행되며, onRejected 실패(에러)했을때 실행된다.
// catch() <- 에러가 발생한 경우
// finally() <- 결과 여부에 상관없이 마무리
let a = new Promise(function(resolve, reject){
  setTimeout(()=>{
    console.log(1);
    resolve() // 호출해 이행상태로 변경
  },1000)
})
let b = new Promise(function(resolve, reject){
  setTimeout(()=>{
    console.log(2);
    resolve()
  },1000)
})

let c = function(){console.log(3)}

a.then(b).then(c).then(console.log('start')) // start > 1 > 2 > 3

// Async / Await
// async 키워드는 함수 앞에 쓸 수 있으며 해당 함수는 promise를 반환한다.
// await 키워드는 promise가 처리될 때까지 기다리고 실행된다. <- async 키워드가 있어야 사용가능
async function a(){
  await new Promise(function(resolve){
    setTimeout(()=>{
      console.log(1);
      resolve()
    },1000)})
  b()
}

function b(){
  console.log(2)
}

a() // 1 > 2

// resolve, reject, 에러핸들링
// 기본 예시
function delayAddFn(index, resolve, reject){
  setTimeout(function(){
    if(index>10){
      reject(`${index}는 10보다 클 수 없습니다.`)
      return
    }
    console.log(index);
    resolve(index+1)
  },1000)
}
delayAddFn(4, resolve(function(res){console.log(res)}), reject=>console.log(reject)) // 4, 5
delayAddFn(11, resolve(function(res){console.log(res)}), reject=>console.log(reject)) // 11은 10보다 클 수 없습니다.

// Promise
function delayAddPromise(index){
  return new Promise(function(resolve, reject){ // then()을 사용하기 위해 return
    setTimeout(function(){
      if(index>10){
        reject(`${index}는 10보다 클 수 없습니다.`)
        return
      }
      console.log(index);
      resolve(index+1)
    },1000)
  })
}
delayAddPromise(11).then(function(onfulfilled){console.log(onfulfilled)}).catch(err=>console.log(err)).finally(()=>console.log('Done'))
// 11은 10보다 클 수 없습니다. <- if()로 넘어가 reject()가 실행되기 때문에 then()부분은 실행되지 않고 catch()는 reject부분의 매개변수로 실행
// 즉 index가 10 이하일때는 then()구문이, 11이상일때는 catch()구문이 실행된다.

// async await
const wrap = async ()=>{
  const res = await delayAddPromise(2)
  console.log(res)
}
// 또는
const wrap2 = async ()=>{
  try{
    const res = await delayAddPromise(2)
    console.log(res)
  }
  catch(err){
    console.log(err)
  }
  finally{
    console.log('Done')
  }
}

// fetch(주소, {옵션})
// 네트워크를 통해 리소스의 요청(request) 및 응답(response)을 처리할 수 있다.
// Promise 인스턴스를 반환하기 때문에 then / catch / constructor / finally 메소드 사용할 수 있다.
// response(응답) 결과는 json 메소드에 저장된다. <- json 메소드는 Promise 인스턴스를 반환하기 때문에 then() 사용가능
// 옵션에는 method(GET,POST,PUT,DELETE) / headers / body 가 있다.
fetch('주소',{
  method: 'GET', // 어떤 값을 얻어낼때 사용하는 메소드(일반적으로는 작성하지 않아도 적용)
  headers: {'Content-Type':'application/json'}, //서버로 전송하는 요청에 대한 정보(json포멧으로 요청)
  body: JSON.stringify({name:kim , age:30}) // 요청에 대한 데이터 담아 전송(항상 json 문자화 시켜야한다)
});

fetch('http://www.주소.com').then(res => console.log(res)) // 요청한 res의 response 객체 출력
fetch('http://www.주소.com').then(res => {return res.json()}) // Promise 인스턴스 반환 / then()이어쓰기 위해 return 
fetch('http://www.주소.com').then(res => {return res.json()}).then(json => console.log(json)) // 요청한 json값 출력
// async await 
async function fetchFn(){
  try{
    let response = await fetch('http://www.주소.com')
    let json = await response.json()
    console.log(json);
  }
  catch(error){
    console.error('error')
  }
}
fetchFn()
