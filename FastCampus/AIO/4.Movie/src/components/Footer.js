import { Component } from "../core/core";
import aboutStore from '../store/about.js'

export default class Footer extends Component {
  constructor(){
    super({
      tagName : 'footer'
    })
  }
  render(){
    const {github, repository} = aboutStore.state
    this.el.innerHTML = /* html */ `
      <div>
        <a href='${repository}'>GitHub Repository</a>
      </div>
      <div>
        <a href='${github}'>${new Date().getFullYear()}</a>
      </div>
    `
  }
}