$(function () {
    var id = getUrlParam('categoryId')
    var name = getUrlParam('category')
    
      name = {
          name: name || '电视'
      }
    $('.daohang').html(template('dhtpl',{info:name}))

  render(1)

   $('.sorter_select').on('change',function () {
       var text = $(this).val()
       var pageid = ($(this).val().split('/',1))[0]
      render(pageid,text)
   })

   $('.sorter_preBtn').on('click',function () {
        var text =  $('.sorter_select').val()
        var pageid = (text.split('/',2))[0]-1
        if( pageid <= 0){
            return
        }
        text = pageid + '/'+ text.split('/',2)[1]
            render(pageid,text)
   })
   $('.sorter_nextBtn').on('click',function () {
        var text =  $('.sorter_select').val()
        var pageid = (text.split('/',2))[0]-0+1
          var length = (text.split('/',2))[1]
        if( pageid > length){
            return
        }
        text = pageid + '/'+ text.split('/',2)[1]
        render(pageid,text)
   })
  
   function render (pageid,text) {
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getproductlist',
        data:{
            categoryid: id || 0,
            pageid: pageid || 1,
        },
        success: function (info) {
            console.log(info)
            $('.product_tpl').html(template('tpl',info))
            var arr = []
            var b = Math.ceil(info.totalCount/info.pagesize)
                for ( var i = 1 ; i <= b ; i++) {
                  str = i+'/'+ b 
                   arr.push(str)      
                }
            $('.sorter_select').html(template('fytpl',{info:arr}))
            if(text){
                $('.sorter_select').val(text)
            }
            
        }
    })  

   }






  })
