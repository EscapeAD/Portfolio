$(document).on('turbolinks:load',function(){
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.name').css({
      'transform' : 'translate(0px, ' +  wScroll/3 +'px)'
    })

    if(wScroll > $('.content').offset().top){
      $('.navbar').css({
        'visibility' : 'visible'
      })
    } else {
      $('.navbar').css({
        'visibility' : 'hidden'
      })
    }
  })
})
