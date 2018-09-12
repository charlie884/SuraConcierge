(function (global) {
    var conciergeViewModel,
        app = global.app = global.app || {};

    conciergeViewModel = kendo.data.ObservableObject.extend({
        iniciar:function(){
            //$(".f3").click(function(){
            //    $(".f1").removeClass("activeArr");
            //    $(".f2").removeClass("activeArr");
            //    $(".f3").addClass("activeArr");
            //    $(".f4").removeClass("activeArr");
            //});              
            if ($(".f3").click()) {
                    $(".f1").removeClass("activeArr");
                    $(".f2").removeClass("activeArr");
                    $(".f3").addClass("activeArr");
                    $(".f4").removeClass("activeArr");            	
            }  
            var nombre = localStorage.getItem("usuarioNAME");
            var apellido = localStorage.getItem("usuarioLASTNAME");
            $( ".cc h2" ).html(nombre+" "+apellido);
            
            var id = localStorage.getItem("usuarioIDNAL");
            $( ".cc .cc2" ).html(id);                                                 
            var ciudad = window.localStorage.getItem('ubicacionCity');
            $( ".cc .ciudad_concierge" ).html(ciudad);
        }
    });
    app.conciergeService = {
        viewModel: new conciergeViewModel()
    };
})(window);