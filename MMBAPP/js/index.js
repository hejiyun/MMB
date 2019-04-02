$(function () {

  $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getindexmenu',
      success: function (info) {
          $('.category ul').html(template('tpl',info))
          $this = $('.category ul li')
           var $that = []
        $this.each(function (index,item) {
            if( index > 7) {
              $(item).addClass('hide')
              $that.push(item)
            }
            if( index === 7){
              $(item).click(function () {
                $that.forEach(function(item,index){
                  $(item).toggleClass('hide')
                })
              })
            }
        })
      }
  })
  $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getmoneyctrl',
      success: function (info) {
          $('.product ul').html(template('producttpl',info))
      }
  })

})