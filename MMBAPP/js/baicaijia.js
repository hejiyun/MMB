$(function () {
    var id = getUrlParam('titleId')
   
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
        success: function (info) {
            $('.nav_ul').html(template('titletpl',info))
            $('.nav_ul li').each(function (index,item) {
                if(index == id){
                    $(item).children('a').addClass('br')
                }
            })
        }
    })
    
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
        data:{
            titleid: id  || 0
        },
        dataType:'json',
        success: function (info) {
            console.log(info)
            $('.main_ul').html(template('maintpl',info))
        }
    })
})