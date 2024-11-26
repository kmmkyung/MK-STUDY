// 타입 가드(Guards) : 방어

// 1
// html에 h태그가 없다고 가정하에 작성해보자 
// 태그를 찾지 못하면 null 값이 나온다
function logText(el:Element){
  console.log(el.textContent)
}

// h1El을 찾으면 값이 null 은 아닐꺼라 단언했지만
const h1El = document.querySelector('h1') as HTMLHeadElement
logText(h1El) // 실제 찾은 내용이 존재하지 않아 null 값이기 때문에 에러

// 오류를 없애려면 if조건을 통해 타입가드를 해주자
const h2El = document.querySelector('h2') // 요소의 타입이 정확히는 모르지만 찾으면 null이 아니기 때문에 실행가능
if(h2El){ // 요소를 찾으면 실행
  logText(h1El)
}
if(h2El instanceof HTMLHeadElement){ // instanceof 키워드를 통해 인스턴스인지 확인하는 조건도 가능
  logText(h1El)
}

// 2
function add(val:string|number|boolean){
  let res = 'Result : '
  if( typeof val === 'number' ){ // val값이 number일때만 동작하는 타입가드
    res += val.toFixed(2)
  }
  else if( typeof val === 'string' ){ // val값이 string일때만 동작하는 타입가드
    res += val.toUpperCase()
  }
  console.log(res)
}
add(3.14444) // Result : 3.14
add('Hello') // Result : HELLO

