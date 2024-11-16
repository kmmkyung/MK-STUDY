import { Component } from "../core/core";
import aboutStore from '../store/about.js'
import svgLogo from  '../data/svg'

export default class About extends Component {
  constructor(){
    super()
  }
  render(){
    const { name, email, github } = aboutStore.state
    this.el.classList.add('container','about')
    this.el.innerHTML = /* html */ `
      <div class='photo logo-svg'></div>
      <p class='name'>${name}</p>
      <p>
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=${email}' target='_blank'>${email}</a>
      </p>
      <p>
        <a href='${github}' target='_blank'>GitHub</a>
      </p>
    `

    const logoSvg = this.el.querySelector('.logo-svg')
    logoSvg.innerHTML = svgLogo.logo_w;
  }
}