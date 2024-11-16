import { createRouter } from "../core/core.js";
import Home from './Home.js'
import Movie from './Movie.js'
import About from './About.js'

export default createRouter([
  {path:'#/', component:Home},
  {path:'#/movie', component:Movie},
  {path:'#/about', component:About}
])