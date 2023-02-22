const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    " https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
    })

    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("gurgaon");

const citynames = document.querySelectorAll(".othercity");
Array.from(citynames).forEach((city) => {
  let location = city.innerHTML;
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${location}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      let id0 = location + "feels_like";
      let id1 = location + "humidity";
      let id2 = location + "max_temp";
      let id3 = location + "min_temp";
      let id4 = location + "sunrise";
      let id5 = location + "sunset";
      let id6 = location + "temp";
      let id7 = location + "wind_degrees";
      let id8 = location + "wind_speed";
      const element0 = document.getElementById(id0);
      const element1 = document.getElementById(id1);
      const element2 = document.getElementById(id2);
      const element3 = document.getElementById(id3);
      const element4 = document.getElementById(id4);
      const element5 = document.getElementById(id5);
      const element6 = document.getElementById(id6);
      const element7 = document.getElementById(id7);
      const element8 = document.getElementById(id8);
      element0.innerHTML = response.feels_like;
      element1.innerHTML = response.humidity;
      element2.innerHTML = response.max_temp;
      element3.innerHTML = response.min_temp;
      element4.innerHTML = response.sunrise;
      element5.innerHTML = response.sunset;
      element6.innerHTML = response.temp;
      element7.innerHTML = response.wind_degrees;
      element8.innerHTML = response.wind_speed;
    })

    .catch((err) => console.error(err));
});
