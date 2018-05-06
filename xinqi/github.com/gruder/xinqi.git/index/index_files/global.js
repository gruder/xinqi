function getUuid() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}
function setCenter(className,flag){
	var _flag = flag||false;
	if(!_flag){
		if(typeof className == 'string'){
			var $this = $('.'+className);
			var top = ($this.parent().height()-$this.height())/2;
			var left = ($this.parent().width()-$this.width())/2;
			$this.css({top:top,left:left});
		}else if(typeof className == 'object'){
			for(var i = 0;i<className.length;i++){
				var $this = $('.'+className[i]);
				var top = ($this.parent().height()-$this.height())/2;
				var left = ($this.parent().width()-$this.width())/2;
				$this.css({top:top,left:left});
			}
		}
	}else{
		if(typeof className == 'string'){
			if($(window).height()<800){
				var $this = $('.'+className);
				$this.height($(window).height()-$('#menu-box').height()-20);
				$this.width($(window).width()*0.96);
				var top = ($this.parent().height()-$(window).height())/2;
				top += $('#menu-box').height();
				var left = ($this.parent().width()-$this.width())/2;
				$this.css({top:top,left:left});
			}else{
				var $this = $('.'+className);
				$this.height($(window).height()*0.8);
				$this.width($(window).width()*0.96);
				var top = ($this.parent().height()-$this.height())/2;
				var left = ($this.parent().width()-$this.width())/2;
				$this.css({top:top,left:left});
			}
				
		}else if(typeof className == 'object'){
			for(var i = 0;i<className.length;i++){
				var $this = $('.'+className[i]);
				var top = ($this.parent().height()-$this.height())/2;
				var left = ($this.parent().width()-$this.width())/2;
				$this.css({top:top,left:left});
			}
		}	
	}
}
function setVideoCenter(className){
	if(typeof className == 'string'){
		var $this = $('.'+className);
		var top = ($(window).height()-$this.height())/2;
		var left = ($(window).width()-$this.width())/2;
		$this.css({top:top,left:left});
	}else if(typeof className == 'object'){
		for(var i = 0;i<className.length;i++){
			var $this = $('.'+className[i]);
			var top = ($(window).height()-$this.height())/2;
			var left = ($(window).width()-$this.width())/2;
			$this.css({top:top,left:left});
		}
	}
}
function loadTo(number,step,DomId,loopTime,btnId){		//计算加载百分比
	var number_ = number||100;
	var num = 0;
	var step_ = step||1;;
	if(number_>0){
		window.loopLoading = setInterval(function(){
			num+=step_;
			num >= number_?num = number_:num = num;
			$('#'+DomId).html(num);
			if(btnId){
				$("#"+btnId).css({'background':'linear-gradient(to right,black 0%,black '+num+'%,transparent '+num+'%,transparent 100%)'});
			}else{
			}
			if(num>=number_){
				clearInterval(loopLoading);
			}
		},loopTime);
	}
}
function newCircle(x,y,r,color,domId){    //增加一个圆节点
	var temp = "<div class='addCircle' style='display:none;position:absolute;"+
				"bottom:"+(y-r)+"px;left:"+(x-r)+"px;width:"+2*r+"px;"+
				"height:"+2*r+"px;border-radius:50%;background:"+color+"'></div>";
	$('#'+domId).append(temp);
	$('#'+domId).find('.addCircle').fadeIn();
}
function drawCircle(x,y,outR,inR,outColor,inColor,domId,timeOut){   //在canvas上画圆
	setTimeout(function(){
		var R = 0,r = 0;
		var Canvas = document.getElementById(domId);
		if(Canvas.getContext){
			var lctx = Canvas.getContext('2d');
			var circleid = 'circleId-'+getUuid();
			circleid = setInterval(function(){
				if(R+1 >= outR)clearInterval(circleid);
				R += 1,r += 1;
				R>=outR?R = outR:R;
				r>=inR?r = inR:r;
				lctx.clearRect(x-outR,y-outR,outR*2,outR*2);
				lctx.beginPath();
				lctx.arc(x,y,R,R,360,false);
				lctx.fillStyle='rgba(0,0,255,0.5)';
				lctx.fill();
				lctx.closePath();
				lctx.beginPath();
				lctx.arc(x,y,r,r,360,false);
				lctx.fillStyle='rgba(0,0,255,0.8)';
				lctx.fill();
				lctx.closePath();
			},20);
		}
	},timeOut);
}
function typeWriter(msg,domId,timeOut){   //打字机
	setTimeout(function(){
		var _msg = msg;
	    var seq = 0;
	    var speed = 30;//打字速度
	    var type = function(){
	    	//console.log(_msg.substring(0,seq));
		    document.getElementById(domId).innerHTML = _msg.substring(0,seq);
			if (seq == _msg.length) {
		  		seq = 0;
		   		clearTimeout(t);
			}
			else {
		 		seq++;
		 		var t = setTimeout(function(){type()},speed);
			}
		}
		type();
	},timeOut)
}

function loadMap (domId,x,y,zIndex) {
	//加载地图
	var map = new BMap.Map(domId);    // 创建Map实例
	var point = new BMap.Point(x,y);
	map.centerAndZoom(new BMap.Point(x,y), zIndex);  // 初始化地图,设置中心点坐标和地图级别
	//map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	map.setCurrentCity("深圳");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	//map.setMapStyle({style:'grayscale'});
	//创建小图标
	var marker = new BMap.Marker(point);// 创建标注
	map.addOverlay(marker);             // 将标注添加到地图中
	marker.disableDragging();           // 不可拖拽
	map.disableScrollWheelZoom();   //禁用滚轮放大缩小
}
//loadMap ('mapContainer',114.102244,22.548459,17);