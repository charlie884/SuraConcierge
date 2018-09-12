(function (global) {
    var internaViajesViewModel,
        app = global.app = global.app || {};

    internaViajesViewModel = kendo.data.ObservableObject.extend({
        iniciar:function(){  
            app.identificarPais();
            var nacion = localStorage.getItem("usuarioNATION");
            if (nacion=='COL') {
            	$('.paisPerson').attr('src','images/co.png');
            }else if (nacion=='BR') {
            	$('.paisPerson').attr('src','images/br.png');
            }else if (nacion=='ARG') {
            	$('.paisPerson').attr('src','images/ar.png');
            }
            var nombre = localStorage.getItem("usuarioNAME");
            var apellido = localStorage.getItem("usuarioLASTNAME");
            $( ".cont-item h3" ).html(nombre+" "+apellido);
            $( "#poliza #poliName" ).html(nombre+" "+apellido);
        },
        viewInfoViaje: function(){
            var pane = $("#cont-infoViaje").data("kendoMobilePane");
            pane.navigate('#informacion');
            $("a").click(function(){
                $(".item1").addClass("active");
                $(".item2").removeClass("active");
            });            
        },
        viewPolizaViaje: function(){
            var pane = $("#cont-infoViaje").data("kendoMobilePane");
            pane.navigate('#poliza');
            $("a").click(function(){
                $(".item2").addClass("active");
                $(".item1").removeClass("active");
            });            
        }        
        
    });
    app.internaViajesService = {
        viewModel: new internaViajesViewModel()
    };
})(window);