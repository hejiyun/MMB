$(function () {
    var id = getUrlParam('couponId')
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcouponproduct',
        data:{
            couponid: id || 0
        },
        dataType:'json',
        success: function (info) {
            $('.tpl_ul').html(template('tpl',info))
        
        }
    })
  $('.close').on('click', function () {
      $(this).parent().toggleClass('hide')
  })
  $('.tpl_ul').on('click','li',function () {
    $('.showpic').toggleClass('hide')
     var Id = $(this).data('id')
     $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcouponproduct',
        data:{
            couponid: id || 0
        },
        dataType:'json',
        success: function (info) {
            var rows = info.result[Id]
            $('.imgBox').html(template('tpl1',{info: rows}))
        
        }
    })


  })


})