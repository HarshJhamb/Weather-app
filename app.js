

const apiKey = "886d38047d4ffb9cef5e0264fe749310";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
       // document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {


        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main.toLowerCase() == "clouds") {
            weatherIcon.src = "clouds.png";
        } else if (data.weather[0].main.toLowerCase() == "clear") {
            weatherIcon.src = "clear.png";
        } else if (data.weather[0].main.toLowerCase() == "drizzle") {
            weatherIcon.src = "drizzle.png";
        } else if (data.weather[0].main.toLowerCase() == "rain") {
            weatherIcon.src = "rain.png";
        } else if (data.weather[0].main.toLowerCase() == "mist") {
            weatherIcon.src = "mist.png";
        } else if (data.weather[0].main.toLowerCase() == "snow") {
            weatherIcon.src = "snow.png";
        } else if (data.weather[0].main.toLowerCase() == "humidity") {
            weatherIcon.src = "humidity.png";
        }

    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}




SearchBtn.addEventListener("click", () => {
    checkWeather(SearchBox.value);

})


checkWeather();
