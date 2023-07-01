import './style.css';

let image = document.querySelector("#wimg");
let searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", ()=>{loadImage()});
async function loadImage(){
    let search = document.querySelector('#locationInput').value;
    if(search == ""){
        search = 'London';
    }
    let response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=rj5Y4vSo1SUlJFJwJ2fWse13jRvpyZfQ&s='+search, {mode: 'cors'});
    let imgData = await response.json();

    image.src = imgData.data.images.original.url;
}

loadImage();
