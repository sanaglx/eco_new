var dax = new DynamicAdapt("max");  
dax.init();

$(function($){
 $('.menu>li>a').hover(function(){
     // 
 })  
 $('.menu>li>a').hover(function(){
    $('.sbm').removeClass('active') 
    var a = $(this), d = 0, w = 0
    a.addClass('active');
    d = $(this).offset().left;
    w =1920 - $(window).innerWidth()
    d=d+w*0.5
    console.log(d)
    console.log($(window).innerWidth())
    a.parent().find('.submenu').css('width','calc(100vw - '+ d +'px)')
 },
 function(){
    // $('.sbm').removeClass('active');
 })



})

$('body').on('mouseleave','.submenu', function(){
        $('.sbm').removeClass('active')
     }
 );