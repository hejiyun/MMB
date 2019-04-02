$(function () {
     var id = getUrlParam('brandTitleId')
     $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbrandproductlist',
        data:{
            brandtitleid: id || 1,
            pagesize:4
        },
        dataType:'json',
        success: function (info) {
            console.log(info)
            $('.xiaoliang_tpl').html(template('xiaotpl',info))
        }
    })
     function changetext() {
        var brandTitle = getUrlParam('brandTitle')
        var  name= {
            name :brandTitle
         }
         $('.daohang').html(template('dhtpl',{info:name}))
         var pinpai = brandTitle.split('十',1)[0]
         var brandtext = {
             brandtext: pinpai
         }
         $('.nav').html(template('wenzitpl',{info:brandtext}))
         $('.nav2').html(template('wenzitpl2',{info:brandtext}))
         $('.nav3').html(template('wenzitpl3',{info:brandtext}))
     }
   
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbrand',
        data:{
            brandtitleid: id || 1
        },
        dataType:'json',
        success: function (info) {
            $('.brand_tpl').html(template('tpl',info))
        }
    })
   
  
   
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getproductcom',
        data:{
            productid:0
        },
        dataType:'json',
        success: function (info) {
            $('.comment_tpl').html(template('commenttpl',info))
        }
    })
    setTimeout(function(){
        $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbrandproductlist',
        data:{
            brandtitleid: id || 1,
            pagesize:4
        },
        dataType:'json',
        success: function (info) {
            $('.xuanran').html(template('xuanrantpl',info))
        }
    })
      },0)
      changetext()
  })