import { Component } from "../core/core";
import movieStore, { searchMovies } from '../store/movie.js'

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
      movieStore.state.searchText = inputEl.value
    })
    inputEl.addEventListener('keydown',function(event){
      if(event.key === 'Enter' && movieStore.state.searchText.trim()){
        searchMovies(1)
      }
    })
    btnEl.addEventListener('click',function(){
      if(movieStore.state.searchText.trim()){
        searchMovies(1)
      }
    })
  }
}