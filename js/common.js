$(document).ready(function(){
    const mBtn = $('.m-btn'),
          mNav = $('.m-nav')
    mBtn.click(function(){
        mBtn.toggleClass('on')
        mNav.toggleClass('on')
    })
    $(window).resize(function(){
        let windowWidth = $(window).width();
        if(windowWidth > 991){
            $(mBtn).removeClass('on')
            $(mNav).removeClass('on')
        }
    })
})