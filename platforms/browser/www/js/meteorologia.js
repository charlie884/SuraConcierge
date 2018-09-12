(function (global) {
    var meteorologiaViewModel,
        app = global.app = global.app || {};

    meteorologiaViewModel = kendo.data.ObservableObject.extend({
        iniciar:function(){
            app.identificarPais();   
                                                  
            var lat = window.localStorage.getItem('ubicacionLatitude');                                                   
            var lon = window.localStorage.getItem('ubicacionLongitude');                                                  
            var ciudad = window.localStorage.getItem('ubicacionCity');
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?apikey=d99c1b32d9b1d6643e6f8f0a076d0db5&lang=es&lat="+lat+"&lon="+lon, function (data) {
                //console.log(data);
                var temperatura_actual = data.main.temp;
                temperatura_actual = Math.round((temperatura_actual-273.15));
                $('.temp_actual').text(temperatura_actual+'°');
                
                $('.img_clima_actual').attr('src','http://openweathermap.org/img/w/'+data.weather[0].icon+'.png');
                $('.ciudad_actual').text(ciudad);
                $('.clima_actual').text(data.weather[0].description);
            });
        },
        responsive:function(){
            var height = $('body').height(); 
            if (height > 647) {
            	$('#view-clima #clima').css('height','82%');
            	$('#view-clima .cont-icos1').css('margin-top','15%');
            }
        },
    });
    app.meteorologiaService = {
        viewModel: new meteorologiaViewModel()
    };
})(window);