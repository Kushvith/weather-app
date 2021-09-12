let weather = {

    "apikey": "f50d7319e2d3659887259012f0f01cd9",
    fetchWeather: function (city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+this.apikey
        ).then((res) => res.json())
        .then((data) => this.displayWeather(data));
    },
    search: function(){
        this.fetchWeather(document.querySelector('.search_bar').value);
    },
    displayWeather: function(data){
        const {name} = data
        const { description , main,icon} = data.weather[0]
        const {humidity , temp} = data.main
        const { country} = data.sys
        const {speed} = data.wind
        console.log(name,description,main,icon,humidity,temp,country,speed);
        document.querySelector('.temp').innerHTML = Math.round(temp - 273) +'°c';
        document.querySelector('.descrption').innerHTML = description;
        document.querySelector('.humdity').innerHTML ='Humidity '+ humidity +'%';
        document.querySelector('.wind').innerHTML = "Speed : " +speed + 'km/hr'; 
        document.querySelector('.weathe').innerHTML= " Weather In "+ name + " "+ country;
        document.querySelector('.icon').src = "http://openweathermap.org/img/wn/"+ icon+".png";
        document.querySelector('.weather').classList.remove('loading');
        document.body.style.backgroundImage = 'url("https://source.unsplash.com/1600x900/?'+ name+'")';
         
    }
}
document.querySelector('#search_button').addEventListener('click',function(){
    weather.search();
})
weather.fetchWeather('bengaluru')