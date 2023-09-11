const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm =document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

//INITIAL VARIABLES NEEDED

let currentTab = userTab;
const API_KEY = "674070e9dfc035761b7ffa95849f4ab5";
currentTab.classList.add("current-tab");

//ek kaam pending hai

function switchTab(clickedTab) {
    if(clickedTab!=currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab=clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) {
            userInfoContainer.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            //previously on search tab now make visible weather tab
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click",()=>{
    //pass clicked tab as input parameter
    switchTab(userTab);
});

searchTab.addEventListener("click",()=>{
    //pass clicked tab as input parameter
    switchTab(searchTab);
});

//checj if coordinates are already present session storage

function getfromSessionStorage() {
    const localCoordinates =sessionStorage.getItem("user-coordinates");
    if(!localCoordinates) {
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.para(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates) {
    const{lat,lon} = coordinates;
    //make grantcontainer invisible

    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API CALL
    try {
        const response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        //hw
        loadingScreen.classList.remove("active");
    }
}

function renderWeatherInfo(weatherInfo) {
    //firstly we have to fetch the element

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon =document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector(["data-temp"]);
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    //fetch values from weatherInfo object and put  it in UI elements
}






























       
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


