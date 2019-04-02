$(function () {
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorytitle',
        success: function (info) {
            $('.first_list').html(template('tpl',info))
        }
    })
    $('.first_list').on('click','li.firstli',function () {
        $(this).next('ul').toggleClass('hide')
        $this = $(this).next('ul')
        var id = $(this).data('id')
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getcategory',
            data:{
                titleid: id
            },
            dataType:'json',
            success: function (info) {
                // var htmlstr = template('secondtpl',info)
                // console.log(htmlstr)
                $this.html(template('secondtpl',info))
            }
        })
    })
   
  })