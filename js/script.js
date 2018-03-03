$(window).on("load", function(){
  
  var loadingScreen = $("#loading-screen");
  var imagen = $("#loading");
  
  function esconder(){
    
    loadingScreen.fadeOut();
  };

  imagen.animate({opacity: "1"}, 1000);
  setTimeout(esconder, 3000);
  
  
});