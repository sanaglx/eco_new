  $(function ($) {
	$(".sltop").owlCarousel({
		//center:true,
		//loop:true,
		//autoplay: false,
		stagePadding:0,
		items: 4,
        margin: 20,
		dots: false,
		nav: false,
		navText: ["<i class='news-str-left' aria-hidden='true'><img src='img/ico/left.svg'></i>", 
				"<i class='news-str-right' aria-hidden='true'><img src='img/ico/right.svg'></i>"],
		responsive : {
			0 : {
				autoWidth:true,
				loop:true,
				items: 2,
			},
			370 : {
				autoWidth:true,
				loop:true,
				items: 2,
			},
			480 : {
				autoWidth:true,
				loop:true,
				items: 2,
			},
			570 : {
				autoWidth:true,
				loop:true,
				items: 2,
			},
			670 : {
				autoWidth:true,
				loop:true,
				items: 3
			},
			992 : {
                autoWidth:true,
				loop:true,
				items: 5,
			},
			1260 : {
				autoWidth:true,
				loop:true,
				items: 5,
			},

			1450:{
                //stagePadding:160,
				items: 5,
			},
			1800 : {
                //stagePadding:260,
				items: 5,
			},


		}
	});

	$(".slider2").owlCarousel({
		//center:true,
		stagePadding:0,
		loop:true,
		items: 1,
        margin: 20,
		//autoplay: true,
		dots: true,
		nav: false,
		navText: ["<i class='news-str-left' aria-hidden='true'><img src='img/ico/left.svg'></i>", 
				"<i class='news-str-right' aria-hidden='true'><img src='img/ico/right.svg'></i>"],
				responsive : {
					0:{
						dots:false,
						nav: true,						
					},
					768 : {
						dots: true,
						nav: false,
					},
				}
	});

	$(".owl-news").owlCarousel({
		//center:true,
		stagePadding:280,
		loop:true,
		items: 4,
        margin: 20,
		//autoplay: false,
		dots: false,
		nav: false,
		navText: ["<i class='news-str-left' aria-hidden='true'><img src='img/ico/left.svg'></i>", 
				"<i class='news-str-right' aria-hidden='true'><img src='img/ico/right.svg'></i>"],
		responsive : {
			0 : {
				//center:true,
				stagePadding:20,
				items: 1,
			},
			370 : {
				center:true,
				stagePadding:50,
				items: 1,
			},
			480 : {
				//center:true,
				stagePadding:100,
				items: 1,
			},
			570 : {
				//center:true,
				stagePadding:120,
				items: 1,
			},
			670 : {
				//center:true,
				stagePadding:15,
				items: 2
			},
			992 : {
                stagePadding:160,
				items: 2,
			},
			1260 : {
				items: 2,
			},

			1450:{
                stagePadding:160,
				items: 3,
			},
			1800 : {
                stagePadding:320,
				margin: 48,
				items: 3,
			},
			2000 : {
				items:3,
			}
		}
	});
  
  })

function theRotator(){
	$('.bkg-heder-sl__el').css({opacity: 0.0});
	$('.bkg-heder-sl__el:first').css({opacity: 1.0}).addClass('show');
}

	$('body').on('click','.elem',function (e,i) { 
		if($(document).width() < 1201){return false;}
		var t = $(this);
		var a = $(this).attr('data-el');
		var b = $('.bkg-heder-sl__el.show').attr('data-el');
		current = $('.bkg-heder-sl__el.show');
		$('.elem').removeClass('active');
		t.addClass('active');

		$('.bkg-heder-sl__el[data-el='+a+']')
			.addClass('show')
			.animate({opacity: 1.0}, 1000);
		
		$('.main-str').removeClass('show');	
		$('.main-str[data-el='+a+']').addClass('show');	

		if(a!=b){
			current.animate({opacity: 0.0}, 1000)
			.removeClass('show').removeClass('active');
		}
	

	});

	$(document).resize(function(){
		if($(document).width() < 1201){
			$('.elem').removeClass('active');
		}else{
			theRotator();
		}
	})

	$(document).ready(function() {	
		//прокрутка фиксировать 	
		$(window).scroll(function(){
			var st = $(window).scrollTop();
			  if(st>100){
				$('.top-down').addClass("fix");
				$('.eml-text').addClass("fix");
			  }else{
				$('.top-down').removeClass("fix");
				$('.eml-text').removeClass("fix");
			  }
		});

		//вверх
		$('body').on('click', '.top-down', function (e) {
			$("body,html").animate({
			scrollTop: 0
			}, 800); 
			//$(this).hide();
			return false;
		});

		


	});

