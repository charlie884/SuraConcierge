(function (global) {
    var menuViewModel,
        app = global.app = global.app || {};

    menuViewModel = kendo.data.ObservableObject.extend({
        iniciar:function(){
            $("a").click(function(){
                $(".f1").addClass("activeArr");
                $(".f2").removeClass("activeArr");
                $(".f3").removeClass("activeArr");
                $(".f4").removeClass("activeArr");
            });  
          app.identificarPais();
        },
        responsive:function(){
          var height = $('#view-menu .km-content').height();  
          var header = $('#view-menu .km-header').height();  
          var footerH = $('#view-menu .km-footer').height();  
            console.log(height);
          if(height < 480){
              $('#view-menu .menu .item img').css('margin-top','20%');
              $('#view-menu .menu .item p').css('font-size','12px');
          }
          $('#view-menu .item').height((height-footerH)/4);            
        }
    });
    app.menuService = {
        viewModel: new menuViewModel()
    };
})(window);