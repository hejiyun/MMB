$(function () {
    /*控制图片懒加载获取对应图片的下标 */
    var n = 0 ;
    /**控制懒加载的滑动高度 */
    var m = 0;
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getinlanddiscount',
        success: function (info) {
            $('.tpl_ul').html(template('tpl',info))
            n = n+ 4
        }
    })


   $(window).on('scroll',function () {
      var length = $('.tpl_ul li').height()
      
      var shen = $(window).height()-$('.mmm_header').height()-$('.mmm-footer').height()
      var st = (length - shen) + length  //四张刚好滑完
      var huadong = st + m*2*length  //  加载后滑动高度的标记
      if ($(window).scrollTop() >= (st + huadong)){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getinlanddiscount',
            success: function (info) {
                info ={
                    result: info.result.slice(n,n+4)
                } 
                $('.tpl_ul').append(template('tpl',info))
                n = n+ 4
                m = m + 1
            }
        })
      }
   })
})