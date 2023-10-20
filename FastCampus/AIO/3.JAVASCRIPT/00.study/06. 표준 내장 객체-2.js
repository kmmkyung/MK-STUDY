///// 숫자

// .toFixed()
// 숫자를 지정된 고정 소수점 표기(자리수)까지 표현하는 문자로 반환
var num = 3.141592
console.log(num.toFixed(2)); // 3.14(string)
console.log(parseFloat(num.toFixed(2))); // 3.14

// .toLocaleString()
// 숫자를 현지 언어 형식의 문자로 반환
var num = 100000
console.log(num.toLocaleString()); // 1,000,000
console.log(`${num.toLocaleString()}원`); // 1,000,000원

// Number.isInteger()
// 숫자가 정수(integer)인지 확인해 boolean값으로 반환
var num = 123
var pi = 3.14
console.log(Number.isInteger(num)); // true
console.log(Number.isInteger(pi)); // false

// Number.isNaN()
// 주어진 값이 'NaN'인지 확인한다
var num1 = NaN; // true
var num2 = 123; // false
var str = 'Hello'; // false
var nul = null // false

// Number.parseInt() / parseInt()
// 주어진 값(숫자,문자)을 파싱해 특정 진수(radix)의 정수(숫자)로 반환
// 첫번째파라미터: 대상 / 두번째파라미터: 진수
var str = '3.141592'
var num = 3.141592
console.log(parseInt(str,10)); // 3
console.log(parseInt(num,10)); // 3

// Number.parseFloat() / parseFloat()
// 주어진 값(숫자,문자)을 파싱해 부동소수점 실수로 반환(숫자)
var str = '3.141592'
var num = 3.141592
console.log(parseFloat(str)); // 3.141592
console.log(parseFloat(num)); // 3.141592


///// 수학

// Math.abs()
// 주어진 숫자의 절댓값을 반환
console.log(Math.abs(2)); // 2
console.log(Math.abs(-2)); // 2

// Math.ceil()
// 주어진 숫자를 올림해 정수를 반환
console.log(Math.ceil(3.14)); // 4

// Math.floor()
// 주어진 숫자를 내림해 정수를 반환
console.log(Math.floor(3.14)); // 3

// Math.round()
// 주어진 숫자를 반올림해 정수를 반환
var num1 = 3.141;
var num2 = 3.768;
console.log(Math.round(num1)); // 3
console.log(Math.round(num2)); // 4


// Math.max()
// 주어진 숫자 중 가장 큰 숫자를 반환
console.log(Math.max(1, 22, 38, 192)); // 192

// Math.min()
// 주어진 숫자 중 가장 작은 숫자를 반환
console.log(Math.min(1, 22, 38, 192, -10)); // -10

// Math.pow()
// 주어진 숫자를 거듭제곱한 값을 반환
// 첫번째파라미터: 제곱할 수 / 두번째파라미터: 제곱할 횟수
console.log(Math.pow(4, 2)); // 16
console.log(Math.pow(10, 3)); // 1000

// Math.random()
// 숫자 0 이상, 1미만의 난수를 반환
console.log(Math.random()); // 0.랜덤수

// +) 특정 범위릐 랜덤 정수 얻기
function random( min=0, max=10){
  return Math.floor(Math.random() * (max-min)) + min
}
console.log(random()); // 0 ~ 10 사이의 정수
console.log(random(11,20)); // 11 ~ 20 사이의 랜덤 정수





