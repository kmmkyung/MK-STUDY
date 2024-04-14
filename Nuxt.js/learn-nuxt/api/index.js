import axios from "axios";

const instance = axios.create({
  baseURL:'http://localhost:3000'
})
function fetchProductById(id){
  return instance.get(`/product/${id}`)
}

export {fetchProductById}