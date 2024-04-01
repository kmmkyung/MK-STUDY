navigator.geolocation.getCurrentPosition(GeoOk,GeoError)

const API_KEY = "32f03ad021e95e44a53a6785daca8d4f";

function GeoOk(position){
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
  fetch(url).then((response) => response.json())
  .then((data) => {
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    weather.innerText = `${data.weather[0].main} | ${data.main.temp}`
    city.innerText = data.name;
  })
}

function GeoError(){
  alert(`Can't find you`)
}