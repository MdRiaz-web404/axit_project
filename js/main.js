//smooth scroll
$('nav .logo a,nav #menubar ul li a').on('click',function(){
    $('html,body').animate({
        scrollTop:$($.attr(this,'href')).offset().top
    },1000);
    return false
});