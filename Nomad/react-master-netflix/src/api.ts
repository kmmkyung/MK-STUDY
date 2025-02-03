const API_KEY = "10923b261ba94d897ac6b81148314a3f";
const BASE_PATH = "https://api.themoviedb.org/3";

export function getMovies(){
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(response => response.json())
}

export function getTopMovies(){
  return fetch(`${BASE_PATH}/movie/top_rated?api_key=${API_KEY}`).then(response => response.json())
}

export function getUpcoming(){
  return fetch(`${BASE_PATH}/movie/upcoming?api_key=${API_KEY}`).then(response => response.json())
}

export function searchMovieTv(keyword:string){
  return fetch(`${BASE_PATH}/search/multi?api_key=${API_KEY}&include_adult=false&query=${keyword}`).then(response => response.json())
}