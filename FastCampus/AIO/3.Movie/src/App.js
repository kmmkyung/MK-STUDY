import { Component } from "./core/core.js"
import TheHeader from "./components/TheHeader.js"

export default class App extends Component{
  constructor(){
    super({
    })
  }
  render(){
    const routerView = document.createElement('router-view')
    this.ele.append(new TheHeader().ele,routerView ) 
  }
}
