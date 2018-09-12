(function (global) {
    var asistenciaLegalViewModel,
        app = global.app = global.app || {};

    asistenciaLegalViewModel = kendo.data.ObservableObject.extend({
        iniciar:function(){ 
            app.identificarPais();
        }
    });
    app.asistenciaLegalService = {
        viewModel: new asistenciaLegalViewModel()
    };
})(window);