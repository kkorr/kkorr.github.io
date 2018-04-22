		if($(".bg-container-youtube").is(':visible')){

    if($(window).width() >= 1200){

        $('.player').mb_YTPlayer();

    }

    else{

        $(".bg-container-youtube").backstretch([

            "asad-atoll-biology-169191.jpg",		//-- CHANGE WITH YOUR IMAGE URL

            "beautiful-blur-bracelet-313702.jpg"

            ],{

            duration:6000,

            fade:'normal'

        });

    }

}



 $('#play-video').on('click', function(ev) {

 

    $("#video")[0].src += "&autoplay=1";

    ev.preventDefault();

 

  });
