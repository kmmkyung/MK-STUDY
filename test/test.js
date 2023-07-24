// 1씩 감소하는 배열 만들기

// function a(start, end) {
//     var answer = [];
//     for( let i=start; i>=end; i-- ){
//         answer.push(i)
//     }
//     return answer;
// }
// console.log(a(10,3));



var o1 = { a : 1, b : 2 };
var o2 = { c : 3, ...o1 };
console.log(o2);

var o1 = { a : 1, b : 2};
var o2 = { a : 3, ...o1 };
console.log(o2);

const d = new Date();

console.log(new Date());
console.log(new Date().toISOString())
console.log(new Date().toUTCString())
console.log(new Date().toTimeString())