(function (global) {
    var emergenciaOdontologicaViewModel,
        app = global.app = global.app || {};

    emergenciaOdontologicaViewModel = kendo.data.ObservableObject.extend({
        // Multiple markers location, latitude, and longitude
           markers : [
            ['Centro Odontológico Colmédica ', 4.669715 , -74.057316],
            ['Dentisalud Calle 88', 4.674045, -74.053087],
            ['Bocanova Grupo Dental', 4.675272, -74.047913],
            ['Clínica Odontológica de Antioquia',6.233746, -75.56857],
            ['Sanadent',6.270664, -75.577459],
            ['Dentisalud Las Vegas',6.187327, -75.581624],
            ['Odontologia Progresso',-23.51939, -46.440624],
            ['Dental Center Gutemberg',-23.629596, -46.644003],
            ['SUA Odontologia',-23.479283, -46.608061],
            ['Consultorio Odontologico Llavallol',-34.799078, -58.4268],
            ['Hospital de Odontología "José Dueñas"',-34.614606, -58.427613],
            ['Ateneo Argentino de Odontología',-34.595609, -58.406805],
        ],                        
        // Info window content
        infoWindowContent : [
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Centro Odontológico Colmédica </h3>' +
            '<p style="margin:0;">Dirección: Carrera 18 # 84 - 06, Piso 7 Torre Colmédica</p>' + 
            '<p style="margin:0;">Teléfono: 7464646</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Dentisalud Calle 88</h3>' +
            '<p style="margin:0;">Dirección: Cra. 15 #88 - 64, Bogotá</p>' + 
            '<p style="margin:0;">Teléfono: 7452857</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Hospital Santa Fe de Bogota</h3>' +
            '<p style="margin:0;">Dirección: Cl. 115, Bogotá</p>' + 
            '<p style="margin:0;">Teléfono: 6030303</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Clínica Odontológica de Antioquia</h3>' +
            '<p style="margin:0;">Dirección: Calle 33 N° 42b-06 torre sur oficina 1109</p>' + 
            '<p style="margin:0;">Teléfono: (4) 4446211</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Sanadent</h3>' +
            '<p style="margin:0;">Dirección: Local 2111, Cl. 71 #65-150, Medellín</p>' + 
            '<p style="margin:0;">Teléfono: (4) 4486126</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Dentisalud Las Vegas</h3>' +
            '<p style="margin:0;">Dirección: Carrera 48 No. 19 sur 29 Local 102, Envigado, Medellín</p>' + 
            '<p style="margin:0;">Teléfono: (4) 3025588</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Odontologia Progresso</h3>' +
            '<p style="margin:0;">Dirección: R. Cardon, 1145 - Vila Progresso, São Paulo</p>' + 
            '<p style="margin:0;">Teléfono: +55 11 2852-7486</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Dental Center Gutemberg</h3>' +
            '<p style="margin:0;">Dirección: R. Prof. Sousa Barros, 381 - Vila Guarani (Zona Sul)</p>' + 
            '<p style="margin:0;">Teléfono: +55 11 5589-0606</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>SUA Odontologia</h3>' +
            '<p style="margin:0;">Dirección: Av. Tucuruvi, 351 - Tucuruvi, São Paulo</p>' + 
            '<p style="margin:0;">Teléfono: +55 11 2203-2298</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Consultorio Odontologico Llavallol</h3>' +
            '<p style="margin:0;">Dirección: Antártida Argentina 1790, B1836APN Llavallol </p>' + 
            '<p style="margin:0;">Teléfono: +54 11 4298-2711</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Hospital de Odontología "José Dueñas"</h3>' +
            '<p style="margin:0;">Dirección: Muñiz, C1205 CABA, Argentina </p>' + 
            '<p style="margin:0;">Teléfono: +54 11 4983-0392</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Ateneo Argentino de Odontología</h3>' +
            '<p style="margin:0;">Dirección: Dr. Tomás Manuel de Anchorena 1176, C1425ELB CABA, Argentina </p>' + 
            '<p style="margin:0;">Teléfono: +54 11 4962-2727</p>'+'</div>']
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
              url: 'images/muela.png',
              size: new google.maps.Size(71, 71),
              scaledSize: new google.maps.Size(25, 25)
            };   
            // Display a map on the web page
            map = new google.maps.Map(document.getElementById("map3"), mapOptions);
            map.setTilt(50);       
            // Add multiple markers to map
            var infoWindow = new google.maps.InfoWindow(), marker, i;
            
            // Place each marker on the map  
            for( i = 0; i < app.emergenciaOdontologicaService.viewModel.markers.length; i++ ) {
                var position = new google.maps.LatLng(app.emergenciaOdontologicaService.viewModel.markers[i][1], app.emergenciaOdontologicaService.viewModel.markers[i][2]);
                //bounds.extend(position);
                marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    icon: image,
                    title: app.emergenciaOdontologicaService.viewModel.markers[i][0]
                });
                
                // Add info window to marker    
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infoWindow.setContent(app.emergenciaOdontologicaService.viewModel.infoWindowContent[i][0]);
                        infoWindow.open(map, marker);
                    }
                })(marker, i));

                // Center the map to fit all markers on the screen
                //map.fitBounds(bounds);
            }            
        }
    });
    app.emergenciaOdontologicaService = {
        viewModel: new emergenciaOdontologicaViewModel()
    };
})(window);