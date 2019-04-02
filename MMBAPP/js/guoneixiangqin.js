$(function () {
    var id = getUrlParam('productId')
    console.log(id)
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
        data:{
            productid: id || 20
        },
        dataType:'json',
        success: function (info) {
            console.log(info)
            $('.product_tpl').html(template('tpl',info))
        }
    })
})