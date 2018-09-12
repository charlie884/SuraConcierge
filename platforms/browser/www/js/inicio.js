(function (global) {
    var inicioViewModel,
        app = global.app = global.app || {};

    inicioViewModel = kendo.data.ObservableObject.extend({
        responsive:function(){
            var height = $('body').height(); 
            if (height > 647) {
            	$('#view-inicio #inicio-pane #view-login img').css('width','6em');
            	$('#view-inicio #inicio-pane #view-login .cont-t').css('padding','10%');
            }
        },
        viewLogin: function(){
            var pane = $("#inicio-pane").data("kendoMobilePane");
            pane.navigate('#view-login');
            $("a").click(function(){
                $(".item1").addClass("active");
                $(".item2").removeClass("active");
            });            
        },
        viewRegistro: function(){
            var pane = $("#inicio-pane").data("kendoMobilePane");
            pane.navigate('#view-registro');
            $("a").click(function(){
                $(".item2").addClass("active");
                $(".item1").removeClass("active");
            });            
        },                
        mostrar: function(){            
            $('#username').val('');
    	    $('#password').val('');
        },
        // Validación formulario login
        validar: function(e)
        {
            e.preventDefault();
            $('.campotxt').blur();
            //var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            var username = $('#cForm #username').val();
    	    var contrasena = $('#cForm #password').val();
            console.log(username);
            if (username == ''){
                $("#cForm #username").css("box-shadow","0px 0px 5px red"); 
               app.mostrarMensaje('error', 'Ingrese email');
            }
            else if (contrasena == '')
            { 
                $("#cForm #username").css("box-shadow","none"); 
                $("#cForm #password").css("box-shadow","0px 0px 5px red"); 
                app.mostrarMensaje('error', 'Ingrese password');
            }
            else{
                var usuarios = window.localStorage.getItem('usuarios');
                //console.log(usuarios);
                if(usuarios != null){
                    usuarios = usuarios.split('|');
                    var alerta = true;
                    $.each(usuarios,function(ix,vl){
                        //console.log(vl);
                        var usuario = JSON.parse(vl);
                        
                        if(usuario.usuarioIDNAL == username && usuario.usuarioPSW == contrasena){
                            alerta = false;
                            window.localStorage.setItem('usuarioIDNAL',usuario.usuarioIDNAL);
                            window.localStorage.setItem('usuarioNAME',usuario.usuarioNAME);
                            window.localStorage.setItem('usuarioLASTNAME',usuario.usuarioLASTNAME);
                            window.localStorage.setItem('usuarioEMAIL',usuario.usuarioEMAIL);
                            window.localStorage.setItem('usuarioDATE',usuario.usuarioDATE);
                            window.localStorage.setItem('usuarioNATION',usuario.usuarioNATION);
                            window.localStorage.setItem('usuarioPASS',usuario.usuarioPASS);
                            window.localStorage.setItem('usuarioDIRR',usuario.usuarioDIRR);
                            window.localStorage.setItem('usuarioPSW',usuario.usuarioPSW);
                            window.localStorage.setItem('usuarioCNAME',usuario.usuarioCNAME);
                            window.localStorage.setItem('usuarioEMAILC',usuario.usuarioEMAILC);
                            window.localStorage.setItem('usuarioCTEL',usuario.usuarioCTEL);
                            window.localStorage.setItem('usuarioFOTO',usuario.usuarioFOTO);
                            $('.fotoUsuario').attr('src',usuario.usuarioFOTO);
                            $.getJSON("http://freegeoip.net/json/", function (data) {
                                 console.log(data);    
                                window.localStorage.setItem('ubicacionCity',data.city);
                                window.localStorage.setItem('ubicacionCountry',data.country_name);                                                   
                                window.localStorage.setItem('ubicacionIp',data.ip);                                                   
                                window.localStorage.setItem('ubicacionLatitude',data.latitude);                                                   
                                window.localStorage.setItem('ubicacionLongitude',data.longitude);                                                   
                            });                                                
                            app.application.navigate('#view-transicion-login');
                            console.log(usuario);
                        } 
                    })
                    if(alerta==true){
                            app.mostrarMensaje('error', 'Usuario no se encuentra registrado');
                        }
                } else {
                    app.mostrarMensaje('error', 'Usuario no se encuentra registrado');
                }
                //app.navigation('#view-menu');
            }
        },
        validarTouchID: function(){
            window.plugins.touchid.verifyFingerprint(
              // The message shown in the fingerprint window
              'Por favor, escanea tú huella',

              // success callback, invoked when the users input was accepted
              function(msg) { 
                var usuarios = window.localStorage.getItem('usuarios');
                //console.log(usuarios);
                if(usuarios != null){
                    usuarios = usuarios.split('|');
                    var alerta = true;
                    $.each(usuarios,function(ix,vl){
                        //console.log(vl);
                        var usuario = JSON.parse(vl);
                            console.log(usuario.idNal);
                        
                        if(usuario.usuarioTouchID == "true"){
                            alerta = false;
                            window.localStorage.setItem('usuarioIDNAL',usuario.usuarioIDNAL);
                            window.localStorage.setItem('usuarioNAME',usuario.usuarioNAME);
                            window.localStorage.setItem('usuarioLASTNAME',usuario.usuarioLASTNAME);
                            window.localStorage.setItem('usuarioEMAIL',usuario.usuarioEMAIL);
                            window.localStorage.setItem('usuarioDATE',usuario.usuarioDATE);
                            window.localStorage.setItem('usuarioNATION',usuario.usuarioNATION);
                            window.localStorage.setItem('usuarioPASS',usuario.usuarioPASS);
                            window.localStorage.setItem('usuarioDIRR',usuario.usuarioDIRR);
                            window.localStorage.setItem('usuarioPSW',usuario.usuarioPSW);
                            window.localStorage.setItem('usuarioCNAME',usuario.usuarioCNAME);
                            window.localStorage.setItem('usuarioEMAILC',usuario.usuarioEMAILC);
                            window.localStorage.setItem('usuarioCTEL',usuario.usuarioCTEL);
                            window.localStorage.setItem('usuarioFOTO',usuario.usuarioFOTO);
                            $('.fotoUsuario').attr('src',usuario.usuarioFOTO);
                            $.getJSON("http://freegeoip.net/json/", function (data) {
                                 console.log(data);    
                                window.localStorage.setItem('ubicacionCity',data.city);
                                window.localStorage.setItem('ubicacionCountry',data.country_name);                                                   
                                window.localStorage.setItem('ubicacionIp',data.ip);                                                   
                                window.localStorage.setItem('ubicacionLatitude',data.latitude);                                                   
                                window.localStorage.setItem('ubicacionLongitude',data.longitude);                                                   
                            });                                               
                                app.application.navigate('#view-transicion-login');
                            
                        } 
                    })
                    if(alerta==true){
                            app.mostrarMensaje('error', 'Usuario no se encuentra registrado');
                        }
                } else {
                    app.mostrarMensaje('error', 'Usuario no se encuentra registrado');
                }
              },

              // error callback, invoked when there was no match,
              // essentially meaning the dialog was closed by pressing 'cancel'
              function(msg) {
                  alert('Autenticación fallida');
              }
            );  
        },
        //iniciarSesionNoAPP: function(usuario,password){
            
        //    app.application = new kendo.mobile.Application(document.body, {
        //        skin: 'flat',
        //        initial: '#view-menu'
        //    });
        //},
        validarRegistro: function(e){
            e.preventDefault();
            $('.campoRegistro').blur();
            var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            var datos = {};
            
            datos.usuarioNAME = $('#name').val();
    	    datos.usuarioLASTNAME = $('#lastname').val();
    	    datos.usuarioEMAIL = $('#email').val();
    	    datos.usuarioDATE = $('#date').val();
    		datos.usuarioIDNAL =  $('#idNal').val();
    		datos.usuarioNATION = $('#nation').val();
    		datos.usuarioPASS = $('#pass').val();
    		datos.usuarioDIRR = $('#dirr').val();
    		datos.usuarioPSW = $('#psw').val();    		
    		datos.usuarioCNAME = $('#cNames').val();    		
    		datos.usuarioEMAILC = $('#emailc').val();    		
    		datos.usuarioCTEL = $('#cTel').val();   
    		datos.usuarioFOTO = 'images/user.png';   		         
            
           if( datos.usuarioNAME.length < 1 ){ 
                $("#name").css("box-shadow","0px 0px 5px red"); 
                app.mostrarMensaje('error','Ingrese el nombre'); 
            } else if (datos.usuarioLASTNAME.length < 1) { 
                $("#name").css("box-shadow","none"); 
                $("#lastname").css("box-shadow","0px 0px 5px red"); 
                app.mostrarMensaje('error','Ingrese el apellido'); 
            }else if(!expr.test(datos.usuarioEMAIL)) { 
                $("#name").css("box-shadow","none"); 
                $("#lastname").css("box-shadow","none"); 
                $("#email").css("box-shadow","0px 0px 5px red");
                app.mostrarMensaje('error','Ingrese Email'); 
            } else if( datos.usuarioDATE.length < 1 ) { 
                $("#name").css("box-shadow","none"); 
                $("#lastname").css("box-shadow","none"); 
                $("#email").css("box-shadow","none"); 
                $("#date").css("box-shadow","0px 0px 5px red"); 
                app.mostrarMensaje('error','Ingrese fecha'); 
            } else if (datos.usuarioIDNAL.length < 1) { 
                $("#name").css("box-shadow","none"); 
                $("#lastname").css("box-shadow","none"); 
                $("#email").css("box-shadow","none"); 
                $("#date").css("box-shadow","none"); 
                $("#idNal").css("box-shadow","0px 0px 5px red"); 
                app.mostrarMensaje('error','Ingrese ID local'); 
            } else if (datos.usuarioNATION.length < 1) { 
                $("#name").css("box-shadow","none"); 
                $("#lastname").css("box-shadow","none"); 
                $("#date").css("box-shadow","none");
                $("#idNal").css("box-shadow","none");
                $("#nation").css("box-shadow","0px 0px 5px red");
                app.mostrarMensaje('error','Ingrese Nacionalidad');
            } else if (datos.usuarioPASS.length < 1) { 
                $("#name").css("box-shadow","none"); 
                $("#lastname").css("box-shadow","none"); 
                $("#email").css("box-shadow","none"); 
                $("#date").css("box-shadow","none");
                $("#idNal").css("box-shadow","none");
                $("#nation").css("box-shadow","none");
                $("#pass").css("box-shadow","0px 0px 5px red");
                app.mostrarMensaje('error','Ingrese Pasaporte'); 
            } else if (datos.usuarioDIRR.length < 1) { 
                $("#name").css("box-shadow","none"); 
                $("#lastname").css("box-shadow","none"); 
                $("#email").css("box-shadow","none"); 
                $("#date").css("box-shadow","none");
                $("#idNal").css("box-shadow","none");
                $("#nation").css("box-shadow","none");
                $("#pass").css("box-shadow","none");
                $("#dirr").css("box-shadow","0px 0px 5px red");
                app.mostrarMensaje('error','Ingrese Dirección'); 
            } else if(datos.usuarioPSW.length < 1) { 
                $("#name").css("box-shadow","none"); 
                $("#lastname").css("box-shadow","none"); 
                $("#email").css("box-shadow","none"); 
                $("#date").css("box-shadow","none");
                $("#idNal").css("box-shadow","none");
                $("#nation").css("box-shadow","none");
                $("#pass").css("box-shadow","none");
                $("#dirr").css("box-shadow","none");
                $("#psw").css("box-shadow","0px 0px 5px red");
                app.mostrarMensaje('error','Ingrese Contraseña'); 
            } else if(datos.usuarioCNAME.length < 1) { 
                $("#name").css("box-shadow","none"); 
                $("#lastname").css("box-shadow","none"); 
                $("#email").css("box-shadow","none"); 
                $("#date").css("box-shadow","none");
                $("#idNal").css("box-shadow","none");
                $("#nation").css("box-shadow","none");
                $("#pass").css("box-shadow","none");
                $("#dirr").css("box-shadow","none");
                $("#psw").css("box-shadow","none");
                $("#cNames").css("box-shadow","0px 0px 5px red");
                app.mostrarMensaje('error','Ingrese Nombres'); 
            } else if(!expr.test(datos.usuarioEMAILC)) { 
                $("#name").css("box-shadow","none"); 
                $("#lastname").css("box-shadow","none"); 
                $("#email").css("box-shadow","none"); 
                $("#date").css("box-shadow","none");
                $("#idNal").css("box-shadow","none");
                $("#nation").css("box-shadow","none");
                $("#pass").css("box-shadow","none");
                $("#dirr").css("box-shadow","none");
                $("#psw").css("box-shadow","none");
                $("#cNames").css("box-shadow","none");
                $("#emailc").css("box-shadow","0px 0px 5px red");
                app.mostrarMensaje('error','Ingrese Email'); 
            } else if(datos.usuarioCTEL.length < 1) { 
                $("#name").css("box-shadow","none"); 
                $("#lastname").css("box-shadow","none"); 
                $("#email").css("box-shadow","none"); 
                $("#date").css("box-shadow","none");
                $("#idNal").css("box-shadow","none");
                $("#nation").css("box-shadow","none");
                $("#pass").css("box-shadow","none");
                $("#dirr").css("box-shadow","none");
                $("#psw").css("box-shadow","none");
                $("#cNames").css("box-shadow","none");
                $("#emailc").css("box-shadow","none");
                $("#cTel").css("box-shadow","0px 0px 5px red");
                app.mostrarMensaje('error','Ingreses Teléfono'); 
            } else {
                
            if (window.navigator.simulator !== true){
                window.plugins.touchid.verifyFingerprint(
                  // The message shown in the fingerprint window
                  'Por favor, escanea tú huella',

                  // success callback, invoked when the users input was accepted
                  function(msg) { 
                    alert('Verificación satisfactoria'); 
    		        datos.usuarioTouchID = "true";    
                      
                    //app.usuarios.push(datos);
                    var usuarios = window.localStorage.getItem('usuarios');
                    //console.log(usuarios);
                    if(usuarios != null){
                        window.localStorage.setItem('usuarios',usuarios+'|'+JSON.stringify(datos));
                        //console.log(window.localStorage.getItem('usuarios'));
                    } else {
                        window.localStorage.setItem('usuarios',JSON.stringify(datos));
                        //console.log(window.localStorage.getItem('usuarios'));
                    }
                    app.application.navigate('#view-transicion-registro');
                    //var pane = $("#inicio-pane").data("kendoMobilePane");
                    //pane.navigate('#view-registro');
                  },

                  // error callback, invoked when there was no match,
                  // essentially meaning the dialog was closed by pressing 'cancel'
                  
                  function(msg) {
                        alert('Autenticación fallida');
        		        datos.usuarioTouchID = "false";    
                          
                        //app.usuarios.push(datos);
                        var usuarios = window.localStorage.getItem('usuarios');
                        //console.log(usuarios);
                        if(usuarios != null){
                            window.localStorage.setItem('usuarios',usuarios+'|'+JSON.stringify(datos));
                            //console.log(window.localStorage.getItem('usuarios'));
                        } else {
                            window.localStorage.setItem('usuarios',JSON.stringify(datos));
                            //console.log(window.localStorage.getItem('usuarios'));
                        }
                        app.application.navigate('#view-transicion-registro');
                        //var pane = $("#inicio-pane").data("kendoMobilePane");
                        //pane.navigate('#view-registro');
                  }
                );  
               }else{
                   datos.usuarioTouchID = "false";    
                          
                        //app.usuarios.push(datos);
                        var usuarios = window.localStorage.getItem('usuarios');
                        //console.log(usuarios);
                        if(usuarios != null){
                            window.localStorage.setItem('usuarios',usuarios+'|'+JSON.stringify(datos));
                            //console.log(window.localStorage.getItem('usuarios'));
                        } else {
                            window.localStorage.setItem('usuarios',JSON.stringify(datos));
                            //console.log(window.localStorage.getItem('usuarios'));
                        }
                        app.application.navigate('#view-transicion-registro');
               } 
                
            }
        }, 
        cerrarSesion: function(){
              var n = new Noty
              ({
                 text: '¿Desea salir?',
                 layout: 'centerTop',
                 buttons: 
                 [
                     Noty.button('Salir', 'Cancelar', function () 
                     {
                        window.localStorage.setItem('usuarioIDNAL','');
                        window.localStorage.setItem('usuarioNAME','');
                        window.localStorage.setItem('usuarioLASTNAME','');
                        window.localStorage.setItem('usuarioEMAIL','');
                        window.localStorage.setItem('usuarioDATE','');
                        window.localStorage.setItem('usuarioNATION','');
                        window.localStorage.setItem('usuarioPASS','');
                        window.localStorage.setItem('usuarioDIRR','');
                        window.localStorage.setItem('usuarioPSW','');
                        window.localStorage.setItem('usuarioCNAME','');
                        window.localStorage.setItem('usuarioEMAILC','');
                        window.localStorage.setItem('usuarioCTEL','');
                        window.localStorage.setItem('ubicacionCity','');
                        window.localStorage.setItem('ubicacionCountry','');                                                   
                        window.localStorage.setItem('ubicacionIp','');                                                   
                        window.localStorage.setItem('ubicacionLatitude','');                                                   
                        window.localStorage.setItem('ubicacionLongitude','');                          
                        window.localStorage.setItem('usuarioFOTO','');                          
                        app.application.navigate('#view-inicio');
                        app.mostrarMensaje('success','Sesión finalizada exitosamente');

                         n.close();
                     }, 
                     {
                         id: 'button1', 'data-status': 'ok'}),

                     Noty.button('Cancelar', 'error', function () 
                     {
                         //console.log('button 2 clicked');
                         n.close();
                     
                    })
               ]
           }).show();
        },
        tRegistro:function(){
            setTimeout(function(){  
                
                app.application.navigate('#view-inicio');
                var pane = $("#inicio-pane").data("kendoMobilePane");
                pane.navigate('#view-login'); 
                app.mostrarMensaje('success', 'Registro exitoso');
                
            }, 4000); 
        },
        tLogin:function(){
            setTimeout(function(){
                
                app.application.navigate('#view-menu');
           }, 4000);
        },
        
    });
    app.inicioService = {
        viewModel: new inicioViewModel()
    };
})(window);

