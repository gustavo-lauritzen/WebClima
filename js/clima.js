function getClima() {

    $.ajax({

        method: 'get',

        crossDomain: true,

        url: 'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=5dbcf93728022eb77a883e8b0bd7b6e9&lang=pt_br',

        dataType: 'json',

        success: function (data) {

            $('#temperatura').html(Math.round(data.main.temp - 273.15) + '°C');

            let icone = 'img/' + data.weather[0].icon + '.png';
            $('#iconeCondicao').attr('src', icone);

            $('#condicao').html(data.weather[0].description);

            $('#velocidade').html(data.wind.speed + 'm/s');

            $('#umidade').html(data.main.humidity + '%');

            $('#NascerDoSol').html(data.sys.sunrise);

            $('#PorDoSol').html(data.sys.sunset);

        },

        error: function (argument) {

            alert('Falha ao obter dados!');

        }

    });

}

window.onload = function () {

    getClima();

};