var uploader = WebUploader.create({
    auto: true,
    swf: XBIAO_ROOT +'/js/pc/Uploader.swf',
    server: XBIAO_ROOT+'/zone/uploadProductPic',
    pick: '#picker',
    accept: {
        title: 'Images',
        extensions: 'gif,jpg,jpeg,bmp,png',
        mimeTypes: 'image/*'
    },
    // fileVal:'propic',
    // formData:{'PHPSESSID':1}
});
uploader.on( 'fileQueued', function( file ) {
    var $li = $(
            '<li id="' + file.id + '">' +
                '<span><img src="../../images/wap3.0/article/loading.gif"></span>' +
            '</li>'
            ),
        $img = $li.find('img');
        $('.picker-box').before($li);
});
// 文件上传成功，给item添加成功class, 用样式标记上传成功。
uploader.on( 'uploadSuccess', function(file,responseText) {
    var $li  = $( '#'+file.id );
    var $arr = responseText.str.split("|");
    if(responseText.status==1){
       var html = '<span><img src="' + $arr[5] + '"></span>';
       scalePic($(html));
    }else{
       var $li = $( '#'+file.id );
       var html = '<span>' + $arr[9] + '</span>';
    }
    $li.html(html);
});

// 缩放图片
function scalePic(obj){
    var img = obj.find('img');
    // console.log(img.height());
    // console.log(img.width());
    var w = img.width();
    var h = img.height();
    if(w/107-h/80>=0){
        img.attr('width','100%');
        img.attr('height','auto');
    }else{
        img.attr('width','auto');
        img.attr('height','100%');
    }

}




