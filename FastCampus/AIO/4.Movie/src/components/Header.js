import { Component } from "../core/core";

export default class Header extends Component {
  constructor(){
    super({
      tagName: 'header',
      state:{
        menus:[
          { name: 'Search', href:'#/'},
          { name: 'Movie', href:`#/movie?id=tt4520988`},
          { name: 'About', href:'#/about'}
        ]
      }
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a href='#/' class='logo'><span>OMDbAPI</span>.COM</a>
      <nav>
        <ul>
          ${this.state.menus.map(menu=>{
            return `<li><a href='${menu.href}'>${menu.name}</a></li>`
          }).join('')}
        </ul>
      </nav>
      <a href='#/about' class='user'>
        <img src="/static/logo.png" alt="Image">
      </a>
    `
  }
}