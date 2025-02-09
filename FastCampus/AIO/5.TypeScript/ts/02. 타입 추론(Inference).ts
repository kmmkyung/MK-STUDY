// 타입 추론(Inference)
// '추론' - 어떠한 판단을 근거로 삼아 다른 판단을 이끌어 냄.
// 타입추론이 가능해 모든 타입을 매번 지정할 필요가 없음 -> 필요한 부분에 타입을 지정하자!

// 1. 초기화된 변수
let num = 123 // number타입을 할당했기 때문에 타입스크립트 문법을 사용하지 않아도 추론이 가능하다
num = 'Hello' // string타입을 할당해 오류!

// 2. 기본값이 설정된 매개 변수
// 3. 반환 값이 있는 함수
function add(a:number,b = 2){ // 기본값이 지정된 매개 변수 'b'
  return a + b // 반환값의 타입이 확실한 함수 'add' 
}



