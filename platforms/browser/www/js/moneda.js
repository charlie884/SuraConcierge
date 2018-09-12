(function (global) {
    var monedaViewModel,
        app = global.app = global.app || {};

    monedaViewModel = kendo.data.ObservableObject.extend({
        iniciar:function(){ 
            app.identificarPais();
            var nacionalidad = window.localStorage.getItem("usuarioNATION");
            console.log(nacionalidad);
            if (nacionalidad == 'COL') {
                $('#monedaNal img').attr('src','images/co.png');
                $('#monedaNal1 img').attr('src','images/ar.png');
                $('#monedaNal2 img').attr('src','images/br.png');
                $('#monedaNal3 img').attr('src','images/us.png');
            }else if (nacionalidad == 'ARG') {
                console.log('art');
            	$('#monedaNal img').attr('src','images/ar.png');
                $('#monedaNal1 img').attr('src','images/co.png');
                $('#monedaNal2 img').attr('src','images/br.png');
                $('#monedaNal3 img').attr('src','images/us.png');
            }else if (nacionalidad == 'BR') {
                $('#monedaNal img').attr('src','images/br.png');
                $('#monedaNal1 img').attr('src','images/co.png');
                $('#monedaNal2 img').attr('src','images/ar.png');
                $('#monedaNal3 img').attr('src','images/us.png');            	
            }
        },
        calcular:function(e){
            e.preventDefault();     
            var nacionalidad = window.localStorage.getItem("usuarioNATION");
            var cantidadT = $('#cantidad').val();
            
            var pesoCOLarg = 0.00571544;
            var pesoCOLbrz = 0.00109592;
            var pesoCOLeeuu = 0.000333619;
            
            var pesoARGcol = 174.993;
            var pesoARGbrz = 0.191767;
            var pesoARGeeuu = 0.0572087;
            
            
            var pesoBRZcol = 912.523;
            var pesoBRZarg = 5.21467;
            var pesoBRZeeuu = 0.0572087;
            
            //col a brz, arg y eeuu
            if (nacionalidad == 'COL') {
            	var resultadoTar = cantidadT*pesoCOLarg;
                var resultadoTotalar = parseFloat(resultadoTar).toFixed(2);
                var resultadoTcb = cantidadT*pesoCOLbrz;
                var resultadoTotalcb = parseFloat(resultadoTcb).toFixed(2);
                var resultadoTceeuu = cantidadT*pesoCOLeeuu;
                var resultadoTotalceeuu = parseFloat(resultadoTceeuu).toFixed(2);
                $('#monedaNalresult1').html(resultadoTotalar);              
                $('#monedaNalresult2').html(resultadoTotalcb);               
                $('#monedaNalresult3').html(resultadoTotalceeuu);
            }else
            
            //arg a col y brz
            if (nacionalidad == 'ARG') {
            	var resultadoTac = cantidadT*pesoARGcol;
                var resultadoTotalac = parseFloat(resultadoTac).toFixed(2);
                var resultadoTab = cantidadT*pesoARGbrz;
                var resultadoTotalab = parseFloat(resultadoTab).toFixed(2);
                var resultadoTaeeuu = cantidadT*pesoARGeeuu;
                var resultadoTotalaeeuu = parseFloat(resultadoTaeeuu).toFixed(2);
                $('#monedaNalresult1').html(resultadoTotalac);              
                $('#monedaNalresult2').html(resultadoTotalab);               
                $('#monedaNalresult3').html(resultadoTotalaeeuu);
            }else
            //brz a col y brz eeuu
            if (nacionalidad=='BR') {
            	var resultadoTbc = cantidadT*pesoBRZcol;
                var resultadoTotalbc = parseFloat(resultadoTbc).toFixed(2);
                var resultadoTba = cantidadT*pesoBRZarg;
                var resultadoTotalba = parseFloat(resultadoTba).toFixed(2);
                var resultadoTbeeuu = cantidadT*pesoBRZeeuu;
                var resultadoTotalbeeuu = parseFloat(resultadoTbeeuu).toFixed(2);
                $('#monedaNalresult1').html(resultadoTotalbc);              
                $('#monedaNalresult2').html(resultadoTotalba);               
                $('#monedaNalresult3').html(resultadoTotalbeeuu);
            }            
        }
        
    });
    app.monedaService = {
        viewModel: new monedaViewModel()
    };
})(window);