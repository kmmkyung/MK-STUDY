import { Component } from "../core/core";

export default class About extends Component{
  render(){
    const {a,b,c} = history.state
    this.ele.innerHTML = `
    <h1>About</h1>
    <h2>${a}</h2>
    `
  }
}