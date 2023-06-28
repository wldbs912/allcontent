$(function(){
    function mobile2(){
        $(".pofomobile > .pofomobile_box > ul").stop().animate({marginTop:-522},function(){
        $(".pofomobile > .pofomobile_box > ul > li:first").appendTo(".pofomobile > .pofomobile_box > ul")
        $(".pofomobile > .pofomobile_box > ul").css({marginTop:0})
        })
    }
    setInterval(mobile2,3000);
})