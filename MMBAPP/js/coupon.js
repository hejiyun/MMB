$(function () {
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcoupon',
        success: function (info) {
            console.log(info)
            $('.tpl_ul').html(template('tpl',info))
        }
    })
})