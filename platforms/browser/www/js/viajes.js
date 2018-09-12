(function (global) {
    var viajesViewModel,
        app = global.app = global.app || {};

    viajesViewModel = kendo.data.ObservableObject.extend({
        iniciar:function(){
            //$(".f2").click(function(){
            //    $(".f1").removeClass("activeArr");
            //    $(".f2").addClass("activeArr");
            //    $(".f3").removeClass("activeArr");
            //    $(".f4").removeClass("activeArr");
            //});            
            if ($(".f2").click()) {
                    $(".f1").removeClass("activeArr");
                    $(".f2").addClass("activeArr");
                    $(".f3").removeClass("activeArr");
                    $(".f4").removeClass("activeArr");                    
            }              
        }
    });
    app.viajesService = {
        viewModel: new viajesViewModel()
    };
})(window);