const divImg = $('#img');
const sky = $('#sky');
const keyApi = '6099b95f4619a17948fa9904ca6bea01';
let url = `https://api.openweathermap.org/data/2.5/weather?q=Couvin&appid=${keyApi}&units=metric&lang=fr`;

$.get(url, function (response){

    $('#city').innerHTML = response.name.toString() + " " + response.sys.country.toString();
    $('#deg').innerHTML = Math.round(response.main.temp).toString() + "°C";
    $('#deg_mini').innerHTML = parseInt(Math.round(response.main.temp_min)).toString() + "°C" + " max";
    $('#deg_max').innerHTML = parseInt(Math.round(response.main.temp_max)).toString() + "°C" + " min";
    $('#sky').innerHTML = response.weather[0].description.toString();
    $('#humidity').innerHTML = " Humidité " +parseInt(response.main.humidity).toString() + "%";
    changeImg();
})

//function call with btn
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
    let inputCity = document.getElementById('inputCity').value;
    apiCall();
});

function apiCall() {

    let requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${keyApi}&units=metric&lang=fr`;
    let xhr = new XMLHttpRequest();

    xhr.open("GET", requestURL, true);
    xhr.responseType = "json";

    xhr.onload = function () {
        if (xhr.status !== 200) {
            return
        }
        let response = xhr.response;
        $('#city').innerHTML = response.name.toString() + " " + response.sys.country.toString();
        $('#deg').innerHTML = Math.round(response.main.temp).toString() + "°C";
        $('#deg_mini').innerHTML = parseInt(Math.round(response.main.temp_min)).toString() + "°C" + " max";
        $('#deg_max').innerHTML = parseInt(Math.round(response.main.temp_max)).toString() + "°C" + " min";
        $('#sky').innerHTML = response.weather[0].description.toString();
        $('#humidity').innerHTML = " Humidité " +parseInt(response.main.humidity).toString() + "%";
        changeImg();
    }
}

function changeImg(){

    if (sky.innerHTML === "couvert"){
        divImg.style.backgroundImage = 'url(/asset/pictures/nuage.jpg';
        divImg.style.backgroundSize = "cover";
    }
    if (sky.innerHTML === "partiellement nuageux"){
        divImg.style.backgroundImage = 'url(/asset/pictures/couvert.png';
        divImg.style.backgroundSize = "cover";
    }
    if (sky.innerHTML === "peu nuageux"){
        divImg.style.backgroundImage = 'url(/asset/pictures/nuageVent.jpg';
        divImg.style.backgroundSize = "cover";
    }
    if (sky.innerHTML === "légères chutes de neige"){
        divImg.style.backgroundImage = 'url(/asset/pictures/neige.jpg';
        divImg.style.backgroundSize = "cover";
    }
}
