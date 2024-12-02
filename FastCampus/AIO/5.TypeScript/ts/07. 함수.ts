// 함수 - 명시적 this

interface Cat {
  name: string
  age: number
}

const cat:Cat = {
  name: 'Lucy',
  age: 3
}

function hello(this:Cat, message:string){ // this의 타입 명시 / 매개변수 x
  console.log(`Hello ${this.name}, ${message}`)
}
hello.call(cat,'You are pretty awesome!') // Hello Lucy, You are pretty awesome!

//함수 - 오버로딩(OverLoading)
// 기본적인 구조가 같은데 매개변수의 타입이 다른 경우 함수를 따로 만들어 사용할 수 있지만 오버로딩 개념을 사용하면 관리하기 쉽다
// 1) 오버로딩을 사용하지 않는다면
function add1(a:string, b:string){
  return a+b
}
function add2(a:number, b:number){
  return a+b
}
add1('hello','world') // 'hello world'
add2(1,2) // 3
add1('hello',2) // 타입 오류
add2('hello',2) // 타입 오류

// 2) 오버로딩을 사용할 경우
// 같은 이름의 함수를 만들어 함수가 호출될 때 사용되는 타입만 분기
function addFn(a:string, b:string):string // 타입 선언
function addFn(a:number, b:number):number // 타입 선언
function addFn(a:any, b:any) { // 1,2번에 맞는 데이터가 들어올 수 있는 함수 구현
  return a+b
}

addFn('hello','world') // 'hello world'
addFn(1,2) // 3
addFn('hello',2) // 1,2번째 타입에 일치하지 않아 오류
addFn(2,'hello')
