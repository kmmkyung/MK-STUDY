///// 날짜
// const date = new Date()
// 월은 제로베이스 넘버로 출력

// 지정 날자
const date = new Date(2023,10,20,12,57,30)
console.log(d1); // 2023년 11월 20일 12:57:30

// .getFullYear() .setFullYear()
// 날짜 인스턴스의 '연도'를 반환하거나 지정
console.log(date.getFullYear()); // 2023
data.setFullYear(2024);
console.log(date.setFullYear()); // 2024

// .getMonth() .setMonth()
// 날짜 인스턴스의 '월'을 반환하거나 지정
// 0부터 시작(zero-based-numbering)
console.log(date.getMonth()); // 11
data.getMonth(0); // 0
console.log(date.getMonth()); // 1

//.getDate() .setDate()
// 날짜 인스턴스의 '일'을 반환하거나 지정
console.log(date.getDate()); // 20

// .getHours() .setHours()
// 날짜 인스턴스의 '시간'을 반환하거나 지정
console.log(date.getHours()); // 12

// .getMinutes() .setMinutes()
// 날짜 인스턴스의 '분'을 반환하거나 지정
console.log(date.getMinutes()); // 57

// .getSeconds() .setSeconds()
// 날짜 인스턴스의 '초'를 반환하거나 지정
console.log(date.getSeconds()); // 30

// .getDay()
// 날짜 인스턴스의 '요일'을 반환.
// 일월화수목금토 순으로 0-6 숫자로 반환
console.log(date.getDay()); // 숫자로 나온다
function getDayKo(day){
  switch(day){
    case 0 : return '일'
    case 1 : return '월'
    case 2 : return '화'
    case 3 : return '수'
    case 4 : return '목'
    case 5 : return '금'
    case 6 : return '토'
  }
}
console.log(getDayKo(date.getDay()));

// .getTime() .setTime()
// '1970-01-01 00:00:00'(유닉스타임)부터 경과한,
// 날짜 인스턴스의 '밀리초(ms)'로 반환하거나 지정

// Date.now()
// '1970-01-01 00:00:00'(유닉스타임)부터 경과한,
// 메소드가 호출될 때의 '밀리초(ms)'로 반환



