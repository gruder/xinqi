/**
 * 功能：主页底部“媒体动态”文字描述截断显示
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
(function($) {
  $(document).ready(function() {
    $('.new-text').each(function() {
      //限制字符个数
      var maxwidth = 65;

      if ($(this).text().length > maxwidth) {
        $(this).text($(this).text().substring(0, maxwidth));
        $(this).html($(this).html() + '...');
      }
    });
  });
})(jQuery);

/**
 * 首页背景图lazyload
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
(function($) {
  $(document).ready(function() {
    var img = new Image();
    img.src = '../img/index/sybg.jpg';
    $(img).load(function() {
      var bgsrc = 'url("' + img.src + '")';
      $('.subheader-section').css({
        'background-image': bgsrc,
        'background-size': '100% 100%',
      });
      $('.subheader-section').removeClass('bg-center');
      $('.subheader-section .subheader').removeClass('dn');
      $('.subheader-section h2').addClass('');
      $('#main-title').addClass('main-title');
    });
  });
})(jQuery);

// TODO
// (function($) {
//   $(function() {
//     // $('#main-title').addClass('dn');
//     $('#video').on('ended', function() {
//       $('.video-container').fadeOut(600, function() {
//         // $('.subheader-section').removeClass('dn');
//         // $('#main-title').removeClass('dn');
//         $('#main-title').addClass('main-title');
//       });
//     });
//   });
// })(jQuery);
