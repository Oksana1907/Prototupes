function Weather(city, dataCity) {
 this.city = city
 this.temp_c = dataCity.temp_c
 this.condition = dataCity.condition;
}

Weather.prototype.removeClouds = function () {
    return this.condition = 'sun';
}

const kyivWeather = new Weather('Kiev', {temp_c: 12, condition: 'clouds'});
const Lviv = new Weather('Lviv', {temp_c: 7, condition: 'rain'})


document.body.innerHTML = kyivWeather.temp_c; 
console.log(`Температура в ${kyivWeather.city} - ${kyivWeather.temp_c}`);

kyivWeather.removeClouds(); 
console.log(kyivWeather.condition);