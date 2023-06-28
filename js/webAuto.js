$(function(){
    // 인터파크
    $("#interpark_box").mouseenter(function(){
        $("#interpark > li").stop().animate({marginTop:"-572px"},2500)
    }).mouseleave(function(){
        $("#interpark > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // shoopen
    $("#shoopen_box").mouseenter(function(){
        $("#shoopen > li").stop().animate({marginTop:"-1600px"},2500)
    }).mouseleave(function(){
        $("#shoopen > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // exhibiz
    $("#exhibiz_box").mouseenter(function(){
        $("#exhibiz > li").stop().animate({marginTop:"-2950px"},2500)
    }).mouseleave(function(){
        $("#exhibiz > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // banchan
    $("#banchan_box").mouseenter(function(){
        $("#banchan > li").stop().animate({marginTop:"-1850px"},2500)
    }).mouseleave(function(){
        $("#banchan > li").stop().animate({marginTop:"0px"},3000)
    })
})