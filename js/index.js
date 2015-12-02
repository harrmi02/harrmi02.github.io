var _el= $(".papersheet");

_el.click(function(){

  if (_el.hasClass("clicked")) {
  	
  } else {
  	$(this).addClass("clicked");
  	$(this).parent(".container").addClass("clicked");
  }

});