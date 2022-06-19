function cv(tt){
    console.log(tt)
    if(tt<340){
        $('.eml-text').removeClass('fix')  
    }else{
        $('.eml-text').addClass('fix') 
    }
}

$(document).ready(function () {
  // console.log($('.page-top').height())
   cv($('.eml-text').position().top)
    if ($('.eml-text').css('background-color') == 'rgb(173, 216, 230)') {
        alert("matched");
    }
})

$(document).scroll(function(){
    cv(window.pageYOffset+$('.eml-text').position().top)
})
