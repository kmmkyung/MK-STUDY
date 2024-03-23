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






// let imgLoading = new Promise((resolve, reject) => {
//   img.addEventListener('load',function(){
//     resolve()
//   })
//   img.addEventListener('error',function(){
//     reject()
//   })
// })
  
//   imgLoading.then(function(){
//     console.log('성공');
//   }).catch(()=>{
//     console.log('실패');
//   })

// let promise2 = new Promise((resolve, reject) => {
//   $.ajax({
//     type : 'GET',
//     url : 'https://링크'
//   }).done(function(결과){
//     resolve(결과);
//   })
// })

// promise2.then(function(결과){
//   console.log(결과);
  
//   return new Promise((resolve2) => {
//     $.ajax({
//       type:'GET', url:'https://링크2'}).done(function(결과2){
//       resolve2(결과2)
//     })
//   });
// }).then(function(){
//   console.log(결과2);
// })
async function fn1(){ // fn1 함수 자체가 promise가 되버린다!
  return 1+1
}

fn1().then(function(add){
  console.log( add+'성공');
});
