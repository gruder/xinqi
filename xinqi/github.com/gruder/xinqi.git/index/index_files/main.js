/**
 * [description]
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
(function($) {
  $(document).ready(function() {
    function startVideo() {
      var video = document.getElementById("videoMP4");
      video.addEventListener("canplaythrough", function() {
        console.log('you can click playBtn');
        if ($('#numberId').html() < 60) {
          setTimeout(function() {
            if (typeof loopLoading != 'undefined') clearInterval(loopLoading);
            $('#numberId').html(100);
            $("#playId").addClass('btn');
            $("#playId").css({
              'background': 'linear-gradient(to right,black 0%,black 100%,transparent 100%,transparent 100%)'
            });
          }, 1500);
        } else {
          if (typeof loopLoading != 'undefined') clearInterval(loopLoading);
          $('#numberId').html(100);
          $("#playId").addClass('btn');
          $("#playId").css({
            'background': 'linear-gradient(to black,yellow 0%,black 100%,transparent 100%,transparent 100%)'
          });
        }
        consoleTime = setInterval(function() {
          console.log(video.currentTime);
          if (video.currentTime == video.duration) {
            clearInterval(consoleTime);
            $('#icon-play').removeClass('icon-stop').addClass('icon-play');
            video.pause();
          } else if (video.currentTime / video.duration > 0.9) {
            $('#menu-box').show().addClass('slightDown');
          }
        }, 1000);
        $("#playId").unbind('click').on('click', function() {
          $('#page-1-content').hide();
          addNarrow(['circle800', 'circle1000', 'circle1300', 'circle1800', 'circle2400']);
          setTimeout(function() {
            $('.page-1').removeClass('opa10');
            $('.page-2').removeClass('zx-1').addClass('opacityT');
            video.play();
          }, 1500);
        });
        $('#icon-play').unbind('click').on('click', function() {
          // if(typeof consoleTime != 'undefined'){
          //  clearInterval(consoleTime);
          // }
          if ($(this).hasClass('icon-play')) {
            $('#menu-box').hide().removeClass('slightDown');
            $(this).removeClass('icon-play').addClass('icon-stop');
            video.play();
          } else {
            $('#menu-box').show().addClass('slightDown');
            $(this).removeClass('icon-stop').addClass('icon-play');
            video.pause();
            console.log(video.duration);
          }
        });
      });
      video.addEventListener("error", function() {
        var errorMessage = '';
        if (video.error.code == 3) {
          errorMessage = '浏览器解码视频时出错，请刷新浏览器或者更换视频解码格式';
          window.location.href = 'index.html';
        } else {
          errorMessage = '未知错误';
        }
        console.log('load video error,please click F5 to refresh', errorMessage);
      });
      var handle = function() {
        console.log('removeEventListener success');
      }
    }
    //滚轮事件
    $('#page-5').on('mousewheel DOMMouseScroll', function() {

    });
    $('.slightLeft').on('mouseover', function() {
      //alert();
    })
  });
})(jQuery);


/**
 * 屏幕滚动效果
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
(function($) {
  $(window).on('scroll', function() {

    // 当前滚动高度
    // console.log($('body').scrollTop());

    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

    // 总滚动高度
    // console.log($('body').get(0).scrollHeight);

    $('.su').each(function() {
      if (scrollTop + $(window).height() > $(this).position().top + 20) {
        if (!$(this).hasClass('slightUp')) $(this).addClass('slightUp');
      }
    });
  });
})(jQuery);


/**
 * 页面跳转
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
(function($) {
  $(document).ready(function() {
    $('body').on('click', '.menu-li span, .f-menu', function() {
      var page = $(this).data('page');
      if (page == undefined) return;
      window.location.href = $(this).data('page') + '.html';
    }).on('click', '.logo', function() {
      window.location.href = '/index.html';
    }).on('click', '.solutions', function() {
      window.location.href = '/index.html#solutions';
    }).on('click', '#linkToTech', function() {
      window.location.href = '/tech.html';
    }).on('click', '.jump', function() {
      var page = $(this).data('page');
      if (page == undefined) return;
      window.location.href = $(this).data('page') + '.html';
    });
  });
  
  $('body').on('click','.menu-li-span',function(){
    if($(this).html() == '中文'){
      window.location.href = '../index.html';
    }else if($(this).html() == 'English'){
      window.location.href = './en/index.html';
    }
  })
})(jQuery);


/**
 * 轮播图点击效果
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
(function($) {
  $(document).ready(function() {
    $('body').on('click', '.sylr', function() {
      if ($(this).hasClass('moving')) {
        return;
      }
      $(this).addClass('moving');
      if ($(this).hasClass('syl')) {
        if (parseInt($('.min-img-exp').position().left) >= 0) {
          $(this).addClass('opa0').siblings().removeClass('opa0');
          $(this).css('cursor', 'default');
          return;
        }
        $('.sylr').removeClass('opa0');
        $('.sylr').css('cursor', 'pointer');
        $('.min-img-exp').css({
          'left': $('.min-img-exp').position().left + ($('.min-img-exp').width() / $('.min-img-exp .min-img').length)
        });
      } else {
        if (parseInt($('.min-img-exp').position().left) <= -1 * parseInt($('.min-img-exp').width() / $('.min-img-exp .min-img').length * ($('.min-img-exp .min-img').length - 5))) {
          $(this).addClass('opa0').siblings().removeClass('opa0');
          $(this).css('cursor', 'default');
          return;
        }
        $('.sylr').removeClass('opa0');
        $('.sylr').css('cursor', 'pointer');
        $('.min-img-exp').css({
          'left': $('.min-img-exp').position().left - ($('.min-img-exp').width() / $('.min-img-exp .min-img').length)
        });
      }
      setTimeout(function() {
        $('.sylr').removeClass('moving');
      }, 300);
    });
  });
})(jQuery);


/**
 * 回到顶部按钮
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
// (function($) {

//   /**
//    * 滚动显示“回到顶部”按钮
//    * @return {[type]} [description]
//    */
//   function goTop() {
//     $(window).scroll(function(e) {
//       // 开始显示按钮的距离
//       if ($(window).scrollTop() > 985) {
//         // 渐显时间
//         $("#goTop").fadeIn(300);
//       } else {
//         // 渐隐时间
//         $("#goTop").fadeOut(300);
//       }
//     });
//   };

//   $(function() {
//     $("#goTop").click(function(e) {
//       $('body,html').animate({
//         scrollTop: 0
//       }, 500);
//     });
//     // $("#goTop").mouseover(function(e) {
//     //   $(this).css("background", "url(images/backtop2013.png) no-repeat 0px 0px");
//     // });
//     // $("#goTop").mouseout(function(e) {
//     //   $(this).css("background", "url(images/backtop2013.png) no-repeat -70px 0px");
//     // });
//     goTop();
//   });
// })(jQuery);


/**
 * [onresize description]
 * @return {[type]} [description]
 */
window.onresize = function() {
  $('.min-img-exp').css({
    'left': 0
  });
};


/**
 * IE8提示框
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
(function($) {
  $(document).ready(function() {
    $('.ie-box2-btn').click(function() {
      $(document.body).css({"overflow-x": "auto", "overflow-y": "auto"});
      $('#ie-cover').addClass('dn');
      $('header').removeClass('ie-dn');
    });
  });
})(jQuery);

/**
 * to be continued
 */