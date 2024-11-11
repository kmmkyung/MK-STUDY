import { Store } from "../core/core.js";

const store = new Store({
  searchText: '',
  page: 1,
  movies: [],
  pageMax: 1
})
export default store

export const searchMovies = async function(page){
  store.state.page = page
  if(page === 1){
    store.state.movies = [];
  }
  const res = await fetch(`https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`)
  const { Search, totalResults } = await res.json()
  store.state.movies = [ ...store.state.movies, ...Search]
  store.state.pageMax = Math.ceil(Number(totalResults) / 10)
}
