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
// constructor()메서드는 클래스의 인스턴스 객체를 생성하고 초기화하는 메서드
class User {
  constructor(first,last){
    this.firstName = first,
    this.lastName = last,
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}
// user1은 인스턴스 = new키워드와 쓰이는 User 클래스는 생성자함수이다
let user1 = new User('kim','min')

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
    console.log(value); // 'A B'
    [this.firstName,this.lastName] = value.split(' ') // ['A','B']
  }
}
let user1 = new User('kim','min')
console.log(user1.fullName); // kim min
user1.firstName = 'park'
console.log(user1.fullName); // park min

// fullName의 값을 지정, 즉 set하는 행위이다. 하나의 데이터는 첫번째 인수로 들어간다 
user1.fullName = 'A B' // A B
console.log(user1); //fullName: 'park min'-> 'A B'

// 4. 정적 메소드
// Array에서 사용할 수 있는 메소드는 2가지 있다.
// Array.prototype.메소드 <- 프로토타입 메소드
// Array.메소드 <- 정적메소드
// class 내부 안에 정적메소드를 만들 경우 함수명 앞에 static 붙여주기
class User {
  constructor(first,last){
    this.firstName = first,
    this.lastName = last,
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
  static isUser(user){ // 데이터 구조 확인용
    if(user.firstName && user.lastName){
      return true
    }
    return false
  }
}
let user1 = new User('kim','min') // 생성자함수

console.log(user1); // User{firstName:'kim',lastName:'min'}
console.log(user1.getFullName()); // 'kim min' <- 프로토타입 메서드
console.log(User.getFullName()); // 오류
console.log(User.isUser(user1)); // true

// 5. 상속과 instanceof
// class 문법을 사용하면 instanceof라는 키워드를 사용할 수 있다.
// instance명 instanceof 파생된 클래스 이름 <- 인스턴스로 만들어졌는지 Boolean값으로 확인할 수 있다.(부모이냐 아니냐를 확인)
// 기본 모습
class A {
  constructor(){}
}
class B extends A{ // extends 키워드를 통해 A class를 상속받아 사용하겠다
  constructor(){
    super() // A class의 constructor를 super함수로 가져옴 // A class의 constructor에서 매개변수가 있을 경우 super(매개변수) 로 사용
  }
}

// 운송수단 class
class Vehicle {
  constructor(acceleration = 1){
    this.speed = 0
    this.acceleration = acceleration // 가속도
  }
  accelerate(){
    this.speed += this.acceleration // speed에 acceleration값만큼 할당
  }
  decelerate(){
    if(this.speed <= 0){
      console.log('정지');
      return
    }
    this.speed -= this.acceleration
  }
}

class Bicycle extends Vehicle { //extends키워드를 통해 Vehicle 클래스를 확장해서 사용하겠다
  constructor(price = 100, acceleration){
    super(acceleration) // extends를 통해 다른 class를 확장했으면 super(인자)함수를 꼭 사용해야한다. super()함수는 확장한 class의 constructor이다.
    this.price = price
    this.wheel = 2
  }
}

// instance = 생성자함수
const bicycle = new Bicycle(300)
console.log(bicycle);//{acceleration:1, price:300, speed:0, wheel:2}
bicycle.accelerate()
console.log(bicycle);//{acceleration:1, price:300, speed:1, wheel:2}
console.log(bicycle instanceof Bicycle); //true
console.log(bicycle instanceof Vehicle); //true <- Bicycle은 Vehicle에서 상속되서 만들어진 클래스이기 때문에 


class Car extends Bicycle {
  constructor(license, price, acceleration){
    super(price, acceleration)
    this.license = license
    this.wheel = 4
  }
  accelerate(){ // Vehicle에서 정의한 함수 재정의 <- 오버라이딩(Overriding)
    if(!this.license){ 
      console.error('무면허');
      return
    }
    this.speed += this.acceleration
    console.log('가속', this.speed);
  }
}

const carA = new Car(true, 7000, 10) // {acceleration:10, price:7000, speed:0, wheel:4, license:true}
const carB = new Car(false, 4000, 6) // {acceleration:6, price:4000, speed:0, wheel:4, license:false}
carA.accelerate() // 가속, 10
carA.accelerate() // 가속, 20
console.log(carA); //  {acceleration:10, price:7000, speed:20, wheel:4, license:true}
carB.accelerate() // 무면허
console.log(carA instanceof Car); // true
console.log(carA instanceof Vehicle); // true


class Boat extends Vehicle {
  constructor(price, acceleration){
    super(acceleration)
    this.price = price
    this.motor = 1
  }
}

const boatA = new Boat(10000,5)// {acceleration:5,speed:0,price:10000,motor:1}
console.log(boatA instanceof Boat); // true
console.log(boatA instanceof Vehicle); // true
console.log(boatA instanceof Bicycle); // false


// 6. instanceof와 constructor
// instanceof는 상속받은 부모클래스까지 확인해 boolean값으로 확인
// constructor로 비교하면 어디서 만들어진지 확인가능하다.

// A>B>C 상속
class A {
  constructor(){}
}

class B extends A{
  constructor(){
    super()
  }
}

class C extends B{
  constructor(){
    super()
  }
}

const a = new A()
const b = new B()
const c = new C()
a instanceof A // true
a instanceof B // false
a instanceof C // false

b instanceof A // true
b instanceof B // true
b instanceof C // false

c instanceof A // true
c instanceof B // true
c instanceof C // true

c.constructor === A // false <- c의 constructor === A의 constructor 비교
c.constructor === B // false
c.constructor === C // true

