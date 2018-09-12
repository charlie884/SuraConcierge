(function (global) {
    var emergenciaViewModel,
        app = global.app = global.app || {};

    emergenciaViewModel = kendo.data.ObservableObject.extend({
        iniciar:function(){
            app.identificarPais();
            var emerColombia = {'Emergencia general':'*123'}
            var emerArgentina = {'BA Cal center': '147', 'Bomberos': '100', 'Policía':'101/911', 'Defensa civil':'103', 'SAME emergencias':'107', 'Linea Social':'108', 'Mujer':'144', 'Trata de personas':'145', 'Protección del trabajo':'0800-222-2224', 'Gobierno de la ciudad':'5091-7200'}
            var emerBrasil = {'Bomberos':'193', 'Defensa civil':'199', 'Policía civil':'197', 'Policía militar':'190', 'SAMU':'192', 'Policía rodoviaria':'198'}
            var nacion = localStorage.getItem("ubicacionCountry");
            if (nacion == 'Colombia') {
                $("#numEmergencia").val("col");
                $("#listNum").html(" ");
                $.each(emerColombia, function(ix,vl){
                      $( "#listNum" ).append('<tr><td><img style="width: 2.8em;height: 2.8em;" src="images/emer.png"></td>'+'<td>'+ix+'</td><td style="color:#ffb41c;">'+vl+'</td></tr>');  
                    })
            }else if (nacion == 'Argentina') {
                $("#numEmergencia").val("arg");
                $("#listNum").html(" ");
                    $.each(emerArgentina, function(ix,vl){
                      $( "#listNum" ).append('<tr><td><img style="width: 2.8em;height: 2.8em;" src="images/emer.png"></td>'+'<td>'+ix+'</td><td style="color:#ffb41c;">'+vl+'</td></tr>');  
                    })
            }else if (nacion == 'Brazil') {
                $("#numEmergencia").val("brz");
                $("#listNum").html(" ");
                    $.each(emerBrasil, function(ix,vl){
                      $( "#listNum" ).append('<tr><td><img style="width: 2.8em;height: 2.8em;" src="images/emer.png"></td>'+'<td>'+ix+'</td><td style="color:#ffb41c;">'+vl+'</td></tr>');  
                    })
            }else {
                $("#listNum").html(" ");
                $( "#listNum" ).append('<tr><td><img style="width: 2.8em;height: 2.8em;" src="images/emer.png"></td>'+'<td>'+emerColombia.nombre+'</td><td style="color:#ffb41c;">'+emerColombia.numero+'</td></tr>');                
            }            
            $("#numEmergencia").change(function(){
                var pais = $(this).val();
                
                if (pais == 'col') {
                    $("#listNum").html(" ");
                    $.each(emerColombia, function(ix,vl){
                        $( "#listNum" ).append('<tr><td><img style="width: 2.8em;height: 2.8em;" src="images/emer.png"></td>'+'<td>'+ix+'</td><td style="color:#ffb41c;">'+vl+'</td></tr>');
                    })
                }
                if (pais == 'arg') {
                    $("#listNum").html(" ");
                    $.each(emerArgentina, function(ix,vl){
                      $( "#listNum" ).append('<tr><td><img style="width: 2.8em;height: 2.8em;" src="images/emer.png"></td>'+'<td>'+ix+'</td><td style="color:#ffb41c;">'+vl+'</td></tr>');  
                    })
                }
                if (pais == 'brz') {
                    $("#listNum").html(" ");
                    $.each(emerBrasil, function(ix,vl){
                      $( "#listNum" ).append('<tr><td><img style="width: 2.8em;height: 2.8em;" src="images/emer.png"></td>'+'<td>'+ix+'</td><td style="color:#ffb41c;">'+vl+'</td></tr>');  
                    })
                } 
            })            
        }
    });
    app.emergenciaService = {
        viewModel: new emergenciaViewModel()
    };
})(window);