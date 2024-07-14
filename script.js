const apiKey="0ac1fa177418d4a7f734d23b4e4dc54b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".Weather_icon")


async function checkWeather(city){
    const response =await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none"
    }else{

        var data= await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="clouds.png";
        document.body.style.backgroundImage = "url('clouds_bg.jpeg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        
        
        
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png";
        document.body.style.backgroundImage = "url('clear_bg.jpeg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";

       
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.png";
        document.body.style.backgroundImage = "url('rain_bg.jpeg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        
        
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.png";
        document.body.style.backgroundImage = "url('drizzle_bg.jpeg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="mist.png";
        document.body.style.backgroundImage = "url('mist_bg.jpeg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="snow.png";
        document.body.style.backgroundImage = "url('snow_bg.jpeg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    else if(data.weather[0].main=="Haze"){
        weatherIcon.src="rain.png";
        document.body.style.backgroundImage = "url('rain_bg.jpeg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
       
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

    }
    

    console.log(data)
}
  searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

  })


