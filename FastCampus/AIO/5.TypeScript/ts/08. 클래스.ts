// 클래스(Class)

// 접근 제어자(Access Modifiers)
// public - 어디에서나 자유롭게 접근 가능, 클래스 바디에서만 생략 가능
// protected - 나와 파생된 후손 클래스 내에서 접근 가능 / 생성자 함수를 호출해 만들때는 사용불가
// private - 내 클래스에서만 접근 가능

// 타입스크립트에서는 this로 접근할 수 있는 각각의 속성들은 constructor()함수가 만들어지기 전 Class의 바디 부분에서 타입이 지정되어야 하며 접근 제어자를 붙여야 한다.(함수도 사용가능)
// Class의 바디 - {} 안
class UserA {
  public first:string
  public last:string
  constructor(nameFirst:string, last:string, public age:number){ // age는 바디가 아닌 매개변수에서 선언하므로 public 생략 불가
    this.first = nameFirst
    this.last = last
    // this.age = age // 매개변수에서 public 선언으로 인해 age라는 매개변수는 하나의 매개변수이며 this키워드로 접근할 수 있는 속성이 되어 할당할 필요 없어짐
  }
  public getAge(){
    return `${this.first} ${this.last} is ${this.age}`
  }
}

class UserB extends UserA {
  getAge(){
    return `${this.first} ${this.last} is ${this.age}`
  }
}
class UserC extends UserB{
  getAge(){
    return `${this.first} ${this.last} is ${this.age}`
  }
}

const userMK = new UserA('mk','kim',30)
console.log(userMK.first) // mk
console.log(userMK.last) // kim
console.log(userMK.age) // 30