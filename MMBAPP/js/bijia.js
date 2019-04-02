$(function () {
    var id = getUrlParam('productId')
    var categoryid = getUrlParam('categoryid')
    var brandname = getUrlParam('brandName')
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorybyid',
        data:{
            categoryid : categoryid
        },
        dataType: 'json',
        success: function (info) {
            var category = info.result[0].category
           var rows = {
               category: category || '电视',
               brandName: brandname || '乐视'
           }
           console.log(rows)
           $('.daohang').html(template('dhtpl',{info:rows}))
        }
    })
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getproduct',
        data:{
            productid: id || 1
        },
        dataType:'json',
        success: function (info) {
            $('.xuanran').html(template('tpl',info))
        }
    })
    
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getproductcom',
        data:{
            productid: id || 1
        },
        dataType:'json',
        success: function (info) {
            $('.comment_ul').html(template('commenttpl',info))
        }
    })
})