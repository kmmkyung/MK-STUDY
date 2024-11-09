import { Component } from "../core/core";

export default class Search extends Component {
  render(){
    this.el.classList.add('search')
    this.el.innerHTML = /* html */ `
      <input type='text' placeholder='Enter the movie title to search!'/>
      <button class='btn btn-primary'>Search!</button>
    `

    const inputEl = this.el.querySelector('input')
    const btnEl = this.el.querySelector('button')
    
    inputEl.addEventListener('input',function(){

    })
    inputEl.addEventListener('keydown',function(event){
      if(event.key === 'Enter'){

      }
    })
    btnEl.addEventListener('click',function(){
      
    })
  }
}