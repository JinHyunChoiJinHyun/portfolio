$(document).ready(function(){
    const tabMenu = $('.tab-menu li'),
          tabSlider = $('.tabs > div')
          // console.log(tabSlider)
          tabMenu.click(function(e){
            e.preventDefault();
            tabMenu.removeClass('on')
            $(this).addClass('on')
            tabSlider.hide();
            let targetIdx = $(this).index();
            tabSlider.eq(targetIdx).show();
          })
          tabMenu.eq(0).trigger('click')
    $('.film-swiper a, .motion-swiper a').click(function(e){
          e.preventDefault();
          $('.modal').addClass('show')
          $('.modal').append(`
          <div class="item_box">
            <iframe src="https://www.youtube.com/embed/${$(this).data('video')}?rel=0&playinline=1&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          `,)
    })
   
      
    $('.modal .dim .modal-btn').click(function(){
          $('.modal').removeClass('show')
          $('.modal .item_box').remove()
          $('.modal .video-container').removeClass('on')
    })
    $('.modal .dim h4 a').click(function(){
          $('.modal iframe,.modal .item_box').addClass('small')
          $('.modal .video-container').addClass('on')
    })
    $('.modal .dim .video-btn, .video-swiper a').click(function(){
          $('.modal iframe,.modal .item_box').removeClass('small')
          $('.modal .video-container').removeClass('on')
    })
    $('.video-swiper a').click(function(e){
      e.preventDefault();
      $('.item_box').remove();
      $('.modal').append(`
      <div class="item_box">
        <iframe src="https://www.youtube.com/embed/${$(this).data('video')}?rel=0&playinline=1&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      `,)
      
    })
  
  })
  
  
  var swiper = new Swiper(".motion-swiper", {
      
      loop:true,
      navigation: {
          nextEl: ".next-btn",
          prevEl: ".prev-btn"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable:true
        }
  });
  var swiper = new Swiper(".film-swiper", {
      
      loop:true,
      navigation: {
          nextEl: ".next-btn2",
          prevEl: ".prev-btn2"
        },
        pagination: {
          el: ".swiper-pagination2",
          clickable:true
        }
  });
  
  var swiper = new Swiper(".video-swiper", {
    slidesPerView:5,
    loop:true,
    navigation: {
      nextEl: ".video-next-btn",
      prevEl: ".video-prev-btn"
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });
  
  
  
  // var channelId = 'UCHMSoQzngowi77a6ldYCMuw';
  // var key = 'AIzaSyAWxNPbPN0SudZ2p-HfwGNrUwTcE8Y5bzE';
  // $.ajax({
  //   type:'GET',
  //   dataType:'json',
  //   url:'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCHMSoQzngowi77a6ldYCMuw&maxResults=5&order=date&key='+key,
  //   success:function(data){
  //     data.items.forEach(function(element, index){$('.video-container').append(' <iframe src="https://www.youtube.com/embed/'+element.id.videoId+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');});
  //     },
  //     complete:function(data){},
  //     error:function(xhr,status,error){},
      
  // });
  
  