$(function(){

    $('.slid').slick({
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 200,
        responsive:[

            {
            breakpoint: 480,
            settings: {
				
                slidesToShow: 2,
                
                        slidesToScroll: 1,
                
                        infinite: true,
                
                        dots: true
            
                     }
            }

        ]
    });
})
