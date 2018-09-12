(function (global) {
    var emergenciaMedicaViewModel,
        app = global.app = global.app || {};

    emergenciaMedicaViewModel = kendo.data.ObservableObject.extend({
        // Multiple markers location, latitude, and longitude
           markers : [
            ['Clinica De Marly', 4.635897, -74.066067],
            ['Clinica La Inmaculada', 4.652275, -74.056759],
            ['Hospital Santa Fe de Bogota', 4.699189, -74.054141],
            ['Centro De Emergencias Pediatricas', 6.262487, -75.595279],
            ['Hospital Pablo Tobón Uribe', 6.277016, -75.580264],
            ['Hospital Universitario San Vicente Fundacion', 6.263855, -75.565181],
            ['Salud Sura Industriales', 6.228984, -75.574326],
            ['Clínica Medellín', 6.251278, -75.563938],
            ['Hospital Adventista de São Paulo', -23.563951, -46.634165],
            ['Hospital Adventista de São Paulo', -23.56499, -46.740635],
            ['Hospital e Maternidade Vida', -23.629001, -46.685604],
            ['Hospital General de Niños Pedro de Elizalde', -34.628817, -58.377813],
            ['Hospital Aeronáutico Central', -34.65302, -58.411549],
            ['Hospital General de Agudos “Dr. Ignacio Pirovano”', -34.564761, -58.470945]
        ],                        
        // Info window content
        infoWindowContent : [
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Clinica De Marly</h3>' +
            '<p style="margin:0;">Dirección: Cra. 13 #48-63, Bogotá</p>' + 
            '<p style="margin:0;">Teléfono: 3436600</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Clinica La Inmaculada</h3>' +
            '<p style="margin:0;">Dirección: Cra. 7 #69-70, Bogotá</p>' + 
            '<p style="margin:0;">Teléfono: 5870366</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Hospital Santa Fe de Bogota</h3>' +
            '<p style="margin:0;">Dirección: Cl. 115, Bogotá</p>' + 
            '<p style="margin:0;">Teléfono: 6030303</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Centro De Emergencias Pediatricas</h3>' +
            '<p style="margin:0;">Dirección: Cl. 49b #78A-40, Medellín</p>' + 
            '<p style="margin:0;">Teléfono: 301 7109968</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Hospital Pablo Tobón Uribe</h3>' +
            '<p style="margin:0;">Dirección: Cl. 78b #69-240, Medellín</p>' + 
            '<p style="margin:0;">Teléfono: 4459000</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Hospital Universitario San Vicente Fundacion</h3>' +
            '<p style="margin:0;">Dirección: Cra. 50c #65115, Medellín</p>' + 
            '<p style="margin:0;">Teléfono: 4441333</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Salud Sura Industriales</h3>' +
            '<p style="margin:0;">Cra. 48 #50, Medellín</p>' + 
            '<p style="margin:0;">(4) 3506888</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Clínica Medellín</h3>' +
            '<p style="margin:0;">Cl. 53 #4638, Medellín</p>' + 
            '<p style="margin:0;">(4) 4020990</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Hospital Adventista de São Paulo</h3>' +
            '<p style="margin:0;">Dirección: R. Rocha Pombo, 54 - Aclimação, São Paulo</p>' + 
            '<p style="margin:0;">Teléfono: +55 11 2838-7000</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Hospital Universitário – HU Universidade de São Paulo</h3>' +
            '<p style="margin:0;">Dirección: Av. Prof. Lineu Prestes, 2565 - Butantã, São Paulo</p>' + 
            '<p style="margin:0;">Teléfono: +55 11 3091-9200</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            "<h3>Hospital e Maternidade Vida's</h3>" +
            '<p style="margin:0;">Dirección: Av. Nossa Sra. de Sabará, 2375 - Campo Grande, São Paulo</p>' + 
            '<p style="margin:0;">Teléfono: +55 11 3321-9450</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Hospital General de Niños Pedro de Elizalde</h3>' +
            '<p style="margin:0;">Dirección: Montes de Oca 40, CABA, Argentina</p>' + 
            '<p style="margin:0;">Teléfono: +54 11 4363-2100</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Hospital Aeronáutico Central</h3>' +
            '<p style="margin:0;">Dirección: Ventura de la Vega 3680, C1437 CABA, Argentina</p>' + 
            '<p style="margin:0;">Teléfono: +54 11 5168-7100</p>'+'</div>'],
            ['<div style="text-align:center;" class="info_content">' +
            '<h3>Hospital General de Agudos “Dr. Ignacio Pirovano”</h3>' +
            '<p style="margin:0;">Dirección: Av Monroe 3555, 1428 CABA, Argentina</p>' + 
            '<p style="margin:0;">Teléfono: +54 11 4546-4300</p>'+'</div>']
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
              url: 'images/cruz.png',
              size: new google.maps.Size(71, 71),
              scaledSize: new google.maps.Size(25, 25)
            };   
            // Display a map on the web page
            map = new google.maps.Map(document.getElementById("map2"), mapOptions);
            map.setTilt(50);       
            // Add multiple markers to map
            var infoWindow = new google.maps.InfoWindow(), marker, i;
            
            // Place each marker on the map  
            for( i = 0; i < app.emergenciaMedicaService.viewModel.markers.length; i++ ) {
                var position = new google.maps.LatLng(app.emergenciaMedicaService.viewModel.markers[i][1], app.emergenciaMedicaService.viewModel.markers[i][2]);
                //bounds.extend(position);
                marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    icon: image,
                    title: app.emergenciaMedicaService.viewModel.markers[i][0]
                });
                
                // Add info window to marker    
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infoWindow.setContent(app.emergenciaMedicaService.viewModel.infoWindowContent[i][0]);
                        infoWindow.open(map, marker);
                    }
                })(marker, i));

                // Center the map to fit all markers on the screen
                //map.fitBounds(bounds);
            }                 
        }
    });
    app.emergenciaMedicaService = {
        viewModel: new emergenciaMedicaViewModel()
    };
})(window);