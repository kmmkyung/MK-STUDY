// 1. prototype

function User(first, last){
  this.firstName = first; // this = function User
  this.lastName = last
}
// User의 공통되는 함수 만들기
User.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}
let user1 = new User('kim','min')

console.log(user1); // User{firstName:'kim',lastName:'min'}
console.log(user1.getFullName()); // 'kim min'

// 2. ES6 Class
// class Name {}
class User {
  constructor(first,last){
    this.firstName = first,
    this.lastName = last,
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}
let user1 = new User('kim','min') // 생성자함수

console.log(user1); // User{firstName:'kim',lastName:'min'}
console.log(user1.getFullName()); // 'kim min'

// 3. Getter, Setter
// Getter : 값을 얻어내는 메소드 / Setter: 값을 설정
class User {
  constructor(first,last){
    this.firstName = first,
    this.lastName = last,
    this.fullName = `${first} ${last}`
  }
}
let user1 = new User('kim','min') // 최초로 1회만 생성되기 때문에 this.fullName은 바뀌지 않는다 -> 바꾸려면 class User안에 메소드로 만들것 getFullName() 처럼
console.log(user1); // User{firstName:'kim',lastName:'min', fullName:'kim min'}
user1.firstName = 'park'
console.log(user1); // User{firstName:'park',lastName:'min', fullName:'kim min'}

// 편리하게 getter, setter를 사용해보자
class User {
  constructor(first,last){
    this.firstName = first,
    this.lastName = last,
  }
  get fullName(){ 
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(value){
    console.log(value);
  }
}
let user1 = new User('kim','min')
console.log(user1.fullName); // kim min
user1.firstName = 'park'
console.log(user1.fullName); // park min

// fullName의 값을 지정, 즉 set하는 행위이다. 하나의 데이터는 첫번째 인수로 들어간다 
user1.fullName = 'A B' // A B
console.log(user1.fullName); // park min