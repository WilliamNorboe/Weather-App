import './style.css';
import Background from './background.png'

let image = document.querySelector("#wimg");
let searchBtn = document.querySelector("#search");
let tempInfoDiv = document.querySelector(".tempInfo");
let tempType = document.querySelector("#temperature");

searchBtn.addEventListener("click", ()=>{
    loadImage();
    loadWeather();
});

async function loadImage(){
    let search = document.querySelector('#locationInput').value;
    if(search === ""){
        search = 'London';
    }
    let response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=rj5Y4vSo1SUlJFJwJ2fWse13jRvpyZfQ&s='+search, {mode: 'cors'});
    let imgData = await response.json();

    image.src = imgData.data.images.original.url;
}

async function loadWeather(){
    let search = document.querySelector('#locationInput').value;
    if(search === ""){
        search = 'London';
    }
    let response = await fetch('https://api.weatherapi.com/v1/current.json?key=7c5bf67a3b524d7084a183409233006&q='+search, {mode: 'cors'});
    let weatherData = await response.json();
    console.log(weatherData);
    if(weatherData.current == undefined){
        tempInfoDiv.textContent = "No matching location found.";
        return;
    }
    console.log(tempType.value);
    let currentTemp = weatherData.current.temp_f + "°F";
    if(tempType.value === "celcius"){
        currentTemp = weatherData.current.temp_c + "°C";
    }
    tempInfoDiv.textContent = currentTemp + " in " + weatherData.location.name + " Right Now";
    // image.src = imgData.data.images.original.url;
}

loadWeather();
loadImage();
