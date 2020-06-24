$(document).ready(function(){

    const weatherGrid = $('.weather-grid');

    $.getJSON('https://danepubliczne.imgw.pl/api/data/synop', function(waether) {
        console.log(waether);

        waether.forEach(element => {
            let newWeatherElement = $(`<div class="col-sm-4 col-lg-3 single-weather"></div>`);
            newWeatherElement.append(`<h2> ${element.stacja}</h2>`);
            newWeatherElement.append(`<p>Temperatura:  ${element.temperatura} st. C.</p>`);
            newWeatherElement.append(`<p>Ciśnienie:  ${element.cisnienie || 'brak danych'} hPa</p>`);
            weatherGrid.append(newWeatherElement);
        });
    });
});