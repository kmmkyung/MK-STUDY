// String
var string1 = "Hello"
var string2 = 'Hello'
var string3 = `Hello ${string1} ?!` // ``(템플릿 리터럴)은 중간에 데이터를 채워넣을 수 있다.

// Number
var number = 123
var pi = .14
console.log(number + 1); // 124
console.log(pi);// 0.14
console.log(typeof(pi));// number
console.log(number + undefined); // NaN <- Not a Number = 숫자가 아니다.
console.log(typeof(number + undefined)); // number <- NaN는 타입자체는 숫자인데 연산이 숫자로 표현해낼 수 없을 때이다!

var a = 0.1
var b = 0.2
console.log(a + b); // 0.3000004 <- 부동수소점 오류 <- 컴퓨터는 0과 1의 이진수를 사용해 동작하기 때문에
console.log((a + b).toFixed(1)); // toFixed() : 소수점 ()자리까지만 남기고 문자데이터로 변환
console.log(typeof (a + b).toFixed(1)); // string 0.3
console.log(Number((a + b).toFixed(1))); // number 0.3


// Boolean
var a = true
var b = false
if(a){
  console.log('true'); // console에 출력
}

// Null / Undefined
var age = null // 값이 비어있는 상태(=나중에 바뀔수도 있다.)
console.log(age); // null
setTimeout(function(){
  age = 85
  console.log(age); // 1초 뒤 85
},1000)

var age
console.log(age); // undefined : 값이 없는 상태

var user = {
  name : 'mk',
  age : 85
}
console.log(user.name); // mk
console.log(user.age); // 85
console.log(user.email); // undefined

// Array
var fruits = ['Apple','Banana','Cherry']
console.log(fruits.length); // 3
console.log(fruits[fruits.length-1]); // Cherry

//Object
var userA = { name:'abc', age:28 }
var userB = { name:'def', age:28, parent:userA }
var users = [userA,userB]
console.log(userB.parent.name); // abc
console.log(userB['parent']['name']); // abc
console.log(users[0]['name']); //abc

// 형 변환
var a = 1 // Number
var b = '1' // String
console.log(a == b); // true
// === 일치
// == 동등
// = 할당

// 참 거짓
// 참: 양수, 문자
// 거짓: false, 0(음수), nill, undefined, NaM, '', 0n
