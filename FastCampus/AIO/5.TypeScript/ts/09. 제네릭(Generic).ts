// 제네릭(Generic)
// 크게 함수, 클래스, 인터페이스에서 사용할 수 있다.

/// 함수
// function 함수이름<Type>(매개변수:Type){} //Type는 매개변수처럼 타입을 담고 있다.
// 함수호출시 함수이름앞에 <타입>을 적어 타입지정도 명시적으로 가능

interface Obj{
  x:number
}
type Arr = [number, number]

// function toArray(a:string, b:string): string[]
// function toArray(a:number, b:number): number[]
// function toArray(a:boolean, b:boolean): boolean[]
// function toArray(a:Obj, b:Obj): Obj[]
// function toArray(a:Arr, b:Arr): Arr[]
// function toArray(a:any, b:any){
  //   return [a, b]
// }
  
// toArray 라는 함수를 사용하는 방법이 많은데 이걸 오버로딩하기보다는 제네릭 문법을 통해 개선할 수 있다.
function toArray<T>(a:T, b:T){
  return [a, b]
}

toArray<string>('kim','mk') // ['kim','mk'] // 첫번째 데이터(a)로 string가 들어가서 b의 T도 string 타입
toArray(1,2) // [1,2]
toArray(true,false) // [true,false]
toArray({x:1},{x:2}) // [{x:1},{x:2}]
toArray([1,2],[3,4,5]) // [[1,2],[3,4,5]] <- number[] 로 인식하게 된다.
toArray<Arr>([1,2],[3,4]) // [[1,2],[3,4]] <- Arr 명시적으로 사용해야 Arr타입 적용

/// 클래스
class User<T> {
  constructor(public payload: T){}
  getPayload(){
    return this.payload
  }
}

interface userAType{
  name:string,
  age:number,
  isValid:boolean
}

interface userBType{
  name:string,
  age:number,
  emails:string[]
}

const userA = new User<userAType>({
  name:'A',
  age:30,
  isValid:true
})

const userB = new User<userBType>({
  name:'A',
  age:30,
  emails:['userb@gmail.com']
})

/// 인터페이스, 제약조건(Constraints)
interface MyData<T>{
  name:string
  value:T
}

// T의 타입을 숫자 또는 문자만 받을 수 있도록 제약
//<Type extends type | type>
interface MyData2<T extends string | number>{
  name:string
  value:T
}

const dataA:MyData<string> = {
  name:'Data A',
  value: 'Hello world'
}

const dataB:MyData<number> = {
  name:'Data A',
  value: 123
}

const dataC:MyData<boolean> = {
  name:'Data A',
  value: true
}

const dataD:MyData<number[]> = {
  name:'Data A',
  value: [1,2,3,4]
}

