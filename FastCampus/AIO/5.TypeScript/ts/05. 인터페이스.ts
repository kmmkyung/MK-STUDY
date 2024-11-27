// 인터페이스(Interface)
// interface 대문자이름 {}
// 타입을 지정해 재사용할수있다.

// 선택적 속성 - ?
// 읽기전용 속성 - readonly : 읽기전용이기 때문에 값을 재할당 불가능

interface User {
  name : string, // 필수 사용
  readonly age: number, // 필수 사용
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
// 인덱스 기능 타입 - 인덱스 시그니처(Index Signature)
// 확장(상속)