// npm 으로 설치해서 cdn코드 없이 import로 사용하면 된다!
import _ from "lodash";
console.log(_.upperCase('hello-world'));

interface User{
  name: string
  age: number
}
const user:User = {
  name:'mk',
  age:28
}

console.log(user)