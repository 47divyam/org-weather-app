const apikey="4513144e83aa54659a83d803f565f8e9";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");


async function checkweather(city){
    const response = await fetch( apiUrl + city + `&appid=${apikey}`);
    
    var data= await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";


    
}

searchBtn.addEventListener('click',()=>{
    checkweather(searchbox.value);
})
