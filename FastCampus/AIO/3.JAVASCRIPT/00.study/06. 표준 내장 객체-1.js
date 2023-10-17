///// 문자 String

// .length
// 문자의 길이(숫자)를 반환한다.(띄어쓰기 포함)
var str = 'Hello world!';
console.log(str.length); // 12

// .includes()
// 대상 문자에 주어진 문자가 포함되어 있는지(불린) 확인.(소문자 대문자 구별)
// 첫번째 인수: 찾는 단어, 두번째 인수: 찾는 위치
var str = 'Hello world!';
console.log(str.includes('Hello')); // true
console.log(str.includes('Hello',1)); // false
if(!str.includes('aaa')){ // aaa가 포함되어 있지 않으면!
  console.log('문자가 없다'); // 출력된다!
}

// .indexOf()
// 대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스(숫자)를 반환한다.(0부터 시작)
// 일치하는 문자가 없으면 '-1' 을 반환한다.
var str = 'Hello world!';
console.log(str.indexOf('world')); // 6 <- 6번째부터 시작
console.log(str.indexOf('aaa')); // -1
if(str.indexOf('aaa' === -1)){
  console.log('문자가 없다'); // 출력된다!
}

// .padEnd()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면, 주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자 반환한다.
// => 원본은 회손되지 않는다!
// 첫번째 인수: 지정한 길이 , 두번째 인수: 붙일 문자
var str = '1234567'
console.log(str.padEnd(10,'0')); // 10자리보다 작으면 0을 뒤에 붙여서 채워줘 = 1234567000
console.log(str); // 1234567

var str2 = '1234567890123'
console.log(str2.padEnd(10,'0')); // 10자리보다 크면 변화없이 출력 = 1234567890123

// .padStart()
// 대상 문자의 길이가 지정된 길이보다 작으면, 주어진 문자를 지정된 길이까지 앞에 붙여 새로운 문자를 반환한다.
var str = '1234567'
console.log(str.padStart(10,'0')); // 10자리보다 작으면 0을 앞에 붙여서 채워줘 = 0001234567
console.log(str); // 1234567


// .replace()
// 대상 문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체한 새로운 문자를 반환한다.(앞에서 찾은 한번만, 다 바꾸려면 정규식 사용)
// => 원본은 회손되지 않는다!
// 첫번째인수: 바꿀문자, 두번쨰인수: 교체하는문자
var str = 'Hello, Hello?!'
console.log(str.replace('Hello','Hi')); // Hi, Hello?!
console.log(str.replace(/Hello/g,'Hi')); // Hi,Hi?! <- /문자/g : 문자 전체
console.log(str); // Hello, Hello?!


// .slice()
// 대상 문자의 일부를 추출해 새로운 문자를 반환한다. => 원본은 회손되지 않는다!
// 첫번째 인수부터 두번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 문자의 끝까지 추출한다.
// -는 뒤에서부터 순서를 매긴다
var str = 'Hello world!';
//         01234 5 678901
//       - 21098 7 654321
console.log(str.slice(0,5)); // Hello <- 0~4까지 추출
console.log(str.slice(6,-1)); // world
console.log(str.slice(6)); // world!
console.log(str); // Hello world!

// .split()
// 대상 믄자를 주어진 구분자로 나눠 배열로 반환한다.
var str = 'Apple, Banana, Cherry';
console.log(str.split(', ')); // ['Apple', 'Banana', 'Cherry'] <- (, )으로 구별해서 배열에 담기 
console.log(str.split(',')); // ['Apple', ' Banana', ' Cherry'] <- (,)으로 구별해서 배열에 담기(띄어쓰기도 문자다!) 
console.log(str.split('')); // ['A','p','p','l',e',' ','B',...] <- ()으로 구별해서 배열에 담기(모두 분해) 

// toLowerCase
// 대상 문자를 영어 소문자로 반환해 새로운 문자로 반환한다. => 원본은 회손되지 않는다!
var str = 'Apple, Banana, Cherry';
console.log(str.toLowerCase()); // apple, banana, cherry
console.log(str); // Apple, Banana, Cherry

// toUpperCase
// 대상 문자를 영어 대문자로 반환해 새로운 문자로 반환한다. => 원본은 회손되지 않는다!
var str = 'Apple, Banana, Cherry';
console.log(str.toUpperCase()); // APPLE, BANANA, CHERRY
console.log(str); // Apple, Banana, Cherry

// .trim()
// 대상 문자의 앞뒤 공백 문자(space, tab 등)를 제거한 새로운 문자를 반환한다. => 원본은 회손되지 않는다!
// 사이사이 띄어쓰기는 제거하지 않는다
// 대표적으로 사용자가 아이디나 비밀번호를 입력할때 확인
var str = '     He llo  ';
console.log(str.trim()); // 'He llo'
console.log(str); // '     He llo  '


