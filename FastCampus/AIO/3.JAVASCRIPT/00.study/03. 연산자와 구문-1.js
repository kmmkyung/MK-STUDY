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
// ?? : 왼쪽에서 오른쪽으로 해석해서 null, undefined를 제외한 데이터를 모두 반환
var n = 0;
var num1 = n || 7
var num2 = n ?? 7
console.log(num1); // 7
console.log(num2); // 0
console.log(null ?? undefined); // undefined <- 가장 마지막 데이터 출력
console.log(null ?? 1 ?? 2); // 1
console.log(false ?? 1 ?? 2); // false
console.log(0 ?? 1 ?? 2); // 0

// 8. 삼항(Ternary)
// 조건 ? 참 : 거짓
var a = 1
// if(a < 2){console.log('참');}
// else{console.log('거짓');}
console.log( a < 2 ? '참' : '거짓' );

function getAlert(message){
  return message ? message : '메시지가 존재하지 않습니다.' // 메세지값이 있으면 결과값으로 주고 없으면 없다고 문구 내보내기
}
console.log(getAlert('안녕하세요')); // 안녕하세요
console.log(getAlert('')); // 메시지가 존재하지 않습니다.

// 9. 전개연산자 (Spread Operator)
// ... : 배얄, 객체에서 괄호를 증발시킨다.
var a = [1,2,3]
var b = [4,5,6]
console.log(...a); // 1, 2, 3
var c = [ a, b ] // [[1,2,3],[4,5,6]]
var d = [ ...a, ...b ]  // [1,2,3,4,5,6]

var a = { x:1 , y:2 }
var b = { y:3 , z:4 }
var c = { a , b } // {{ x:1 , y:2 },{ y:3 , z:4 }}
var d = { ...a , ...b } // { x:1, y:3, z:4} <- 중복된 y 값은 뒤에값에 덮어쓰임

function fn(x,y,z){
  console.log(x,y,z);
}
fn(1,2,3) // 1,2,3
var a = [1,2,3]
fn(a[0],a[1],a[2]) // 1,2,3
fn(a) // [1,2,3], undefined, undefined
fn(...a)// 1,2,3

// 10. 구조분해할당(Destructuring assignment)
// 배열아니 객체를 해체하여 그 값을 개별 변수에 담는 방법

// 배열에서 사용하기
var arr = [1, 2, 3];
// 히나씩 인덱싱해서 할당할 수 있으나 번거로움
// var a = arr[0]
// var b = arr[1]
// var c = arr[2]
// console.log(a,b,c); // 1 2 3

// 변수와 값의 수가 같은 경우
var [a,b,c] = arr;
console.log(a,b,c); // 1 2 3

// 변수와 값의 수가 다른 경우
var b = 0;
var c = 0;
[,b,c] = arr; // 안들어가는 자리는 쉼표로 구분해 비워놔야 순서대로 들어간다
console.log(b,c); // 2,3
[,,c] = arr;
console.log(c); // 3

// 나머지 번수를 한번에 저장하는 경우
var [a, ...rest] = arr
console.log(a,rest); // 1 [2,3]

// 객체에서 사용하기
var obj = { a:1, b:2, c:3 }
// var a = obj.a
// var b = obj.b
// var c = obj.c
console.log(a,b,c); // 1 2 3

// 배열과 다르게 key값이 있어서 key값으로 할당할 수 있다!
var {a,b} = obj
console.log(a,b); // 1 2
var {c} = obj
console.log(c); // 3
var {c, ...rest} = obj
console.log(c,rest); // 3 {a:1,b:2}

// 11. 선택적 체이닝(Optional Chaining)
// ?. : 객체에서 데이터가 없어도 에러를 발생시키지 않고 undefined 데이터를 출력한다.
var user
console.log(user.name); // 에러
console.log(user?.name); // undefined

var userA = {
  name: 'a',
  address:{
    city:'Seoul'
  }
}
var userB = {
  name: 'b',
}
function getCity(user){
  return user.address?.city || '주소 없음'
}
getCity(userA) // Seoul
getCity(userB) // 주소없음

