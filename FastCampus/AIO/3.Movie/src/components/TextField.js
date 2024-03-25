import { Component } from "../core/core";
import messageStore from "../store/message";

export default class TextField extends Component{
  render(){
    this.ele.innerHTML =`
      <input value="${messageStore.state.message}"/>
    `
    const inputEl = this.ele.querySelector('input')
    inputEl.addEventListener('input',function(){
      messageStore.state.message = inputEl.value
    })
  }
}