$(document).ready(function(){
	
/* search */	
$('.search-open').on('click', function(){
	$('.search-inside').fadeIn();
});
$('.search-close').on('click', function(){
	$('.search-inside').fadeOut();
});		

 $('#mobile-menu').meanmenu({
	 meanMenuContainer: '.mobile-menu-area',
	 meanScreenWidth: "767"
 });

/* slider-active */	
$('.slider-active ').owlCarousel({
    loop:true,
    nav:true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/* mixItUp */
$('#Container').mixItUp();

$('.image-link').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});
$('.testimonial-active').owlCarousel({
    loop:true,
    nav:true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
$('.blog-active').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
/* brand-active */
$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.counter').counterUp(900);

})