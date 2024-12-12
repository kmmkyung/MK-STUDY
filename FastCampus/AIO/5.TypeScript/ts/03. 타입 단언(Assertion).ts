// 타입 단언(Assertion)
// '단언' - 주저하지 아니하고 딱 잘라 말함.

// 단언 키워드 = as -> 변수 as 단언할 타입
// Not-null 단언 연산자(타입이 null | undefined가 아니라고 단언) = ! -> 변수!
// 할당 단언 키워드(아무런값도 할당되어 있지 않은데 할당되어있다고 단언) = ! -> 변수!:타입

// 1)
// 타입스크립트는 스크립트 코드에서 추론을 하기 때문에 타입스크립트에서는 'body' 태그가 존재하는지 알 수 없다.
// document.querySelector 메소드는 해당 요소를 찾지 못하면 null 을 반환한다. -> el의 타입은 HTMLBodyElement | null 두가지를 가지게 됨
const el =  document.querySelector('body')
el.textContent = 'Hello world' // el은 null 데이터일 수도 있기 때문에 오류

// 띠리서 as키워드를 사용해 null타입이 아나리 HTMLBodyElement 타입이라고 단언해줘야 한다.
const el2 =  document.querySelector('body') as HTMLBodyElement
el2.textContent = 'Hello world'

// 또는 !키워드를 사용해 null 타입이 아니라고 단언해줘야 한다.
const el3 = document.querySelector('body')
el3!.textContent = 'Hello world'

// 만약 없는 요소를 찾는다면 -> 1. if조건을 사용해 해결가능 -> Guards
const el4 = document.querySelector('.title')
if(el4){
  el4.textContent = 'Hello world'
}

// 2)
// getNumber 함수의 매개변수 x는 number | null | undefined 타입의 값이 들어갈 수 있다.
// getNumber1 힘수인 경우 x의 값이 null | undefined 일 수 있어 number타입에 사용할 수 있는 .toFixed메소드를 사용해 타입 오류가 난다.
function getNumber1(x:number|null|undefined){
  return Number(x.toFixed(2))
}

// getNumber2 힘수인 경우 x의 값이 number타입이라고 단언해 .toFixed메소드를 사용할 수 있지만 null 값이 들어갈 수 있는 매개변수라 null값을 입력하면 실행할 때 타입 오류가 난다.
// 당장의 오류는 해결했지만 잘못된 코드!
function getNumber2(x:number|null|undefined){
  return Number((x as number).toFixed(2))
}
getNumber2(3.1415)
getNumber2(null)

// getNumber3 힘수인 경우 x의 값이 null값이 아니라고 단언해 .toFixed메소드를 사용할 수 있지만 null 값이 들어갈 수 있는 매개변수라 null값을 입력하면 실행할 때 타입 오류가 난다.
// 당장의 오류는 해결했지만 잘못된 코드!
function getNumber3(x:number|null|undefined){
  return Number(x!.toFixed(2))
}

// if 조건을 통해 해결 -> Guards
function getNumber4(x:number|null|undefined){
  if(x){
    return Number(x.toFixed(2))
  }
}

// 3) null | undefined 타입이 아닌 별도의 다른 타입으로 지정해야 할때 as를 사용
function getValue(x:string|number, isNumber:boolean){
  if(isNumber){
    return Number((x as number).toFixed(2))
  }
  return (x as string).toUpperCase()
}

getValue('Hello world', false) // 'HELLO WORLD'
getValue(3.14444, true) // 3.14

// 4. 할당 단언의 !
// 아무런값도 할당되어 있지 않은데 할당되어있다고 단언
let num1:number
console.log(num1) // 할당되지 않은 값을 출력해 undefined 출력됨 / number타입이 아니라 오류

let num2!:number
console.log(num2) // 할당되지 않은 값을 출력해 undefined 출력됨 

