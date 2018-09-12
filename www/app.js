'use strict';

(function(global) {
    var app = global.app = global.app || {};

    
    if (window.cordova) {
        document.addEventListener("resume", function(){ 
            //console.log(cordova.file);
            
        });
        document.addEventListener('deviceready', function() {
            
            StatusBar.backgroundColorByHexString("#004894");
            
            //Cuando se encuentre listo...
            if (window.navigator.simulator !== true){
                
               // after checking window.plugins and window.plugins.touchid are available, do:
                window.plugins.touchid.isAvailable(
                  // success callback, invoked when it's available
                  function(msg) {
                    console.log('Yes, TouchID is available');
                  },

                  // error callback, invoked when it's not available
                  function(msg) {
                    console.log('No, TouchID is not available. Details: ' + JSON.stringify(msg));
                  } 
                );
                
            }
            if (navigator && navigator.splashscreen) {
                navigator.splashscreen.hide();
            }

            var element = document.getElementById('appDrawer');
            if (typeof(element) != 'undefined' && element !== null) {
                if(window.navigator.msPointerEnabled) {
                    $('#navigation-container').on('MSPointerDown', 'a', function(event) {
                        app.keepActiveState($(this));
                    });
                }else{
                    $('#navigation-container').on('touchstart', 'a', function(event) {
                        app.keepActiveState($(this));
                    });
                }
            }
            //var usuario = window.localStorage.getItem('usuarioIDNAL');
            //var password = window.localStorage.getItem('usuarioPSW');
            //if(usuario && password){
            //    app.application = new kendo.mobile.Application(document.body, {
            //        skin: 'flat',
            //        initial: '#view-menu'
            //    });
            //}else{
                //app.application = new kendo.mobile.Application(document.body, {
                //    skin: 'flat',
                //    initial: '#view-splash'
                //});
            //} 
            
            
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
                            $.getJSON("http://api.ipstack.com/ 190.147.84.233?access_key=b83c0f15b8461a41338fd237cae80587", function (data) {
                                console.log(JSON.stringify(data));   
                                window.localStorage.setItem('ubicacionCity',data.city);
                                window.localStorage.setItem('ubicacionCountry',data.country_name);                                                   
                                window.localStorage.setItem('ubicacionIp',data.ip);                                                   
                                window.localStorage.setItem('ubicacionLatitude',data.latitude);                                                   
                                window.localStorage.setItem('ubicacionLongitude',data.longitude);                                                   
                            });                                     
                            //app.application.navigate('#view-transicion-login');
                            app.application = new kendo.mobile.Application(document.body, {
                                skin: 'flat',
                                initial: '#view-transicion-login'
                            });
                            console.log(usuario);
                        } 
                    })
                    if(alerta==true){
                        app.mostrarMensaje('error', 'Usuario no se encuentra registrado');
                        //app.application.navigate('#view-inicio')
                        app.application = new kendo.mobile.Application(document.body, {
                            skin: 'flat',
                            initial: '#view-inicio'
                        });
                    } 
                } else {
                    app.mostrarMensaje('error', 'Usuario no se encuentra registrado');
                    //app.application.navigate('#view-inicio')
                    app.application = new kendo.mobile.Application(document.body, {
                        skin: 'flat',
                        initial: '#view-inicio'
                    });
                }     
            } else {
                //app.application.navigate('#view-inicio'); 
                app.application = new kendo.mobile.Application(document.body, {
                    skin: 'flat',
                    initial: '#view-inicio'
                });
            }
            
            var usuarios = window.localStorage.getItem('usuarios');
            console.log(usuarios);
            if(usuarios != null){
            } else {
                window.localStorage.setItem('usuarios','{"usuarioNAME":"Sura","usuarioLASTNAME":"Concierge","usuarioEMAIL":"jose.duarte@emerald.studio","usuarioDATE":"2017-02-02","usuarioIDNAL":"123456","usuarioNATION":"ARG","usuarioPASS":"13123","usuarioDIRR":"Calle 123 ","usuarioPSW":"123456","usuarioCNAME":"Sura emergencia","usuarioEMAILC":"jose.duarte@emerald.studio","usuarioCTEL":"21312","usuarioTouchID":"false","usuarioFOTO":"images/user.png"}');
            }
           
            navigator.splashscreen.hide();
        }, false);
    } else {
        bootstrap();
    }
   
    app.keepActiveState = function _keepActiveState(item) {
        var currentItem = item;
        $('#navigation-container li.active').removeClass('active');
        currentItem.addClass('active');
    };

    window.app = app;

    app.isOnline = function() {
        if (!navigator || !navigator.connection) {
            return true;
        } else {
            return navigator.connection.type !== 'none';
        }
    };

    app.openLink = function(url) {
        if (url.substring(0, 4) === 'geo:' && device.platform === 'iOS') {
            url = 'http://maps.apple.com/?ll=' + url.substring(4, url.length);
        }

        window.open(url, '_system');
        if (window.event) {
            window.event.preventDefault && window.event.preventDefault();
            window.event.returnValue = false;
        }
    };

    /// start appjs functions
    /// end appjs functions
    app.showFileUploadName = function(itemViewName) {
        $('.' + itemViewName).off('change', 'input[type=\'file\']').on('change', 'input[type=\'file\']', function(event) {
            var target = $(event.target),
                inputValue = target.val(),
                fileName = inputValue.substring(inputValue.lastIndexOf('\\') + 1, inputValue.length);

            $('#' + target.attr('id') + 'Name').text(fileName);
        });

    };
    
    app.mostrarMensaje = function(type,text){
         new Noty({
         type: type,
         text: text,
         timeout: 3000
       }).show();  
    }
    
    app.abrirLink = function(url){
        cordova.InAppBrowser.open(url, '_blank', 'location=yes');
    }
    
    app.identificarPais = function(){
        $.getJSON("http://api.ipstack.com/ 190.147.84.233?access_key=b83c0f15b8461a41338fd237cae80587", function (data) {
            console.log(JSON.stringify(data));
            window.localStorage.setItem('ubicacionCity',data.region_name);
            window.localStorage.setItem('ubicacionCountry',data.country_name);                                                   
            //window.localStorage.setItem('ubicacionCountry','Argentina');                                                   
            window.localStorage.setItem('ubicacionIp',data.ip);                                                   
            window.localStorage.setItem('ubicacionLatitude',data.latitude);                                                   
            window.localStorage.setItem('ubicacionLongitude',data.longitude);                                                   
            var ubicacion = localStorage.getItem('ubicacionCountry');
            
            if (ubicacion=='Colombia') {
                //console.log(ubicacion);
            	$('header .paisLogo').attr('src','images/co.png');
            }else if (ubicacion=='Argentina') {
                //console.log(ubicacion);
            	$('header .paisLogo').attr('src','images/ar.png');
            }else if (ubicacion=='Brazil') {
                //console.log(ubicacion);
            	$('header .paisLogo').attr('src','images/br.png');
            }                  
        });          
             
    }
    //app.usuarios = [];
    app.ubicacion = '';
    app.clearFormDomData = function(formType) {
        $.each($('.' + formType).find('input:not([data-bind]), textarea:not([data-bind])'), function(key, value) {
            var domEl = $(value),
                inputType = domEl.attr('type');

            if (domEl.val().length) {

                if (inputType === 'file') {
                    $('#' + domEl.attr('id') + 'Name').text('');
                }

                domEl.val('');
            }
        });
    };

    /// start kendo binders
    kendo.data.binders.widget.buttonText = kendo.data.Binder.extend({
        init: function(widget, bindings, options) {
            kendo.data.Binder.fn.init.call(this, widget.element[0], bindings, options);
        },
        refresh: function() {
            var that = this,
                value = that.bindings["buttonText"].get();

            $(that.element).text(value);
        }
    });
    /// end kendo binders
})(window);
