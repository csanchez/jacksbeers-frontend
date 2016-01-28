$( document ).ready(function() {


	var scrollVelocity=4500;
/*
  if(window.innerWidth >=1500){
    alert("extrabig");
    $("#presentation-image").append("<img class='img-responsive centered-image' src='/assets/pergamino-xlg.png' alt='Card image cap' style='width: 100%; '>");
  }else{
    if(window.innerWidth > 1200 && window.innerWidth < 1500 ){
      $("#presentation-image").append("<img class='img-responsive centered-image' src='/assets/pergamino-lg.png' alt='Card image cap' style='height: 50%; '>");
    }else{
      if(window.innerWidth > 768 && window.innerWidth < 1200 ){
        $("#presentation-image").append("<img class='img-responsive centered-image' src='/assets/pergamino-md.png' alt='Card image cap' style='width: 100%; '>");
      }else{
        $("#presentation-image").append("<img class='img-responsive centered-image' src='/assets/pergamino-xs.png' alt='Card image cap' style='width: 100%; '>");   
      }
    }
    
  }

  $( window ).resize(function() {
    if(window.innerWidth >=1500){
      $("#presentation-image").html("");
      $("#presentation-image").append("<img class='img-responsive centered-image' src='/assets/pergamino-xlg.png' alt='Card image cap' style='width: 100%; '>")
    }else{
      if(window.innerWidth > 1200 && window.innerWidth < 1500 ){
        $("#presentation-image").html("");
        $("#presentation-image").append("<img class='img-responsive centered-image' src='/assets/pergamino-lg.png' alt='Card image cap' style='width: 100%; '>");
      }else{
        if(window.innerWidth > 768 && window.innerWidth < 1200 ){
          $("#presentation-image").append("<img class='img-responsive centered-image' src='/assets/pergamino-md.png' alt='Card image cap' style='width: 100%; '>");
        }else{
          $("#presentation-image").append("<img class='img-responsive centered-image' src='/assets/pergamino-xs.png' alt='Card image cap' style='width: 100%; '>");   
        }
      }
      
    }
  });

*/
	
	$("#services-jump").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#services-section").offset().top -100
	    }, scrollVelocity);
	});   

	$("#home-jump").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#home-section").offset().top -100
	    }, scrollVelocity);
	}); 
	$("#about-jump").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#features-section").offset().top -100
	    }, scrollVelocity);
	}); 


	$("#contact-jump").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#contact-section").offset().top -100
	    }, scrollVelocity);
	});  	


	$(".flip").hover(function(){
  $(this).find(".flip-card").toggleClass("flipped");
  return false;
});


  $("#owl-beers").owlCarousel({
 
      //autoPlay: 3000, //Set AutoPlay to 3 seconds
	navigation: true,
	navigationText: [
      "<i class='icon-chevron-left icon-white'> < </i>",
      "<i class='icon-chevron-right icon-white'> > </i>"
      ],
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });

  $("#owl-packs").owlCarousel({
 
      //autoPlay: 3000, //Set AutoPlay to 3 seconds
	navigation: true,
	navigationText: [
      "<i class='icon-chevron-left icon-white'> < </i>",
      "<i class='icon-chevron-right icon-white'> > </i>"
      ],
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });

  if($(".notice").text()!=""){
    $.notify(
  {
    icon: 'glyphicon glyphicon-star',
    message: $(".notice").text(),
  },{
    // settings
    element: 'body',
    animate: {
      enter: 'animated fadeInDown',
      exit:  'animated fadeOutUp'
    },
     delay: 2000}
  );
  }
  

/*
  
  $("#card-flip").flip();

 // $('#nav-affix').affix({});
 var offset = 300;
    var duration = 200;
    $(".content-collumn").scroll(function() {
      
        if ($(".content-collumn").scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });
    
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })*/

    
});




function showBackButton(){
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
}

