import { Component } from "./core/core.js";
import Header from "./components/Header.js";

export default class App extends Component{
  constructor(){
    super()
  } 
  render(){ // this = Component > constructor
    const header = new Header().el
    const routerView = document.createElement('router-view');
    this.el.append(header,routerView)
  }
}
