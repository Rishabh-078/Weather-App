const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const searchBar = document.querySelector(".searchbar");
document.querySelector(".button-search").addEventListener('click',()=>{
    console.log('clicked');
    weatherReport(searchBar.value);
})
function weatherReport(entry){
    fetch(`${weatherApi.baseUrl}?q=${entry}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}
function showWeatherReport(weather){
    console.log(weather);
    const city1 = document.querySelector('.city');
    city1.innerText=`${weather.name},${weather.sys.country}`;
    const temp = document.querySelector('.temperature');
    temp.innerText=`${Math.round(weather.main.temp)} °C`;
    const desc = document.querySelector('.description');
    desc.innerText=`${weather.weather[0].main}`;
    const speed = document.querySelector('.windspeed');
    speed.innerText=`${weather.wind.speed} kmph`;
    const currDate= document.querySelector('.date');
    const todayDate = new Date();
    currDate.innerText = dateManage(todayDate);

    /*if(desc.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('images/clear.jpg')";
        
    } else if(desc.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('images/cloudy.jpg')";
        
    } else if(desc.textContent == 'Mist') {

        document.body.style.backgroundImage = "url('images/haze.jpg')";
        
    }     else if(desc.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('images/rain.jpg')";
        
    } else if(desc.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('images/snow.jpg')";
    
    } else if(desc.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('images/thunder.jpg')";
        
    } */
}
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}
