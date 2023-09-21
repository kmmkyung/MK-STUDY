// constructor






// prototype
// 자바스크립트 객체가 갖는 숨겨져 있는 프로퍼티 값

// const fruits = ['Apple','Banana','Cherry'] // 리터럴방식
const fruits = new Array('Apple','Banana','Cherry')
// fruits는 셍성자힘수에서 반환된 인스턴스!(instance)

Array.prototype.kmmk= function(){ // kmmk라는 메소드를 만듬
    console.log(this);
}

fruits.kmmk() // ['Apple','Banana','Cherry']

// ---

function User(first,last){
  this.firstName = first
  this.lastName = last
}

User.prototype.getFullName=function(){ // getFullNamed이라는 메소드를 만듬
  return `${this.firstName} ${this.lastName}`
}

const kmmk = new User('mk','K')
console.log(kmmk.getFullName()); // mk K

