import { Component } from "../core/core";
import TextField from "../components/TextField";
import Message from "../components/Message";

export default class Home extends Component{
  render(){
    this.ele.innerHTML = `
    <h1>home</h1>
    `
    this.ele.append(
      new TextField().ele,
      new Message().ele
    )
  }
}