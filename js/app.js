	// Parallax feature
	$('section[data-type="content"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
     	// invoked as the user begins scrolling
        $(window).scroll(function() {
        	// $window.scrollTop() returns how much the user has scrolled up
        	// It will be negative as we need to move it in the opposite direction of the user's scroll. 
        	// Example: let's assume that the browser window has scrolled 57px and the speed is 10. This means 57px divided by 10 = 5.7px.

            var yPos = -$(window).scrollTop() / $bgobj.data('speed'); 
             
            // Set final background position: x and y coords
            // xPosition = 50%
            var coords = '50% '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    

	// Daily and weekly calendar images under "web development work"
	var images1 = new Array ('img/genee_homepage.jpg', 'img/genee_signup.jpg', 'img/genee_edit_1.png', 'img/genee_edit_2.png', 'img/genee_edit_3.png', 'img/genee_meeting_status.png', 'img/genee_meeting_status_2.png', 'img/genee_schedule_calendar.png', 'img/genee_confirm_time.jpg', 'img/genee_userDashboard.png');

	// DashUp app images under "web development work"
	var images2 = new Array ('img/dashrecruit.png', 'img/dashrecruit_2cols.png', 'img/dashrecruit_landing.png');

	// HackerDojo reservation app images under "web development work"
	var images3 = new Array ('img/genee_weekly_calendar.jpg', 'img/genee_daily_calendar.jpg');

	// Insurance Selector tool images  under "web development work"
	var images4 = new Array ('img/ins_selector_1.jpg', 'img/ins_selector_2.jpg', 'img/ins_selector_3.jpg', 'img/ins_selector_3b.jpg', 'img/ins_selector_4.jpg');

	// Carousel images  under "web development work"
	var images5 = new Array ('img/carousel_1.jpg', 'img/carousel_2.jpg', 'img/carousel_3.jpg', 'img/carousel_4.jpg');
	
	var index1 = 1;
	var index2 = 1;
	var index3 = 1;
	var index4 = 1;


	function rotateImage1($elem, image_array)
	{
	  $elem.fadeOut('fast', function()
	  {
	    $(this).attr('src', image_array[index1]);
	    $(this).fadeIn('fast', function()
	    {
	      if (index1 == image_array.length-1) {
	        index1 = 0;
	      } else {
	        index1++;
	      }
	    });
	  });
	}

	function rotateImage2($elem, image_array)
	{
	  $elem.fadeOut('fast', function()
	  {
	    $(this).attr('src', image_array[index2]);
	    $(this).fadeIn('fast', function()
	    {
	      if (index2 == image_array.length-1) {
	        index2 = 0;
	      } else {
	        index2++;
	      }
	    });
	  });
	}


	function rotateImage3($elem, image_array)
	{
	  $elem.fadeOut('fast', function()
	  {
	    $(this).attr('src', image_array[index3]);
	    $(this).fadeIn('fast', function()
	    {
	      if (index3 == image_array.length-1) {
	        index3 = 0;
	      } else {
	        index3++;
	      }
	    });
	  });
	}

	function rotateImage4($elem, image_array)
	{
	  $elem.fadeOut('fast', function()
	  {
	    $(this).attr('src', image_array[index4]);
	    $(this).fadeIn('fast', function()
	    {
	      if (index4 == image_array.length-1) {
	        index4 = 0;
	      } else {
	        index4++;
	      }
	    });
	  });
	}



	var jqueryObj1 = $('.custom-genee-img');	
	setInterval (function() { 
		rotateImage1(jqueryObj1, images1); 
	}, 2500);

	var jqueryObj2 = $('.custom-dashup-img');	
	setInterval (function() { 
		rotateImage2(jqueryObj2, images2); 
	}, 2500);
	
	var jqueryObj3 = $('.custom-reserv-img');	
	setInterval (function() { 
		rotateImage3(jqueryObj3, images3); 
	}, 2500);

	var jqueryObj4 = $('.custom-ins-selec-img');	
	setInterval (function() { 
		rotateImage4(jqueryObj4, images4); 
	}, 2500);

/*
	var jqueryObj4 = $('.custom-carousel-img');	
	setInterval (function() { 
		rotateImage3(jqueryObj4, images4); 
	}, 2500);
*/
