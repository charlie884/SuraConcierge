(function (global) {
    var transporteViewModel,
        app = global.app = global.app || {};

    transporteViewModel = kendo.data.ObservableObject.extend({
        iniciar:function(){
            app.identificarPais();
            var pais = localStorage.getItem("ubicacionCountry");
            if (pais == 'Colombia') {
                $("#TransportePais").val("col");
                $("#textBus").html("Tarjeta para acceder al servicio: $5.000 CO <br> Transmileno:$2.200 CO Más información <span onclick=\"app.abrirLink('http://www.transmilenio.gov.co')\">www.transmilenio.gov.co</span><br> Sitp:$2.000 Más informacion <span onclick=\"app.abrirLink('http://www.sitp.gov.co')\">www.sitp.gov.co</span>");
                $("#textTaxi").html("Se dispone de vehículos de Taxi Imperial (Tel +57 317 300 3000), de color amarillo y blanco, las 24 horas fuera de ambas terminales. Los mostradores se ubican en las salas de arribos y el recorrido hasta el centro de la ciudad toma 25-35 minutos.");            	
                $("#textUber").html("La plataforma está en funcionamiento y puede ser utilizada por sus usuarios, pero localmente no es reconocida por la ley Competente Colombiana.");            	
                $("#textRent").html("Rent Car");            	
            }else if (pais == 'Argentina') {
                $("#TransportePais").val("arg");
                $("#textBus").html("ARBUS: $75 AR <br> Más información <a onclick=\"app.abrirLink('http://www.arbus.com.ar/')\">http://www.arbus.com.ar/</a>");
                $("#textTaxi").html("Las paradas se sitúan fuera del área de arribos de la Terminal A y los operadores oficiales son Taxis Municipalidad de Ezeiza (Tel +54 11 5480 0066 / 9383) Taxis Municipalidad de la Ciudad de Buenos Aires (Tel +54 11 156 987 0183).Remises de las compañías World Car (Tel +54 11 5480 1215), Vip Cars (Tel +54 11 5480 4590 / 4594), Manuel Tienda León (Tel +54 11 4314 3636 / 4315 5115 / 810 888 5366)Transfer Express (Tel +54 11 5811 1986 / 800 444 4872)");            	
                $("#textUber").html("La plataforma está en funcionamiento y puede ser utilizada por sus usuarios, pero localmente no es reconocida por la ley Competente Argentina. le recomendamos se ponga en contacto con su conductor para tener claros los riesgos de esta condición.");            	
                $("#textRent").html("En el área de arribos de la Terminal A se dispone de oficinas de alquiler de coches de las compañías Alamo/National  todos los días de 07:00AM a 11:00PM (Tel +54 11 810 9992 5266 / 5480 5580/5581)Avis de 7 a 23.30 hs,  24 y 31 de Diciembre: 7 a 18hrs / 1 de Enero y 25 de Diciembre: Cerrado (Tel +54 11 4480 9387 / 4378 9640)Hertz  todos los dias de 7 a 23:30hs (Tel +54 11 4480 0054)Sixt de Lunes a Viernes de 07:00 - 21:00, sábados y domingos de 09:00 a 17:00Localiza (Tel +54 11 4897 4240 / 800 999 2999).");            	
            }else if (pais == 'Brazil') {
                $("#TransportePais").val("brz");
                $("#textBus").html("Metro: Tel +55 800 770 7722."+"<br><br>"+"Bus - Airport Bus Service EMTU: (Tel +55 800 770 2287 / 11 2445 2430) <br><br>Transurbano Guarulhos <br><br>Lirabus / VB Transportes: (Tel +55 19 3733 5000 / 11 2445 3506) <br><br>Litorânea: (Tel +55 800 285 3047 / 11 3775 3850) <br><br>Viação Cometa: (Tel +55 11 4004 9600) ");            	
                $("#textTaxi").html("Taxis - Guarucoop (Tel +55 11 2440 7070) cuenta con exclusividad para operar en el aeropuerto. Los coches cuentan con aire acondicionado y taxímetro y están disponibles las 24 horas desde el área de arribos de las terminales 1, 2 y 3. El recorrido hasta el centro de la ciudad toma entre 30 y 60 minutos, dependiendo del tráfico.");            	
                $("#textUber").html("La plataforma está en funcionamiento y puede ser utilizada por sus usuarios, localmente es reconocida por la ley Competente de Brasil, Los puntos de encuentro son en el Segundo piso del Aeropuerto.");            	
                $("#textRent").html("Rent Car");            	
            }else{
                $("#textBus").html("Tarjeta para acceder al servicio: $5.000 CO <br> Transmileno:$2.200 CO Más información <span onclick=\"app.abrirLink('http://www.transmilenio.gov.co')\">www.transmilenio.gov.co</span><br> Sitp:$2.000 Más informacion <span onclick=\"app.abrirLink('http://www.sitp.gov.co')\">www.sitp.gov.co</span>");
                $("#textTaxi").html("Se dispone de vehículos de Taxi Imperial (Tel +57 317 300 3000), de color amarillo y blanco, las 24 horas fuera de ambas terminales. Los mostradores se ubican en las salas de arribos y el recorrido hasta el centro de la ciudad toma 25-35 minutos.");            	
                $("#textUber").html("La plataforma está en funcionamiento y puede ser utilizada por sus usuarios, pero localmente no es reconocida por la ley Competente Colombiana.");            	
                $("#textRent").html("Rent Car");                  
            }
            $("#TransportePais").change(function(){
                var transporte = $(this).val();
                
                if (transporte == 'col') {
                    $("#textBus").html("Tarjeta para acceder al servicio: $5.000 CO <br> Transmileno:$2.200 CO Más información <span onclick=\"app.abrirLink('http://www.transmilenio.gov.co')\">www.transmilenio.gov.co</span><br> Sitp:$2.000 Más informacion <span onclick=\"app.abrirLink('http://www.sitp.gov.co')\">www.sitp.gov.co</span>");
                    $("#textTaxi").html("Se dispone de vehículos de Taxi Imperial (Tel +57 317 300 3000), de color amarillo y blanco, las 24 horas fuera de ambas terminales. Los mostradores se ubican en las salas de arribos y el recorrido hasta el centro de la ciudad toma 25-35 minutos.");            	
                    $("#textUber").html("La plataforma está en funcionamiento y puede ser utilizada por sus usuarios, pero localmente no es reconocida por la ley Competente Colombiana.");            	
                    $("#textRent").html("Rent Car");
                }
                if (transporte == 'arg') {
                    $("#textBus").html("ARBUS: $75 AR <br> Más información <a onclick=\"app.abrirLink('http://www.arbus.com.ar/')\">http://www.arbus.com.ar/</a>");            	
                    $("#textTaxi").html("Las paradas se sitúan fuera del área de arribos de la Terminal A y los operadores oficiales son Taxis Municipalidad de Ezeiza (Tel +54 11 5480 0066 / 9383) Taxis Municipalidad de la Ciudad de Buenos Aires (Tel +54 11 156 987 0183).Remises de las compañías World Car (Tel +54 11 5480 1215), Vip Cars (Tel +54 11 5480 4590 / 4594), Manuel Tienda León (Tel +54 11 4314 3636 / 4315 5115 / 810 888 5366)Transfer Express (Tel +54 11 5811 1986 / 800 444 4872)");            	
                    $("#textUber").html("La plataforma está en funcionamiento y puede ser utilizada por sus usuarios, pero localmente no es reconocida por la ley Competente Argentina. le recomendamos se ponga en contacto con su conductor para tener claros los riesgos de esta condición.");            	
                    $("#textRent").html("En el área de arribos de la Terminal A se dispone de oficinas de alquiler de coches de las compañías Alamo/National  todos los días de 07:00AM a 11:00PM (Tel +54 11 810 9992 5266 / 5480 5580/5581)Avis de 7 a 23.30 hs,  24 y 31 de Diciembre: 7 a 18hrs / 1 de Enero y 25 de Diciembre: Cerrado (Tel +54 11 4480 9387 / 4378 9640)Hertz  todos los dias de 7 a 23:30hs (Tel +54 11 4480 0054)Sixt de Lunes a Viernes de 07:00 - 21:00, sábados y domingos de 09:00 a 17:00Localiza (Tel +54 11 4897 4240 / 800 999 2999).");            	
                }
                if (transporte == 'brz') {
                    $("#textBus").html("Metro: Tel +55 800 770 7722."+"<br><br>"+"Bus - Airport Bus Service EMTU: (Tel +55 800 770 2287 / 11 2445 2430) <br><br>Transurbano Guarulhos <br><br>Lirabus / VB Transportes: (Tel +55 19 3733 5000 / 11 2445 3506) <br><br>Litorânea: (Tel +55 800 285 3047 / 11 3775 3850) <br><br>Viação Cometa: (Tel +55 11 4004 9600) ");            	
                    $("#textTaxi").html("Taxis - Guarucoop (Tel +55 11 2440 7070) cuenta con exclusividad para operar en el aeropuerto. Los coches cuentan con aire acondicionado y taxímetro y están disponibles las 24 horas desde el área de arribos de las terminales 1, 2 y 3. El recorrido hasta el centro de la ciudad toma entre 30 y 60 minutos, dependiendo del tráfico.");            	
                    $("#textUber").html("La plataforma está en funcionamiento y puede ser utilizada por sus usuarios, localmente es reconocida por la ley Competente de Brasil, Los puntos de encuentro son en el Segundo piso del Aeropuerto.");            	
                    $("#textRent").html("Rent Car"); 
                } 
            })            
            
        }
    });
    app.transporteService = {
        viewModel: new transporteViewModel()
    };
})(window);