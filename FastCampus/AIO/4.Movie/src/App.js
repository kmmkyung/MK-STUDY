import { Component } from "./core/core.js";

export default class App extends Component{
  constructor(){
    super(
      {state:''}
    )
  } 
  render(){ // this = Component > constructor
  }
}

var arr = ['Apple', 'Banana', 'Cherry']
console.log(arr.join()); // Apple,Banana,Cherry
console.log(arr.join('')); // Apple,Banana,Cherry
console.log(arr.join(', ')); // Apple, Banana, Cherry
console.log(arr.join('/')); // Apple/Banana/Cherry
console.log(arr); // ['Apple', 'Banana', 'Cherry']