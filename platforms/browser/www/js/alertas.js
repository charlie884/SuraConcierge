(function (global) {
    var alertasViewModel,
        app = global.app = global.app || {};

    alertasViewModel = kendo.data.ObservableObject.extend({
        eliminarAlerta:function(){
            if (window.navigator.simulator !== true){
                
                // cancel all scheduled notifications
                cordova.plugins.notification.local.cancelAll(
                  function() {
                    console.log('ok, all canceled');
                  }
                );
            }
        },
        iniciar:function(){ 
            app.identificarPais();
            var ubicacion = localStorage.getItem('ubicacionCountry');
            if (ubicacion=='Colombia') {
            	$('#alerta1').css('display','none');
            	$('#alerta2').css('display','none');
            	$('#alerta3').css('display','block');
            }else if (ubicacion=='Brazil') {
            	$('#alerta1').css('display','block');
            	$('#alerta2').css('display','none');
            	$('#alerta3').css('display','none');
            }else if (ubicacion=='Argentina') {
            	$('#alerta1').css('display','none');
            	$('#alerta2').css('display','block');
            	$('#alerta3').css('display','none');
            }
            if (window.navigator.simulator !== true){
                
                cordova.plugins.notification.local.schedule({
                  id         : 1,
                  title      : 'Alerta de sismo',
                  text       : 'Notifica a tu contacto de emergencia',
                  every      : 'minute',
                  autoClear  : false,
                  at         : new Date(new Date().getTime() + 10*1000)
                });
                
                cordova.plugins.notification.local.on("click", function (id, state, json) {
                    var pane = $("#cont-alertas").data("kendoMobilePane");
                    pane.navigate('#proactiva');
                    $("a").click(function(){
                        $(".item2").addClass("active");
                        $(".item1").removeClass("active");
                    });            
                });
            }
        },
        viewInformativas: function(){
            var pane = $("#cont-alertas").data("kendoMobilePane");
            pane.navigate('#informativa');
            $("a").click(function(){
                $(".item1").addClass("active");
                $(".item2").removeClass("active");
            });            
        },
        viewProactivas: function(){
            var pane = $("#cont-alertas").data("kendoMobilePane");
            pane.navigate('#proactiva');
            $("a").click(function(){
                $(".item2").addClass("active");
                $(".item1").removeClass("active");
            });            
        }
        
    });
    app.alertasService = {
        viewModel: new alertasViewModel()
    };
})(window);