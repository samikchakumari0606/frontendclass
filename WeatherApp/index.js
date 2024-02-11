let apiKey="7a1c7408fd1f2c695b08c6bc1ca36608";
async function submit(){
    let query=document.getElementById("query").value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;
    let res=await fetch(url);
    let data=await res.json();
    appendData(data);
    console.log(data);
    
}

let box=document.getElementById("box");
function appendData(data){
    box.innerHTML=""
    let cityName=document.createElement("h1");
    cityName.innerText=`City Name - ${data.name}`
    let cityTemp=document.createElement("h1");
    cityTemp.innerText=`City Temp - ${data.main.temp}`
    let cityHumidity=document.createElement("h1");
    cityHumidity.innerText=`City Humedity - ${data.main.humidity}`;
    let cityPressure=document.createElement("h1");
    cityPressure.innerText=`City Pressure - ${data.main.pressure}`;
    box.append(cityName,cityTemp,cityHumidity,cityPressure);
}