(function (global) {
    var polizaViewModel,
        app = global.app = global.app || {};

    polizaViewModel = kendo.data.ObservableObject.extend({
        iniciar:function(){ 
            app.identificarPais();
        }
    });
    app.polizaService = {
        viewModel: new polizaViewModel()
    };
})(window);