///// JSON
// 데이터 전달을 위힌 표준 포멧
// 문자, 숫자, 불린, Null, 객체, 배열만 사용
// 문자는 큰 따옴표만 사용(작은따옴포, 백틱 불가)
// 후행 쉼표 사용 불가
/*
const a = {
  x:1,
  y:2,<- 마지막에 후행 쉼표 불가
}
.json 확장자 사용
*/
// => JSON문자는 큰 따옴표가 붙어 있는 하나의 문자 덩어리

JSON.stringify() // - 데이터를 JSON 문자로 변환
JSON.parse() // - JSON 문자를 분석해 데이터로 변환

// 문자로 표시된다!
console.log(JSON.stringify('Hello world!'));
console.log(JSON.stringify(123));
console.log(JSON.stringify(false));
console.log(JSON.stringify({name:'a', age:85}));
console.log(JSON.stringify([1,2,3]));
