

  $(function ($) {
	$(".owl-news").owlCarousel({
		//center:true,
		stagePadding:260,
		loop:true,
		items: 4,
        margin: 20,
		//autoplay: false,
		dots: false,
		nav: true,
		navText: ["<i class='news-str-left' aria-hidden='true'><img src='img/ico/left.svg'></i>", 
				"<i class='news-str-right' aria-hidden='true'><img src='img/ico/right.svg'></i>"],
		responsive : {
			0 : {
				center:true,
				stagePadding:15,
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
                stagePadding:260,
				items: 3,
			},
			2000 : {
				items:3,
			}
		}
	});
  })
