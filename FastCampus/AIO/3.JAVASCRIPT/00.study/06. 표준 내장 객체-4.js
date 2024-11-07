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
// 대상 배열의 모든 요소가 콜백에서 참(true)과 거짓(false)으로 결과로 반환
var arr = [1,2,3,4];
var A = arr.every(item => {return item < 5})
var B = arr.every(item => {return item < 4})
console.log(A); // true
console.log(B); // false

// .some()
// 대상 배열의 어떤 요소라도 콜백에서 참(true)과 거짓(false)으로 결과로 반환
var arr = [1,2,3,4];
var A = arr.some(item => {return item > 3})
console.log(A); // true

// .filter()
// 주어진 콜백에서 테스트를 통과하는 모든 요소를 새로운 배열로 반환
// 모든 요소가 테스트를 통과하지 못하면 빈 배열을 반환
var num = [1, 20, 7, 9, 104, 0, 58];
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
// 첫번째 인수: 요소 / 두번째 인수: 요소의 인덱스 / 세번째 인수: 해당 배열
var num = [1, 2, 3, 4]
var newNum = num.map( ele => ele*2)
console.log(newNum); // [2, 4, 6, 8]

// .pop()
// 대상 배열에서 마지막 요소를 제거하고 그 요소를 반환
// 대상 배열 원본이 변경
var arr = ['Apple', 'Banana', 'Cherry']
console.log(arr.pop()); // Cherry
console.log(arr); // ['Apple', 'Banana']

// .shift()
// 대상 배열에서 첫 번째 요소를 제거, 제거된 요소를 반환
// 대상 배열 원본이 변경
var arr = ['A','B','C'];
arr.shift() // A
arr // ['B','C']

// .push()
// 대상 배열의 마지막에 하나 이상의 요소를 추가, 배열의 새로운 길이 반환
// 대상 배열 원본이 변경
var arr = ['Apple', 'Banana', 'Cherry']
var pushArr = arr.push('Orange')
console.log(pushArr) // 4 <- 배열의 새로운 길이 반환
console.log(arr); // [ 'Apple', 'Banana', 'Cherry', 'Orange' ]

// .reduce()
// .reduce((첫번째인수, 두번째인수)=>{콜백코드},초기값)
// 대상 배열의 길이만큼 콜백을 실행하고, 마지막에 호출되는 콜백의 값을 반환
// 각 콜백의 반환 값은 다음 콜백으로 전달된다.
// 첫번째 인수: 처음 콜백이 실행될 때 초기값이 들어가서 콜백 실행
// 두번째 인수: 요소
var num = [1, 2, 3]
var sum = num.reduce((acc, cur) => { // 0+1, 1+2, 3+3
  return acc + cur
},0)
console.log(sum); // 6

var users = [
  { name: 'A', age: 85 },
  { name: 'B', age: 22 },
  { name: 'C', age: 11 },
]
// 총 나이 / 평균 나이 계산해보기
var totalAge = users.reduce((acc, cur) => { return acc + cur.age }, 0) // 118
var totalAgeDiv= (totalAge/users.length).toFixed(1) // 39.3
// 모든 이름 배열로 추출
var nameArr = users.reduce((acc, cur)=>{
  acc.push(cur.name)
  return acc 
},[]) // [ 'A', 'B', 'C' ]

// .reverse()
// 대상 배열의 순서를 반전시킨다.
// 대상 배열 원본이 변경
var arr = ['A','B','C'];
arr.reverse() // ['C','B','A']

// .slice()
// 대상 배열의 일부를 추출해 새로운 배열을 반환
// 첫 번째 인수부터 두 번째 인수 직전까지 추출
// 두 번쨰 인수를 생략하면 대상 배열의 끝까지 추출
var arr = ['A','B','C','D','E'];
console.log(arr.slice(0,3)); // ['A','B','C']

// .sort()
// 대상 배열을 콜백의 반환 값(음수,양수,0)에 따라 정렬한다.
// 콜백을 제공하지 않으면, 요소를 문자열로 변환하고 유니코드 코드 포인트 순서로 정렬
// 대상 배열 원본이 변경
var num = [1, 20, 7, 9, 104, 0, 58];
num.sort() // [0,1,104,20,58,7,9]
num.sort((a,b)=> a-b) // [0,1,7,9,20,58,104]

// .splice()
// 대상 배열에 요소를 추가하거나 삭제하거나 교체
// 첫 번쨰 인수: 추가,삭제,변경할 위치 / 두 번쨰 인수: 삭제할 개수 / 세 번째 인수: 추가할 값
// 대상 배열 원본이 변경
var arr = ['A','B','C'];
arr.splice(2,1,'X') // ['A','B','X']

// .unshift()
// 새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환
// 대상 배열 원본이 변경
var arr = ['A','B','C'];
arr.unshift('X') // 4
arr // ['X','A','B','C']
