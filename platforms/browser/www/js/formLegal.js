(function (global) {
    var formLegalViewModel,
        app = global.app = global.app || {};

    formLegalViewModel = kendo.data.ObservableObject.extend({
        iniciar:function(){ 
            app.identificarPais();
        },
        validarFormLegal: function(e){
            e.preventDefault();
            $('.campoRegistro').blur();
            var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            var datos = {};
            
            datos.name = $('#nameLegal').val();
    	    datos.email = $('#emailLegal').val();   		
    		datos.asistencia = $('#asistencia').val();    		
    		datos.mensaje = $('#mensaje').val();    		    		
            
            datos.name = $('#nameLegal').val();
            datos.email = $('#emailLegal').val();            
            datos.asistencia = $('#asistencia').val();           
            datos.mensaje = $('#mensaje').val();                       
            
               if( datos.name.length < 1 ){ 
                $("#nameLegal").css("box-shadow","0px 0px 5px red"); 
                app.mostrarMensaje('error','Ingrese el nombre'); 
            } else if(!expr.test(datos.email)) { 
                $("#nameLegal").css("box-shadow","none"); 
                $("#emailLegal").css("box-shadow","0px 0px 5px red"); 
                app.mostrarMensaje('error','Ingrese el correo correcto'); 
            } else if(datos.asistencia.length < 1) { 
                $("#nameLegal").css("box-shadow","none"); 
                $("#emailLegal").css("box-shadow","none"); 
                $("#asistencia").css("box-shadow","0px 0px 5px red");
                app.mostrarMensaje('error','Ingrese Nombres'); 
            } else if(datos.mensaje.length < 1) { 
                $("#nameLegal").css("box-shadow","none"); 
                $("#emailLegal").css("box-shadow","none"); 
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