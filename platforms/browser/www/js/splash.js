(function (global) {
    var SplashViewModel, 
        app = global.app = global.app || {};

    SplashViewModel = kendo.data.ObservableObject.extend({
        iniciar: function(e){
            //var ancho = $('#view-splash .km-content').width();
            //var alto = $('#view-splash .km-content').height();
            ////alert(ancho +' - '+alto);
            //$('#splash').jsMovie({ 
            //    sequence: 'sura#####.jpg',
            //    from: 0,
            //    to: 299, 
            //    fps: 60,  
            //    //loadParallel:300,
            //    folder : "images/splash/",
            //    height:alto,
            //    width:ancho,
            //    //playOnLoad:true,
            //    repeat: true
            //});
            
            //$('#splash').jsMovie('play');
            
             
            setTimeout(function(){
                var username = window.localStorage.getItem('usuarioIDNAL');
                var contrasena = window.localStorage.getItem('usuarioPSW');
                if(username && contrasena){
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
                            app.application.navigate('#view-inicio')
                        } 
                    } else {
                        app.mostrarMensaje('error', 'Usuario no se encuentra registrado');
                        app.application.navigate('#view-inicio')
                    }     
                } else {
                    app.application.navigate('#view-inicio');
                }
           }, 6000);
        },
    });

    app.splashService = {
        viewModel: new SplashViewModel()
    };
})(window);