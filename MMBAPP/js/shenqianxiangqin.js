$(function () {
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
        data:{
            productid: 20
        },
        success: function (info) {
            console.log(info)
            $('.product_tpl').html(template('tpl',info))
        }
    })
})