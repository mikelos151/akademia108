// https://danepubliczne.imgw.pl/api/data/synop

$(document).ready(function () {
  fetch('https://danepubliczne.imgw.pl/api/data/synop')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      data.forEach(item => {
        $('.weather-grid').append(`
          <div class='col-md-4 item'>
            <h2>${item.stacja}</h2>
            <p>Temperatura : ${item.temperatura}</p>
            <p>Ciśnienie : ${item.cisnienie}</p>
        </div>
        `);

      });
    })

})