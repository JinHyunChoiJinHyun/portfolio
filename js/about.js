$(document).ready(function(){
    $(window).scroll(function(){
        let scrollPos = $(window).scrollTop()
        let skillBar1 = $('.skill1 .bar')
        let skillBar2 = $('.skill2 .bar')
        if(scrollPos > 200){
            skillBar1.addClass('on')
        }else{
            skillBar1.removeClass('on')
        }
        if(scrollPos > 400){
            skillBar2.addClass('on')
        }else{
            skillBar2.removeClass('on')
        }
        
    })
})

var swiper = new Swiper(".ment-swiper", {
    effect: "cards",
    grabCursor: true,
    loop:true,
    navigation: {
        nextEl:'.next-btn'
    }
  });