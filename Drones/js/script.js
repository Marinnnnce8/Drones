$(document).ready(function(){
  //SEARCH-BOX SHOW
  $('.search-box').hide();
    $('.search-btns').click(function(){
      $('.search-box').show();
  });
  $('.search-btns-mob').click(function(){
    $('.search-box').show();
  });

  $(".toggle-nav").click(function(){
    $("#slide").slideToggle("slow");
  });


  //ROTATE CARET
  $('.toggle-nav').click(function () {
    $(".zmdi-caret-down").toggleClass("active", "slow");
  });
});

function toggle_visibility(className) {
  var e = document.getElementsByClassName(className)[0];
  if(e.style.display == 'block')
     e.style.display = 'none';
  else
     e.style.display = 'block';
}




