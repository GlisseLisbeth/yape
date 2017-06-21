$(()=>{
  var interval;
  //Al dar click muestra una imagen diferente
  $('.slider-circle ul li').on('click', function(e){
      moveNext();
  });

  //Function Next
  function moveNext(){
    let current = $('.active'),
    next = current.next();
    current.removeClass('active').css('z-index', -10);
    if (current.is(':last-child')) {
        next = current.siblings().first();
    }
    next.addClass('active').css('z-index', 10);
  }
  //Function Prev
  function movePrev(){
    let current = $('.active'),
          prev = current.prev();

    current.removeClass('active').css('z-index', -10);

    if (current.is(':first-child')) {
        prev = current.siblings().prev();
    }
    prev.addClass('active').css('z-index', 10);
  }
  //Change for 5 seconds automatic
  function automatic() {
	interval = window.setInterval(function(){
      moveNext();
    }, 5000);
  }
  automatic();
});
