// 1. 산술(Arithmetic)
// 피연산자(데이터) 연산자(기호) 피연산자(데이터)
// %는 나머지 연산자이다.
// 짝수는 값이 0, 홀수는 값이 1 이 나오기 때문에 주로 짝수 홀수를 구분할때 쓰인다!
console.log(1+2); // 3
console.log(5-7); // -2
console.log(3*4); // 12
console.log(10/2); // 5
console.log(7%5); // 2 

function isEven(num){
  if(num % 2 === 0 ){
    console.log('짝수');
  }
  if(num % 2 === 1 ){
    console.log('홀수');
  }
}
isEven(3) // 홀수
isEven(12) // 찍수

// 2. 할당(Assignment)
var a = 3
// a = a + 2
a += 2
console.log(a); // 5

// 3. 증가 & 감소(Increment & Decrement
// ++ : 증가 / -- : 감소
// 뒤에 쓰면 그 다음부터 / 앞에쓰면 지금바로
var a  = 3
console.log(a++); // 3
console.log(a); // 4

var b  = 3
console.log(++b); // 4
console.log(b); // 4

// 4. 부정(Negation)
// ! : 침,거짓 데이터로 출력되며 결과가 반대로 나온다
console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!!0); // false
console.log(!!!0); // true
console.log(!null); // true
console.log(!undefined); // true
console.log(!NaN); // true
console.log(!''); // true
console.log(!{}); // false
console.log(![]); // false

// 5. 비교(Comparison)
var a = 1
var b = 3
// 동등, 부등(형변환해서 결과만 보기 때문에 형변환이 일어난다!) -> 일치 불일치 연산자를 쓰자
console.log( a == b ); // a와 b는 동등하다 -> false
console.log( a != b ); // a와 b는 동등하지 않다 -> true
// 일치 불일치
console.log( a === b ); // false
console.log( a !== b ); // true
// 크기
console.log( a > b); // false
console.log( a >= b); // false
console.log( a <= b); // true

// 6. 논리(Logical)
// && : AND 연산자(그리고) <- 코드의 왼쪽부터 확인을 해서 가장 먼저 만나는 거짓 데이터 반환 / 모두가 참일 경우 마지막 값 반환
// || : OR 연산자(또는) <- 코드의 왼쪽부터 확인을 해서 가장 먼저 만나는 참 데이터 반환 / 모두가 거짓 경우 마지막 값 반환
var a = true
var b = false
if(a && b){ // a와 b모두가 참인가?
  console.log('모두가 참'); // b의 값이 거짓이므로 출력안됨
}
if(a || b){ // a 또는 b가 참인가?
  console.log('하나가 참'); // a가 참이므로 출력됨
}

console.log( true && false ); // false
console.log( 1 && 0 ); // 0 <- 먼저 만난 거짓인 0 반환
console.log( 1 && 0 && 2 ); // 0 <- 먼저 만난 거짓인 0 반환, 2는 그냥 넘어감
console.log( 'A' && 'B' && '' ); // '' <- 먼저 만난 거짓인 '' 반환
console.log( 'A' && 'B' && 'C' ); // C <- 모두가 참일 경우 마지막 값 C 반환

console.log( true || false ); // true
console.log( 0 || 1 ); // 1 
console.log( false || {} || 0 ); // {} 
console.log( function(){} || '' || undefined ); // function(){} 
console.log( false || 0 || NaN ); // NaN <-  모두가 거짓 경우 마지막 값 반환

// 7. Nullish 병합(Nullish Coalescing)