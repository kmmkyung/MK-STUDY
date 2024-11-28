// 인터페이스(Interface)
// interface 대문자이름 {}
// 타입을 지정해 재사용할수있다.

// 선택적 속성 - ?
// 읽기전용 속성 - readonly : 읽기전용이기 때문에 값을 재할당 불가능

interface User {
  name : string // 필수 사용
  readonly age: number // 필수 사용
  isValid?: boolean // ? 가 있어서 선택적 사용
}

const userA:User = {
  name: 'A',
  age: 20,
  isValid: true
}

userA.isValid = false;
userA.age=22 //읽기전용이기 때문에 값을 재할당 불가능 오류

const userB:User = {
  name:'B',
  age:102,
}

// 함수 타입 - 호출 시그니처(Call Signature)
// (매개변수:타입) :반환값
// interface GetName {
//   (message:string): string
// }

interface User2 {
  name:string
  age:number
  getName: (parameter:string)=>string
  // getName: GetName
}

const userC:User2 = {
  name:'C',
  age:30,
  getName(message:string){
    console.log(message)
    return this.name
  }
}

userC.getName('Hello')

// 인덱스 기능 타입 - 인덱스 시그니처(Index Signature)
// key:value
// 배열은 [순서:순서키타입]: 속성의 타입
interface Fruits {
  [item:number]: string
}
const fruits:Fruits = ['Apple','Banana','Cherry']
console.log(fruits) // 0:'Apple'. 1:'Banana', 2: 'Cherry' <- 이렇게 나온다 순서키가 숫자라(0,1,2) number 타입!

// 객체
// 1
interface User3 {
  [key: string] : unknown // 인덱스할수 있는 속성은 값을 아직 알 수 없다
  name: string
  age: Number
}

const userD : User3 = {
  name: 'D',
  age: 30
}

userD['isValid'] = true 
userD['emails'] = ['userD.gmail.com','test@gmail.com'] 

//2
interface Payload {
  [key:string] : unknown
}
function logValues(payload:Payload){
  for( let key in payload ) {
    console.log(payload[key])
  }
}
interface User4 {
  [key:string]:unknown
  name:string
  age:number
  isValid:boolean
}
const userE:User4 = {
  name: 'D',
  age:30,
  isValid: true
}
logValues(userE)

// 확장(상속)
//1
interface User5 {
  name:string
  age:number
}
interface User6 extends User5 {
  isValid:boolean
}

const userF:User5={
  name: 'F',
  age:30,
  isValid: true
}
const userG:User6={
  name: 'G',
  age:30,
  isValid: true
}

// 2
// 같은 이름의 interface 작성 가능하나 기존 존재하는 속성의 타입을 그대로 명시해야 한다.
interface FullName {
  firstName:string
  lastName:string
}
interface FullName {
  middleName:string
  // lastName:boolean // 오류
  lastName:string // 오류
}

const fullName:FullName = {
  firstName:'kim',
  middleName:'min',
  lastName:'kyung'
}