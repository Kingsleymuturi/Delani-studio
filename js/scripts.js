$(document).ready(function() {
    $(".clickable1").click(function() {
    $(".development-text").slideToggle();
    $(".development-icon").slideToggle()
  });
    $(".clickable2").click(function() {
    $(".product-text").slideToggle();
    $(".product-icon").slideToggle()
  });
    $(".clickable").click(function() {
    $(".design-text").slideToggle();
    $(".design-icon").slideToggle()
  });
    $(".snake").snakeify({
      speed: 200
    })
})

 