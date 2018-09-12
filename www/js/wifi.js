(function (global) {
    var wifiViewModel,
        app = global.app = global.app || {};

    wifiViewModel = kendo.data.ObservableObject.extend({
        // Multiple markers location, latitude, and longitude
           markers : [
            ['Aeropuerto El Dorado', 4.702396, -74.147236],
            ['Aeropuerto Enrique Olaya Herrera', 6.218681, -75.586543],
            ['Aeropuerto Internacional José María Córdova', 6.170763, -75.42762],
            ['Aeropuerto Internacional El Edén', -75.766298],
            ['Aeroparque Jorge Newbery', -34.55803, -58.417009],
            ['Aeropuerto Internacional de Ezeiza', -34.815004, -58.534828],
            ['Sao Paulo International Airport', -23.434553, -46.478126]
        ],                        
        // Info window content
        infoWindowContent : [
            ['<div style="text-align:center;" class="info_content">' +
            '<img style="width: 2.5em;" src="images/wifimaps.png">'+
            '<h3>Aeropuerto El Dorado</h3>' +
            '<p><b>Red:</b> Vip_Movistar_Avianca <br> <b>Contraseña:</b> MOVISTARFIBRA <br> <b>Red:</b> latam <br> <b>Contraseña:</b> salonvip78</p>' + '</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<img style="width: 2.5em;" src="images/wifimaps.png">'+
            '<h3>Aeropuerto Enrique Olaya Herrera</h3>' +
            '<p><b>Red:</b> Avianca Lounge <br> <b>Contraseña:</b> MOVISTARVIDEO.</p>' +
            '</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<img style="width: 2.5em;" src="images/wifimaps.png">'+
            '<h3>Aeropuerto Internacional José María Córdova</h3>' +
            '<p><b>Red:</b> UNE-EPM <br> <b>Abierta.</p>' +
            '</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<img style="width: 2.5em;" src="images/wifimaps.png">'+
            '<h3>Aeropuerto Internacional El Edén</h3>' +
            '<p><b>Red:</b> MOVISTAR_AVIANCA <br> <b>Contraseña:</b> MOVISTARFIBRA.</p>' +
            '</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<img style="width: 2.5em;" src="images/wifimaps.png">'+
            '<h3>Aeroparque Jorge Newbery</h3>' +
            '<p><b>Red:</b> AA2000-Personal es Gratis.</p>' +
            '</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<img style="width: 2.5em;" src="images/wifimaps.png">'+
            '<h3>Ezeiza International Airport</h3>' +
            '<p><b>Red:</b> AA2000-Personal es Gratis. <br><b>Red:</b>ADMIRALS CLUB <br><b>Contraseña:</b>aa164567</p>' +
            '</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<img style="width: 2.5em;" src="images/wifimaps.png">'+
            '<h3>Sao Paulo International Airport</h3>' +
            '<p><b>Red:</b>American Airlines Lounge<br><b>Contraseña:</b>Houston2017</p>' +
            '</div>']
        ],        
        iniciar:function(){
            app.identificarPais();
            var map;
            //var bounds = new google.maps.LatLngBounds();
            var myLatlng = {lat: parseFloat(window.localStorage.getItem("ubicacionLatitude")), lng: parseFloat(window.localStorage.getItem('ubicacionLongitude'))};
           
            var mapOptions = {
                mapTypeId: 'roadmap',
                zoom: 9,
                center: myLatlng
            };
            var image = {
              url: 'images/aircraft.png',
              size: new google.maps.Size(71, 71),
              scaledSize: new google.maps.Size(25, 25)
            };   
            // Display a map on the web page
            map = new google.maps.Map(document.getElementById("map"), mapOptions);
            map.setTilt(50);       
            // Add multiple markers to map
            var infoWindow = new google.maps.InfoWindow(), marker, i;
            
            // Place each marker on the map  
            for( i = 0; i < app.wifiService.viewModel.markers.length; i++ ) {
                var position = new google.maps.LatLng(app.wifiService.viewModel.markers[i][1], app.wifiService.viewModel.markers[i][2]);
                //bounds.extend(position);
                marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    icon: image,
                    title: app.wifiService.viewModel.markers[i][0]
                });
                
                // Add info window to marker    
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infoWindow.setContent(app.wifiService.viewModel.infoWindowContent[i][0]);
                        infoWindow.open(map, marker);
                    }
                })(marker, i));

                // Center the map to fit all markers on the screen
                //map.fitBounds(bounds);
            }                 
        }
    });
    app.wifiService = {
        viewModel: new wifiViewModel()
    };
})(window);