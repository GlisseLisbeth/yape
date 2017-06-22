$(()=>{
  var interval;
  //Al dar click muestra una imagen diferente
  $('.slider-circle ul li').on('click', function(e){
        var linkImg = $('.active');
        var thisImg = $(this).attr('class');
        var allClassImg = $('.'+thisImg);
        linkImg.removeClass('active').css('z-index', -10);
        allClassImg.addClass('active').css('z-index', 10);
    });
});
