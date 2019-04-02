function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) {
    return decodeURI(r[2]);
    }
    return null;
}



function setFont() { 
    let window_width = window.innerWidth; 
    let font_size = parseFloat(window_width / 10); 
    $('html').css('font-size', font_size); 
    }
    
    $(window).on('resize', function () { 
    setFont(); 
    });
