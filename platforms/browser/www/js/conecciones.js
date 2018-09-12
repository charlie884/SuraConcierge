(function (global) {
    var coneccionesViewModel,
        app = global.app = global.app || {};

    coneccionesViewModel = kendo.data.ObservableObject.extend({
        iniciar:function(){
            app.identificarPais();
            var nacion = localStorage.getItem("ubicacionCountry");
            console.log(nacion);
            if (nacion == 'Colombia') {
                $("#coneccion").val("col");
                $("#imgEn1").attr("src","images/enchufe.jpg");
                $("#imgEn2").attr("src","images/enchufe2.jpg");
                $("#imgEn3").attr("src","images/enchufe3.jpg");
                $( "#textCon1" ).html('Enchufe tipo A con dos pines planos de entrada.');
                $( "#textCon2" ).html('Enchufe tipo B, con dos pines planos de entrada.');
                            	
            }else if (nacion == 'Argentina') {
                $("#coneccion").val("arg");
            	$("#imgEn1").attr("src","images/tomaArgpal2.png");
                $("#imgEn2").attr("src","images/dospArg.jpg");
                $("#imgEn3").attr("src","images/tresArg.jpg");
                $( "#textCon1" ).html('Enchufe Tipo C, es un enchufe de dos hilos que tiene dos clavijas redondas.');
                $( "#textCon2" ).html('Enchufe Tipo I tiene dos pasadores planos en forma de V.');
            }else if (nacion == 'Brazil') {
                $("#coneccion").val("brz");
            	$("#imgEn1").attr("src","images/tomaArgpal.png");
                $("#imgEn2").attr("src","images/dospArg.jpg");
                $("#imgEn3").attr("src","images/tresbrz.jpg");
                $( "#textCon1" ).html('Enchufe Tipo C, es un enchufe de dos hilos que tiene dos clavijas redondas.');
                $( "#textCon2" ).html('Enchufe tipo N, uno con 10 amperios y uno con 20 amperios.');
            }else {
                $("#imgEn1").attr("src","images/enchufe.jpg");
                $("#imgEn2").attr("src","images/enchufe2.jpg");
                $("#imgEn3").attr("src","images/enchufe3.jpg");
                $( "#textCon1" ).html('Enchufe tipo A con dos pines planos de entrada.');
                $( "#textCon2" ).html('Enchufe tipo B, con dos pines planos de entrada.');                
            }            
            $("#coneccion").change(function(){
                var coneccion = $(this).val();
                
                if (coneccion == 'col') {
                	$("#imgEn1").attr("src","images/enchufe.jpg");
                	$("#imgEn2").attr("src","images/enchufe2.jpg");
                	$("#imgEn3").attr("src","images/enchufe3.jpg");
                    $( "#textCon1" ).html('Enchufe tipo A con dos pines planos de entrada.');
                    $( "#textCon2" ).html('Enchufe tipo B, con dos pines planos de entrada.');
                }
                if (coneccion == 'arg') {
                	$("#imgEn1").attr("src","images/tomaArgpal2.png");
                	$("#imgEn2").attr("src","images/dospArg.jpg");
                	$("#imgEn3").attr("src","images/tresArg.jpg");
                    $( "#textCon1" ).html('Enchufe Tipo C, es un enchufe de dos hilos que tiene dos clavijas redondas.');
                    $( "#textCon2" ).html('Enchufe Tipo I tiene dos pasadores planos en forma de V.');
                }
                if (coneccion == 'brz') {
                	$("#imgEn1").attr("src","images/tomaArgpal.png");
                	$("#imgEn2").attr("src","images/dospArg.jpg");
                	$("#imgEn3").attr("src","images/tresbrz.jpg");
                    $( "#textCon1" ).html('Enchufe Tipo C, es un enchufe de dos hilos que tiene dos clavijas redondas.');
                    $( "#textCon2" ).html('Enchufe tipo N, uno con 10 amperios y uno con 20 amperios.');
                } 
            })
        }
    });
    app.coneccionesService = {
        viewModel: new coneccionesViewModel()
    };
})(window);