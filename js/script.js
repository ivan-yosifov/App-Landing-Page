$(document).ready(function(){
  $('.card-body').on({
    mouseenter: function(){
      $(this).animate({
        marginTop: "-=3%"
      }, 200)
    },
    mouseleave: function(){
      $(this).animate({
        marginTop: "0%"
      }, 200);
    }
  });
});