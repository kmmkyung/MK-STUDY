// 타입 별칭(Alias)
// 타입의 별도 이름
// type키워드 별칭이름 = 해당타입
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

function someFn(param:TypeB):TypeA { // 문자데이터 반환
  switch(typeof param) {
    case 'string':
      return param.toUpperCase()
    case 'number':
      return param.toFixed(2)
    default:
      return 'Boolean'
  }
}

// interface와 차이점
// 기능적으로는 차이가 없다. 굳이 권장하면 interface
// type별칭은 데이터 타입을 만드는 구조라 좀 더 사용범위가 넓다. interface경우 함수 배열 객체 데이터를 전제하기 때문에 굳이 따지면 interface가 낫지 않을까 싶음
type TypeUser = {
  name:string
  age:number
  inValid:boolean
}

interface InterFaceUser {
  name:string
  age:number
  inValid:boolean
}
 
const userC:InterFaceUser = {
  name:'C',
  age:30,
  inValid:true
}