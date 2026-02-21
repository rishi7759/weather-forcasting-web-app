
const apikey = "YOUR_API_KEY";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon"); 

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"; 
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json(); 

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

       
        if (data.weather[0].main.toLowerCase() === "clouds") {
            weatherIcon.src = "cloud.jpg";
        } else if (data.weather[0].main.toLowerCase() === "clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main.toLowerCase() === "rain") {
            weatherIcon.src = "rainyy.jpg";
        } else if (data.weather[0].main.toLowerCase() === "drizzle") {
            weatherIcon.src = "drizzle.jpg";
        } else if (data.weather[0].main.toLowerCase() === "mist") {
            weatherIcon.src = "mist.jpg";
        } else {
            weatherIcon.src = "images/default.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value); 
});




