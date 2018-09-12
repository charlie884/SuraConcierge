(function (global) {
    var consulViewModel,
        app = global.app = global.app || {};

    consulViewModel = kendo.data.ObservableObject.extend({
        iniciar:function(){
            app.identificarPais();
            var nacionalidad = localStorage.getItem("usuarioNATION");
            var ubicacionPais = localStorage.getItem("ubicacionCountry");
            $('#consul').html('');
            if (ubicacionPais=='Colombia') {
            	$('#consul').append('<option value="BR">Brasil</option>');
            	$('#consul').append('<option value="ARG">Argentina</option>');
            }else if (ubicacionPais == 'Brazil') {
            	$('#consul').append('<option value="COL">Colombia</option>');
            	$('#consul').append('<option value="ARG">Argentina</option>');
            }else if (ubicacionPais=='Argentina') {
            	$('#consul').append('<option value="COL">Colombia</option>');
                $('#consul').append('<option value="BR">Brasil</option>');
            }
            if (ubicacionPais == 'Colombia') {
            	if (nacionalidad == 'BR') {
                    $("#consul").val("BR");
                    $('.ppal').attr('src','images/consul/consulbrCol.jpg');
            		$('#nameConsul').html('Consulado Honorario en MEDELLIN');
            		$('#dirrConsul').html('Carrera 67B # 48B-39, Medellin');
            		$('#telConsul').html('(+4) 5599211');
            		$('#mailConsul').html('consul.medellin@gmail.com');
            	}else if (nacionalidad == 'ARG') {
                    $("#consul").val("ARG");
                    $('.ppal').attr('src','images/consul/consulargCol.jpg');
            		$('#nameConsul').html('Marcelo Balbi Calvo.');
            		$('#dirrConsul').html('dirección');
            		$('#telConsul').html('+57 1 288 0900 ');
            		$('#mailConsul').html('ecolo@mrecic.gov.ar');
            	}else if (nacionalidad == 'COL') {
                    $("#consul").val("BR");
                    $('.ppal').attr('src','images/consul/consulbrCol.jpg');
            		$('#nameConsul').html('Consulado Honorario en MEDELLIN');
            		$('#dirrConsul').html('Carrera 67B # 48B-39, Medellin');
            		$('#telConsul').html('(+4) 5599211');
            		$('#mailConsul').html('consul.medellin@gmail.com');
            	}
            }else if (ubicacionPais == 'Brazil') {
            	if (nacionalidad == 'COL') {
                    $("#consul").val("COL");
                    $('.ppal').attr('src','images/consul/consulcolBr.jpg');
            		$('#nameConsul').html('Oliverio Torrres Serrano');
            		$('#dirrConsul').html('Rua Tenente Negrao, 140 Piso 7 cj. 92 Itaim Bibi CEP 04530-030');
            		$('#telConsul').html('55 11 3078-0262 / 55 11 3078-0322');
            		$('#mailConsul').html('csaopaulo@cancilleria.gov.co');
            	}else if (nacionalidad == 'ARG') {
                    $("#consul").val("ARG");
                    $('.ppal').attr('src','images/consul/conulargBr.JPG');
            		$('#nameConsul').html('Carlos Alfredo Magariños');
            		$('#dirrConsul').html('SES Avenida das Nações Quadra 803 lote 12 CEP 70.200-905, Brasilia DF');
            		$('#telConsul').html('(+55) 61 3212 76 00');
            		$('#mailConsul').html('WEBebras.cancilleria.gov.ar');
            	}else if (nacionalidad == 'BR') {
                    $("#consul").val("COL");
                    $('.ppal').attr('src','images/consul/consulcolArg.jpg');
            		$('#nameConsul').html('Juan Pablo Rodríguez Gómez');
            		$('#dirrConsul').html('Carlos Pellegrini 1135 PB, Ciudad de Buenos Aires');
            		$('#telConsul').html('3220-1367 y 3220-1368');
            		$('#mailConsul').html('cbuenosaires@cancilleria.gov.co');
            	}
            }else if (ubicacionPais == 'Argentina') {
            	if (nacionalidad == 'COL') {
                    $("#consul").val("COL");
                    $('.ppal').attr('src','images/consul/consulcolArg.jpg');
            		$('#nameConsul').html('Juan Pablo Rodríguez Gómez');
            		$('#dirrConsul').html('Carlos Pellegrini 1135 PB, Ciudad de Buenos Aires');
            		$('#telConsul').html('3220-1367 y 3220-1368');
            		$('#mailConsul').html('cbuenosaires@cancilleria.gov.co');
            	}else if (nacionalidad == 'BR') {
                    $("#consul").val("BR");
                    $('.ppal').attr('src','images/consul/consulbrArg.jpg');
            		$('#nameConsul').html('Oliverio Torrres Serrano');
            		$('#dirrConsul').html('Carlos Pellegrini 1363, C1011 CABA, Argentina');
            		$('#telConsul').html('+54 11 4515-6500');
            		$('#mailConsul').html('http://www.conbrasil.org.ar/');
            	}else if (nacionalidad == 'ARG') {
                    $("#consul").val("COL");
                    $('.ppal').attr('src','images/consul/consulcolArg.jpg');
            		$('#nameConsul').html('Juan Pablo Rodríguez Gómez');
            		$('#dirrConsul').html('Carlos Pellegrini 1135 PB, Ciudad de Buenos Aires');
            		$('#telConsul').html('3220-1367 y 3220-1368');
            		$('#mailConsul').html('cbuenosaires@cancilleria.gov.co');
            	}
            }
            //VALIDACION SELECT
            $('#consul').change(function(){
                var consulId = $(this).val();
                if (consulId == 'COL' && nacionalidad == 'BR') {
                	$('.ppal').attr('src','images/consul/consulbrCol.jpg');
            		$('#nameConsul').html('Consulado Honorario en MEDELLIN');
            		$('#dirrConsul').html('Carrera 67B # 48B-39, Medellin');
            		$('#telConsul').html('(+4) 5599211');
            		$('#mailConsul').html('consul.medellin@gmail.com');
                }else if (consulId == 'COL' && nacionalidad=='ARG') {
                	$('.ppal').attr('src','images/consul/consulargCol.jpg');
            		$('#nameConsul').html('Marcelo Balbi Calvo.');
            		$('#dirrConsul').html('dirección');
            		$('#telConsul').html('+57 1 288 0900 ');
            		$('#mailConsul').html('ecolo@mrecic.gov.ar');
                }else if (consulId == 'BR' && nacionalidad == 'COL') {
                	$('.ppal').attr('src','images/consul/consulcolBr.jpg');
            		$('#nameConsul').html('Oliverio Torrres Serrano');
            		$('#dirrConsul').html('Rua Tenente Negrao, 140 Piso 7 cj. 92 Itaim Bibi CEP 04530-030');
            		$('#telConsul').html('55 11 3078-0262 / 55 11 3078-0322');
            		$('#mailConsul').html('csaopaulo@cancilleria.gov.co');
                }else if (consulId=='BR' && nacionalidad=='ARG') {
                	$('.ppal').attr('src','images/consul/conulargBr.JPG');
            		$('#nameConsul').html('Carlos Alfredo Magariños');
            		$('#dirrConsul').html('SES Avenida das Nações Quadra 803 lote 12 CEP 70.200-905, Brasilia DF');
            		$('#telConsul').html('(+55) 61 3212 76 00');
            		$('#mailConsul').html('WEBebras.cancilleria.gov.ar');
                }else if (consulId=='ARG' && nacionalidad=='COL') {
                	$('.ppal').attr('src','images/consul/consulargCol.jpg');
            		$('#nameConsul').html('Marcelo Balbi Calvo.');
            		$('#dirrConsul').html('dirección');
            		$('#telConsul').html('+57 1 288 0900 ');
            		$('#mailConsul').html('ecolo@mrecic.gov.ar');
                }else if (consulId=='ARG' && nacionalidad == 'BR') {
                	$('.ppal').attr('src','images/consul/consulbrArg.jpg');
            		$('#nameConsul').html('Consul');
            		$('#dirrConsul').html('Carlos Pellegrini 1363, C1011 CABA, Argentina');
            		$('#telConsul').html('+54 11 4515-6500');
            		$('#mailConsul').html('http://www.conbrasil.org.ar/');
                }
            });
        }
    });
    app.consulService = {
        viewModel: new consulViewModel()
    };
})(window);