var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp'); 
var wind = document.querySelector('#wind');
var apik = "ce0b3a1fd443e4dab80847ca88fde57a";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descripVal = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windSpeed = data['wind']['speed']; 

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${convertion(temperature)} C</span>`;
            description.innerHTML = `Sky Conditions: <span>${descripVal}</span>`;
            wind.innerHTML = `Wind Speed: <span>${windSpeed} km/h</span>`;
        })
        .catch(error => alert('You entered the wrong city name'));
});
