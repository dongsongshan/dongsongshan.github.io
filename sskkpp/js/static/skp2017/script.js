$(function(){

// loading
    var arrImglist = [
         "../../images/static/skp2017/bg1.jpg",
         "../../images/static/skp2017/bg2.jpg",
         "../../images/static/skp2017/1.png",
         "../../images/static/skp2017/2.png",
         "../../images/static/skp2017/3.png",
         "../../images/static/skp2017/4.png",
         "../../images/static/skp2017/5.png",
         "../../images/static/skp2017/6.png",
         "../../images/static/skp2017/7.png",
         "../../images/static/skp2017/8.png",
         "../../images/static/skp2017/9.png",
         "../../images/static/skp2017/10.png",
         "../../images/static/skp2017/11.png",
    ];
    var load = new Load(fnLoading,fnLoadcomplete,arrImglist,20);

    
    setTimeout(function(){
      load.Start()
    },2500)

    function fnLoadcomplete(){
     $('.loading').fadeOut(1200);
     // frontShow()
     swiperAnimateCache(mySwiper); //隐藏动画元素
     swiperAnimate(mySwiper);
    };

  function fnLoading(p){
     $('.okok').css({'width':p*200+'px'});
  };

  //初始化整个大页面的swiper
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    paginationClickable: true,
    slidesPerView : 'auto',
    centeredSlides : true,
    watchSlidesProgress: true,
    observer:true,
    onProgress: function(swiper){
                  for (var i = 0; i < swiper.slides.length; i++){
                  var slide = swiper.slides[i];
                  var progress = slide.progress;
                  scale = 1 - Math.min(Math.abs(progress * 0.2), 1);
                  es = slide.style;
                  es.opacity = 1 - Math.min(Math.abs(progress/5),1);
                  es.zIndex = scale*100;
                  //es.webkitTransformStyle = es.webkitTransformStyle = 'preserve-3d',
                  es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'scale('+ scale +')';
                  es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate(0,'+(-Math.abs(progress*250))+'px) scale('+ scale +')';
                  }
              },
     onSetTransition: function(swiper, speed) {
                      for (var i = 0; i < swiper.slides.length; i++) {
                      es = swiper.slides[i].style;
                      es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
                      }
                },
    onTransitionEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
  })
  //watch swiper
  var mywatch = new Swiper ('.swiper-container-watch', {
    direction: 'horizontal',
    paginationClickable: true,
    slidesPerView : 'auto',
    centeredSlides : true,
    watchSlidesProgress: true,
    // loop:true,
    observer:true,

    onSlideNextStart: function(swiper){
      var index = (swiper.activeIndex)%4;
      if(index==0){
        next();
      }
      point(index);

    },
    onSlidePrevStart: function(swiper){
      var index = (swiper.activeIndex)%4;
      if(index==3){
        prev();
      }
      point(index);
    },
    onTransitionStart: function(swiper){
      var index = swiper.activeIndex;
      // console.log(index);
      $('.plus').attr('data-watch',index)
    }



  })
// tip
$('.tip-bg').bind('click', function() {
  $(this).hide();
});

$('.plus').bind('click',function(){
  var xqIndex = $(this).attr('data-watch');
  xqIndex = parseInt(xqIndex);
  $('.xq-list ul li').eq(xqIndex).show();
  $('.swiper-container').hide();
})

