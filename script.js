const apiKey="ac99b3d9ff887bfd41ac289b15094424";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric";

const search=document.querySelector(".search input");
const btn=document.querySelector(".search button");

 async function checkweather(city){
  const response=await fetch(apiUrl + `&q=${city}` +`&appid=${apiKey}`);
  var data=await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=data.main.temp+" °C"; 
  document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
  document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";


 }
 
 btn.addEventListener("click" , ()=>{
  checkweather(search.value);
 })