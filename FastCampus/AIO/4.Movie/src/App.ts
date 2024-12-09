import { Component } from "./core/core";
import Header from "./components/Header.js";
import Footer from './components/Footer.js'

export default class App extends Component{
  constructor(){
    super()
  } 
  render(){ // this = Component > constructor
    const header = new Header().el
    const footer = new Footer().el
    const routerView = document.createElement('router-view');
    this.el.append(header,routerView,footer)
  }
}
