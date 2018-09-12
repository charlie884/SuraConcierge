(function (global) {
    var idViewModel,
        app = global.app = global.app || {};

    idViewModel = kendo.data.ObservableObject.extend({
        iniciar:function(){
            //$(".f4").click(function(){
            //    $(".f1").removeClass("activeArr");
            //    $(".f2").removeClass("activeArr");
            //    $(".f3").removeClass("activeArr");
            //    $(".f4").addClass("activeArr");
            //});             
            if ($(".f4").click()) {
                    $(".f1").removeClass("activeArr");
                    $(".f2").removeClass("activeArr");
                    $(".f3").removeClass("activeArr");
                    $(".f4").addClass("activeArr");            	
            }
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
            var ciudad = localStorage.getItem("usuarioNATION");
            $( ".cont-item .ciudad" ).html(ciudad);
            var id = localStorage.getItem("usuarioIDNAL");
            $( ".cont-item .idNal" ).html(id);
            var direccion = localStorage.getItem("usuarioDIRR");
            $( "table .dirr" ).html(direccion);
            var ciudad2 = localStorage.getItem("usuarioNATION");
            $( "table .nation" ).html(ciudad2);
            var birth = localStorage.getItem("usuarioDATE");
            $( "table .birth" ).html(birth);
            var passport = localStorage.getItem("usuarioPASS");
            $( "table .passport" ).html(passport);
            var enombre = localStorage.getItem("usuarioCNAME");
            $( "table .enombre" ).html(enombre);
            var etel = localStorage.getItem("usuarioCTEL");
            $( "table .etel" ).html(etel);
            var cmail = localStorage.getItem("usuarioEMAIL");
            $( "table .cmail" ).html(cmail);
        },
        cambiarFotoPerfil: function(){
            navigator.notification.confirm(
                'Selecciona una opción', // message
                 function(boton){
                     if(boton === 1){
                         navigator.camera.getPicture(onSuccess, onFail, { 
                            quality: 70,
                            destinationType: Camera.DestinationType.DATA_URL,
                            allowEdit : true,
                            targetWidth: 800,
              			  targetHeight: 800
                        });

                        function onSuccess(imageData) {
                            //alert('Cambiando');
                            //var image = document.getElementById(id);
                            var nuevoSrc = "data:image/jpeg;base64," + imageData;
                            window.localStorage.setItem('usuarioFOTO',nuevoSrc);
                            //image.src = nuevoSrc;
                            $('.fotoUsuario').attr(
                                'src',nuevoSrc
                            );
                             var username = window.localStorage.getItem('usuarioIDNAL');
                            var contrasena = window.localStorage.getItem('usuarioPSW');
                            var usuarios = window.localStorage.getItem('usuarios');
                            if(usuarios != null){
                                usuarios = usuarios.split('|');
                                $.each(usuarios,function(ix,vl){
                                    var usuario = JSON.parse(vl);
                                
                                    if(usuario.usuarioIDNAL == username && usuario.usuarioPSW == contrasena){
                                        window.localStorage.setItem('usuarioFOTO',nuevoSrc);
                                        usuarios.splice(ix,1);
                                        usuario.usuarioFOTO = nuevoSrc;
                                        usuarios.push(usuario);
                                    } 
                                })
                            }
                            
                            
                             var nuevo = window.localStorage.setItem('usuarios','');
                            $.each(usuarios,function(ix,vl){
                                if(nuevo != null){
                                    window.localStorage.setItem('usuarios',nuevo+'|'+JSON.stringify(vl));
                                } else {
                                    window.localStorage.setItem('usuarios',JSON.stringify(vl));
                                }
                            })
                            
                        } 

                        function onFail(message) { 
                            //navigator.notification.alert(message, function(){}, "Colombian Coffee Hub", "Ok");
                        }
                     }else if(boton === 2) {
                            navigator.camera.getPicture(listoFoto, onFail, { 
                                quality: 70,
                                destinationType: Camera.DestinationType.DATA_URL,
                                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                                allowEdit : true,
                                targetWidth: 800,
                  			  targetHeight: 800
                            });
                            
                            function listoFoto(imageData) {
                                //alert('Cambiando');
                                //var image = document.getElementById(id);
                                var nuevoSrc = "data:image/jpeg;base64," + imageData;
                                window.localStorage.setItem('usuarioFOTO',nuevoSrc);
                                //image.src = nuevoSrc;
                                $('.fotoUsuario').attr(
                                    'src',nuevoSrc
                                );
                                 var username = window.localStorage.getItem('usuarioIDNAL');
                                var contrasena = window.localStorage.getItem('usuarioPSW');
                                var usuarios = window.localStorage.getItem('usuarios');
                                if(usuarios != null){
                                    usuarios = usuarios.split('|');
                                    $.each(usuarios,function(ix,vl){
                                        //console.log(1);
                                        var usuario = JSON.parse(vl);
                                        
                                        if(usuario.usuarioIDNAL == username && usuario.usuarioPSW == contrasena){
                                            window.localStorage.setItem('usuarioFOTO',nuevoSrc);
                                            usuarios.splice(ix,1);
                                            usuario.usuarioFOTO = nuevoSrc;
                                            usuarios.push(usuario);
                                            console.log(usuarios);
                                        } 
                                    })
                                }
                                 var nuevo = window.localStorage.setItem('usuarios','');
                                $.each(usuarios,function(ix,vl){
                                    if(nuevo != null){
                                        window.localStorage.setItem('usuarios',nuevo+'|'+JSON.stringify(vl));
                                    } else {
                                        window.localStorage.setItem('usuarios',JSON.stringify(vl));
                                    }
                                })
                            
                            }

                            function onFail(message) {
                            }
                     }else if(boton === 3) {
                            return;
                     }
                     
                 },            // callback to invoke with index of button pressed
                'Imagen de perfil',           // title
                ['Tomar foto','Elegir', 'Cancelar']         // buttonLabels
            );
        }
    });
    app.idService = {
        viewModel: new idViewModel()
    };
})(window);