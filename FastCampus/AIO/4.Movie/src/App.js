import { Component } from "./core/core.js";

export default class App extends Component{
  constructor(){
    super()
  } 
  render(){ // this = Component > constructor
    const routerView = document.createElement('router-view');
    this.el.append(routerView)
  }
}
