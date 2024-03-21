var users = [
  { name: 'A', age: 85 },
  { name: 'B', age: 22 },
  { name: 'C', age: 11 },
];


// 총 나이 / 평균 나이 계산해보기
var totalAge = users.reduce((acc, cur) => { return acc + cur.age }, 0) // 118
var totalAgeDiv= (totalAge/users.length).toFixed(1) // 39.3
// 모든 이름 배열로 추출
var nameArr = users.reduce((acc, cur)=>{
  acc.push(cur.name)
  return acc 
},[]) // [ 'A', 'B', 'C' ]