// back
$('.back').bind('click', function() {
  $(this).parent('li').hide();
  $('.swiper-container').show();

});

  // // GUN START
    var obj   = $('#listPlay ul');
    var inow = 0;
    var total = $('#listPlay ul').length;
    var onOff = true;

    var $list = $('.watch-box-inner');

    $('.next').bind('click',next);

    $('.prev').bind('click',prev);

    // 检查inow是否在第一页或者最后一页,从而判断是否隐藏next和prev
    function checkInow(i){
      if(i==0){
        $('.prev').hide();
      }else{
        $('.prev').show();
      }

      if(i == total-1){
        $('.next').hide();
      }else{
        $('.next').show();
      }
    }

    // 下一页
    function next(){
      if(!onOff){return;}
      onOff = false;
        inow++;
      checkInow(inow);
      var ele = obj.eq(inow);
      // 添加ul，滚动，删除ul，改变left
      $list.append(ele);
      $list.animate({'left': -533+'px'},function(){
        $(this).css({'left': '0px'});
        $(this).find('ul:first').remove();
        checkId()
        onOff = true;
      });
    }

    // 上一页
    function prev(){
      if(!onOff){return;}
      onOff = false;
        inow--;
      checkInow(inow);
      var ele = obj.eq(inow);
      // 添加ul，滚动，删除ul，改变left
      $list.css({'left': '-533px'});
      $list.prepend(ele);
      // return;
      $list.animate({'left': '0px'},function(){
        // $(this).css({'left': '0px'});
        $(this).find('ul:last').remove();
        checkId();
        onOff = true;
      });
    }
    // 点击next或者prev时 只有当前的的表的缩略图，有样式
    function checkId(){
      var nowActIndex = $('.plus').attr('data-watch');
      nowActIndex = parseInt(nowActIndex);
      $('.watch-box-inner li').each(function(){
        //所有的li去掉act类
        $(this).removeClass('act');
        var eachIndex = $(this).attr('data-id');
        eachIndex = parseInt(eachIndex)-1;
        if(eachIndex == nowActIndex){
          $(this).addClass('act');
          return;
        }
      })
    }



  $('.watch-box-inner').on('click','li',function(){
    var id = $(this).attr('data-id');
    id = parseInt(id);
    var index=id-1;
    mywatch.slideTo(index, 1000, true); // working
  })


  // 加点
  function point(index){
    $('.watch-box-inner ul').each(function(){
      $(this).find('li').removeClass('act');
      $(this).find('li').eq(index).addClass('act');
    })
  }


music();

function isWeiXin(){ 
  var ua = window.navigator.userAgent.toLowerCase(); 
  if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
  return true; 
  }else{ 
  return false; 
  } 
} 
function music(){
  var audioId=document.getElementById("audio");
  $(".music").addClass("play");
  if(!isWeiXin()){
    $(document).one('touchstart', function (e) {
      e.target.id=="audioBtn"? (!1):( $(".music").addClass("play"),audioId.play());
    })
  }
  
  document.getElementById("audio").play();
  $(".music").bind("mousedown",function(){
      $(this).hasClass("play")?($(this).removeClass("play"),$(this).addClass("init-bg"),audioId.pause()):( $(this).removeClass("init-bg"),$(this).addClass("play"), audioId.play());
  })
}

var GOLBAL = {wxOptions:{title:"珍藏永恒时刻 北京SKP 珠宝腕表节",desc:"北京SKP 黑色风暴 感受腕表传承之经典 匠心独具之永存",imgUrl:"http://www.xbiao.com/images/static/skp2017/weixin_icon_300x300.png"}};
function doWx(){
   var timestamp,nonceStr,signature;
   $.ajax({ url: "http://www.xbiao.com/weiXin/getSignPackage?callback=?",dataType:"jsonp",async:false,data:{url:encodeURIComponent(window.location.href.split('#')[0])},success: function(data){
       timestamp = data.timestamp;
       nonceStr = data.nonceStr;
       signature = data.signature;
       wx.config({
           debug: false,
           appId: 'wx96ccb2373a02f51b',
           timestamp: timestamp,
           nonceStr: nonceStr,
           signature: signature,
           jsApiList: [
           'checkJsApi',
           'onMenuShareTimeline',
           'onMenuShareAppMessage'
           ]
       });
       wx.ready(function () {
           wx.checkJsApi({
             jsApiList: [
               'onMenuShareTimeline',
               'onMenuShareAppMessage'
             ]
           });
           //分享给朋友
           wx.onMenuShareAppMessage({
             title: GOLBAL.wxOptions.title,
             desc: GOLBAL.wxOptions.desc,
             imgUrl: GOLBAL.wxOptions.imgUrl
           });
           //分享到朋友圈
           wx.onMenuShareTimeline({
             title: GOLBAL.wxOptions.title,
             imgUrl: GOLBAL.wxOptions.imgUrl
           });
           document.getElementById("audio").play();//自动播放音乐
       })
   }});
};
//默认微信分享
doWx();

})