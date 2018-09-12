(function (global) {
    var formLegalViewModel,
        app = global.app = global.app || {};

    formLegalViewModel = kendo.data.ObservableObject.extend({
        iniciar:function(){ 
            $.getJSON("http://freegeoip.net/json/", function (data) {  
                window.localStorage.setItem('ubicacionCity',data.city);
                window.localStorage.setItem('ubicacionCountry',data.country_name);                                                   
                window.localStorage.setItem('ubicacionIp',data.ip);                                                   
                window.localStorage.setItem('ubicacionLatitude',data.latitude);                                                   
                window.localStorage.setItem('ubicacionLongitude',data.longitude);                                                   
            });
        },
        validarFormLegal: function(e){
            e.preventDefault();
            $('.campoRegistro').blur();
            var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            var datos = {};
            
            datos.name = $('#name').val();
    	    datos.email = $('#email').val();   		
    		datos.asistencia = $('#asistencia').val();    		
    		datos.mensaje = $('#mensaje').val();    		    		
            
            datos.name = $('#name').val();
            datos.email = $('#email').val();            
            datos.asistencia = $('#asistencia').val();           
            datos.mensaje = $('#mensaje').val();                       
            
               if( datos.name.length < 1 ){ 
                $("#name").css("box-shadow","0px 0px 5px red"); 
                app.mostrarMensaje('error','Ingrese el nombre'); 
            } else if(!expr.test(datos.email)) { 
                $("#name").css("box-shadow","none"); 
                $("#email").css("box-shadow","0px 0px 5px red"); 
                app.mostrarMensaje('error','Ingrese el correo correcto'); 
            } else if(datos.asistencia.length < 1) { 
                $("#name").css("box-shadow","none"); 
                $("#email").css("box-shadow","none"); 
                $("#asistencia").css("box-shadow","0px 0px 5px red");
                app.mostrarMensaje('error','Ingrese Nombres'); 
            } else if(datos.mensaje.length < 1) { 
                $("#name").css("box-shadow","none"); 
                $("#email").css("box-shadow","none"); 
                $("#asistencia").css("box-shadow","none");
                $("#mensaje").css("box-shadow","0px 0px 5px red");
                app.mostrarMensaje('error','Ingrese Mensaje'); 
            }
        },        
    });
    app.formLegalService = {
        viewModel: new formLegalViewModel()
    };
})(window);