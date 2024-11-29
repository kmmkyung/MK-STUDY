// 타입 별칭(Alias)
// 타입의 별도 이름
// type 별칭이름 = 해당타입
type TypeA = string
type TypeB = string | number | boolean
type User = {
  name:string
  age:number
  isValid:boolean
} | [string,number,boolean]

const userA:User = {
  name: 'A',
  age: 30,
  isValid: true
}
const userB:User = ['B', 36, false]

