const apiKey = "8f0338dccb3214ea50ff319dffce73b0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weticon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl  + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    //update images accordind to weather
    if(data.weather[0].main == "Clouds"){
        weticon.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weticon.src = "./images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weticon.src = "./images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weticon.src = "./images/drizzle.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})