import { Component } from "../core/core";
import messageStore from "../store/message.js"

export default class Message extends Component{
  constructor(){
    super()
    messageStore.subscribe('message',()=>{
      this.render()
    })
  }
  render(){
    this.ele.innerHTML = `
      <h2>${messageStore.state.message}</h2>
    `
  }
}