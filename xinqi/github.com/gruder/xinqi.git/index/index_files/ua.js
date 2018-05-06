/**
 * PC端和移动端跳转
 */
(function() {
  function isMobile() {
    return /mobile|android|iphone|ipad|ipod|symbian|windows phone|blackberry|iemobile|webos/i.test(
      window.navigator.userAgent.toLowerCase()
    );
  }

  if (isMobile()) {
    if (window.location.pathname.indexOf('/m/') == -1) {
      window.location.href = '/m/index.html';
    }
  } else {
		if (window.location.pathname.indexOf('/m/') != -1) {
      window.location.href = '/index.html';
		}
  }
})();


// function IsPC() {
//   var userAgentInfo = navigator.userAgent;
//   var Agents = [
//     'Android',
//     'iPhone',
//     'SymbianOS',
//     'Windows Phone',
//     'iPad',
//     'iPod',
//   ];
//   var flag = true;
//   for (var v = 0; v < Agents.length; v++) {
//     if (userAgentInfo.indexOf(Agents[v]) > 0) {
//       flag = false;
//       break;
//     }
//   }
//   return flag;
// }
// if (IsPC()) {
//   if (window.location.pathname.indexOf('/m/') != -1)
//     window.location.href = 'http://www.intellif.com/';
// } else {
//   if (window.location.pathname.indexOf('/m/') == -1)
//     window.location.href = 'http://www.intellif.com/m/';
// }
