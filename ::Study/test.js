// Spread 문법 연습 
let a = [1,2,3];
let b = ['you', 'are'];
let c = function(a,b){
  console.log([[...a], ...[...b]]);  
}
c(a,b)

// 배열안에 담기
function obj(...rest){
  return rest
}
let text = obj(1,2,3,4,5);
console.log(text);


// 여러 중복 수 최대값 찾기 = Math.max
const numbers = [1,2,6,34,7,52,2,4,6,8,3,23,1,35,52,66,72,5,6,3,10,11,12,10,66,72];
function maxnum(arr){
  console.log(Math.max(...arr));
}
maxnum(numbers);


// 문자를 넣으면 정렬
function txt(a){
  let newarr = ([...a])
  console.log(newarr); // ['b','e','a','r'] 하나씩 배열에 담김
  let arrsort = newarr.sort()
  console.log(arrsort); 
}
txt('bear');

// 글자 수 세기 함수 = 글자를 세면 몇개인지 객체에 담아줌
function textlength(t){
  let anwser = {}; // 담을 빈 객체
  let textSingle = [...t];
  // console.log(textSingle); // 베열에 하나씩 해체되서 들어왔당


  textSingle.forEach(function(v){
    console.log(v);
    if(anwser[v] > 0) {anwser[v]++}
    else{anwser[v] = 1}
  }); 
  console.log(anwser);
}
textlength('qwertqw')

console.clear()

function num(){
  return 10
}

function add( a = 5, b = num()){
  console.log(a+b);
}
add(); // 15
add(12); // 22