$(function () {
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getgsshop',
        dataType:'json',
        success: function (info) {
            $('.nav1 ul').html(template('tpl',info))
        }
    })
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getgsshoparea',
 
        dataType:'json',
        success: function (info) {
            $('.nav2 ul').html(template('tpl1',info))
        }
    })
   
    $('.ca').on('click',function () {
       var  $this = $(this)
       $this.parent().siblings().children('ul').addClass('hide')
       $this.next('ul').toggleClass('hide')
    })
    $('.second').on('click','li', function () {
        /* 当点击li的时候,将li的文本内容赋值给a,并且将data-id的值赋值给a,  然后通过提取a的data-id的值来确定渲染的参数*/
       var  $this = $(this)
        var val = $this.text()
         var id = $this.data('id')
         var arr = []
       $this.parent().prev('a').text(val.slice(0,4)+'▲')
       $this.parent().prev('a').data('id',id)
       $this.parent().addClass('hide')
       $('.ca').each(function (index,item) {
           if(index != $('.ca').length-1) {
            arr.push($(item).data('id'))
           }
       })
      render(arr[0],arr[1])
    })
    render()
    function render(shopid,areaid) {
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getgsproduct',
            data:{
                shopid: shopid || 1,
                areaid: areaid || 1
            },
            dataType:'json',
            success: function (info) {
                $('.product_tpl').html(template('producttpl',info))
            }
        })
    }
 
 
})