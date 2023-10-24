///// 배열

// .length
// 배열의 길이(숫자)를 반환
var arr = ['A','B','C'];
console.log(arr.length); // 3

// .at()
// 대상 배열을 인덱싱
// 음수 값을 사용하면 뒤에서부터 인덱싱
var arr = ['A','B','C'];
console.log(arr[0]); // A
console.log(arr.at(0)); // A 
console.log(arr[arr.length -1]); // C
console.log(arr.at(-1)); // C

// .concat()
// 대상 배열과 주어진 배열을 병합해 새로운 배열을 반환(기존 배열은 유지)
var arr1 = ['A','B','C'];
var arr2 = ['D','E','F'];
var arr3 = arr1.concat(arr2);
var arr4 = [...arr1, ...arr2];

console.log(arr3); // ['A','B','C','D','E','F'];
console.log(arr4); // ['A','B','C','D','E','F'];

// .every()
// 대상 배열의 모든 요소가 콜백 테스트에서 참(true)과 거짓(false)을 반환하는지 확인
var arr = [1,2,3,4];
var A = arr.every(item => {return item < 5})
var B = arr.every(item => {return item < 4})
console.log(A); // true
console.log(B); // false

// .filter()
// 주어진 콜백에서 테스트를 통과하는 모든 요소를 새로운 배열로 반환
// 모든 요소가 테스트를 통과하지 못하면 빈 배열을 반환
var num = [1,20,7,9,104,0,58];
var filterNum = num.filter(function(number){return number < 30})
var filterNum = num.filter( number => number < 30) // 위와 같음!
console.log(filterNum); // [1,20,7,9,0];

var users = [
  { name: 'A', age: 85 },
  { name: 'B', age: 22 },
  { name: 'C', age: 11 },
]
var filterAge = users.filter(ele => ele.age >= 19)
console.log(filterAge); // [{ name: 'A', age: 85 },{ name: 'B', age: 22 }]

// .flat() <- : 평평하게 한다
// 대상 배열의 모든 하위 배열을 지정한 깊이(Depth)까지 이어붙인 새로운 배열을 생성
// 깊이의 기본값은 '1' / 모든 깊이는 Infinity
var arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr.flat()); // [1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]]];
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]];
console.log(arr.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr); // [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// .includes()
// 대상 배역이 특정 요소를 포함하고 있는지 참/거짓으로 확인
var arr = [1, 2, 3]
console.log(arr.includes(2)); // true

var users = [
  { name: 'A', age: 85 },
  { name: 'B', age: 22 },
  { name: 'C', age: 11 },
]
console.log(users.includes({ name: 'A', age: 85 })); // false
// 실질적으로는 users안의 데이터와 다른 데이터로 취급되기 때문에 false
// users안 객체 데이터를 확인하려면 담아서 확인해야 한다.
var a = users[0]
console.log(users.includes(a)); // true

// .join()
// 대상 배열의 모든 요소를 구분자('')로 연결한 문자로 반환
var arr = ['Apple', 'Banana', 'Cherry']
console.log(arr.join()); // Apple,Banana,Cherry
console.log(arr.join(', ')); // Apple, Banana, Cherry
console.log(arr.join('/')); // Apple/Banana/Cherry
console.log(arr); // ['Apple', 'Banana', 'Cherry']

// .map()
// 대상 배열의 길이만큼 콜백을 실행하고, 콜백 반환값을 모아 새로운 배열을 반환
var num = [1, 2, 3, 4]
