const userTab = document.querySelector("data-userWeather");
const searchTab = document.querySelector("data-searchWeather");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm =document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-Info-container");

//INITIAL VARIABLES NEEDED

let currentTab = userTab;
const API_KEY = "674070e9dfc035761b7ffa95849f4ab5";
currentTab.classList.add("current-tab");

//ek kaam pending hai

































       
//     async function fetchWeatherDetails() {
//     const API_KEY = "674070e9dfc035761b7ffa95849f4ab5";
  

//     function renderWeatherInfo(data) {
//          let newPara = document.createElement('p');  
//         newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
//         document.body.appendChild(newPara);
//     }
//     try {

//         let city = "goa";
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

//         if (!response.ok) {
//             throw new Error(`Weather data not available for ${city}`);
//         }

//         const data = await response.json();
//         console.log("weather data:-> ", data);

//         // let newPara = document.createElement('p');  
//         // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
//         // document.body.appendChild(newPara);
//          renderWeatherInfo(data);
//     } 
//     catch (error) {
//         console.error("Error fetching weather data:", error);
//     }
// }

// //  fetchWeatherDetails();


//  function getLocation() {
//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else {
//         console.log("NO GeoLoaction Support");
//     }
//  }

//  function showPosition(position) {
//     let lat = position.coords.latitude;
//     let longi = position.coords.longitude;

//     console.log(lat);
//     console.log(longi)
//  }


