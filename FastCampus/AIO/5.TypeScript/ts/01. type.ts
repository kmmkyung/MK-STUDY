// 타입 종류
// 변수:타입

/// 문자
let str:string // 선언은 가능하나 변수를 사용하기 전에 타입에 맞는 값을 할당해줘야한다. 선언하지 않으면 값이 undefined 때문에 오류
let red:string = "Red"
let green:string = 'Green'
let myColor:string = `My color is ${red}`
let yourColor:string = 'Your color is' + green

/// 숫자
let num:number
let integer:number = 6
let float:number = 3.14
let infinity:number = Infinity
let nan:number = NaN

/// 불린
let isBoolean:boolean
let isDone:boolean = false

/// Null / Undefined
let nul:null
let und:undefined
nul = null
console.log(nul) // nul 변수에 할당해야 오류가 안남(아무것도 아닌값을 지정해줘야 함) <- 명시적
console.log(und) // 할당하지 않으면 자동으로 undefined값이 할당됨 <- 암시적

/// 배열 | :type[]
const fruits:string[] = ['Apple','Banana','Cherry'] // string인 배열
const numbers:number[] = [1,2,3,4,5] //number 배열
const unionArr:(string|number)[] = ['Apple',1,2,'Banana',3] // (타입|타입) / string 또는 number 인 배열

/// 객체 | :object
// object 타입을 쓰면 모든 변수는 object 타입으로 명시된다.
const obj:object = {} // typeof obj === 'object'
const arr:object = [] // typeof arr === 'object'
const func:object = function(){} // typeof func === 'object'
// 따라서 잘 사용하진 않고 객체데이터에서는 각각 속성에 명시한다.
const userA:{
  name:string,
  age:number,
  isValid:boolean
} = {
  name:'MK',
  age:30,
  isValid:true
}

/// 함수
// 함수(파라미터:타입):반환값의 타입 {}
function add(x:number,y:number):number{ return x + y }
const add2:(x:number,y:number) => number = function(x,y){ return x + y }
const add3 = function(x:number,y:number):number{ return x +y }

function helloFn():void{ // 함수에 return 데이터가 없으면 void 
  console.log('hello')
}

/// Any <- 어떤 데이터를 할당해도 상관없다 = TypeScript를 사용할 이유가 없어진다
let hello:any = 'Hello world'
hello = 123
hello = false
hello = null
hello = []

/// Unknown <- 어떤 데이터가 할당될지 알수없다 = 정확하게 데이터를 타입을 알 수 없을떄 사용
const a:any = 123
const u:unknown = 123

const anyA:any = a
const booA:boolean = a
const numA:number = a

const anyU:any = u
const booU:boolean = u // boolean 데이터를 할당해야하는데 unknown 타입을 할당하기 때문에 오류
const numU:number = u // number 데이터를 할당해야하는데 unknown 타입을 할당하기 때문에 오류

/// Tuple <- 배열 아이템의 순사에 타입지정을 함(아이템 개수까지 명시하는 타입이다) <-배열아이템이 바뀌는 경우에는 적합하지 않음 
const tuple:[string,number,boolean] = ['a', 1, false]
const users:[number,string,boolean][]=[[0,'A',true],[1,'B',false],[2,'C',true]] // Tuple타입인 배열데이터

/// Void
// 기본적으로 함수에서 return 키워드를 사용하지 않으면 반환값은 궁극적으로 undefined값을 반환하지만 
// TypeScript에서 함수에서 return 키워드를 사용하지 않아 아무것도 반환하지 않는 구조에서 반환값은 undefined이지만 명시적으로는 void 타입이 된다.
function helloFn2(msg:string):void{
  console.log(`Hello ${msg}`)
}

const hi:void = helloFn2('world') // 반환되는 타입은 void이기 때문에 hi도 void


/// Never
// 절대 발생하지 않을 값
const ex:string[] = [] // 문자타입을 가지는 배열데이터
const nev:never[] = [] // 어떤 타입도 가질 수 없는 배열데이터
nev.push(1) // never타입의 배열이기 때문에 number타입의 값 할당 오류

/// Union
// 여러타입을 지정하고 싶을 때 유용한 타입
let union:string|number
union = 'Hello type'
union = 123
union = false // union변수는 string 또는 number 타입만 할당가능이기 때문에 오류

/// Intersection
// & 기호로 동시에 타입을 지정할 수 있다.
interface User{
  name:string,
  age:number
}

interface Validation{
  isValid:boolean
}

const UserB:User&Validation = {
  name:'MK',
  age:30,
  isValid:true
}