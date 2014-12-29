
//Page Preloader
$(window).load(function() { 
	$("#loader").delay(500).fadeOut(); 
	$(".mask").delay(1000).fadeOut("slow");
});


$(document).ready(function(){
	
//Sticky Navigation		
    $("#navigation").sticky({topSpacing:0});


//Leaving Page Fade Out
	$('a.external').click(function(){
	  var url = $(this).attr('href');		
			
			
	  		$('.mask').fadeIn(250, function(){		  
			    document.location.href = url;
		  	});
			$("#loader").fadeIn("slow");			
	
	  return false;
	});
		
});
  

//Back To Top
	$(function() {
		$('a#back-top').click(function () {
			$('html, body').stop().animate({
				scrollTop: 0
			}, 1500,'easeInOutExpo');
		});
		
		
		
	});


//Navigation Scrolling
	$(function() {
		$('.nav a, .nav li a, #home-center a, a.move').bind('click',function(event){
		var $anchor = $(this);
	
		$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top -44
		}, 1500,'easeInOutExpo');
		
		event.preventDefault();
		});
	});


	
 
//PrettyPhoto
	$(function(){
		$("a[data-gal^='prettyPhoto']").prettyPhoto({
			  opacity: 0.5,
			  social_tools: "",
			  deeplinking: false
		});
	});		



//Parallax	
$(window).bind('load', function () {
	parallaxInit();						  
});

	function parallaxInit() {
		$('#twitter-parallax').parallax("30%", 0.1);
		$('#quote-parallax').parallax("30%", 0.1);
		$('#contact-parallax').parallax("30%", 0.1);
		$('#home.parallax').parallax("30%", 0.1);
		$('#project-header.parallax').parallax("30%", 0.1);
		/*add as necessary*/
	}	



  
  
//BxSlider
$(document).ready(function(){
	
	var onMobile = false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }
	
	$('.fullwidth-slider').bxSlider({
		mode: "fade",
		speed: 1000,
		pager: false,
		
		onSlideBefore: function($slideElement) {
			($slideElement).find('.slide-caption').fadeOut().animate({top:'100px'},{queue:false, easing: 'easeOutQuad', duration: 550});
			($slideElement).find('.slide-caption').hide().animate({top:'-100px'});
		},
		onSlideAfter: function($slideElement) {
			($slideElement).find('.slide-caption').fadeIn().animate({top:'0'},{queue:false, easing: 'easeOutQuad', duration: 450});
		},
		
	});
	
	$('.bx-wrapper .bx-controls-direction a').attr('data-500','top:83%; opacity: 0;').attr('data-start','top:50%; opacity: 1;');
	
	
	if( ( onMobile === false ) && ( $('.parallax-slider').length ) ) {
	
		skrollr.init({
			edgeStrategy: 'set',
			smoothScrolling: false,
			forceHeight: false
		});
		
	}	
	
	
	
    
	$('.twitter-slider').bxSlider({
		controls: true, 
		pager: false,		
		auto:true,
		mode:'fade',
		pause: 3000,
	});
	
	
	$('.clients-slider').bxSlider({
		pagerCustom: '#bx-pager',
		controls:false,
	});
	
	$('.project-slider').bxSlider({
		controls: true, 
		pager: false,		
		auto:true,
		pause: 3000,
		preloadImages:'all',
		
	});
	
	$('.blog-slider').bxSlider({
		controls: true, 
		pager: false,		
		auto:false,
		pause: 3000,
		preloadImages: 'visible',
	});
	
	$('.text-slide-vertical').bxSlider({
		controls: false,
		adaptiveHeight: true, 
		pager: false,		
		auto:true,
		mode:'fade',
		pause: 3000,
	});
	

	
});  
  
  
  
//Navigation Dropdown
	$('.nav a.colapse-menu1').click(function () { $(".nav-collapse").collapse("hide") });
	
	$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });



// Accordion
	$('dl.accordion dt').filter(':first-child').addClass('accordion-active');
	$('dd.accordion-content').filter(':nth-child(n+3)').addClass('hide');
		
	$('dl.accordion').on('click', 'dt', function() {
			$(this)
				.addClass('accordion-active')
				.next()
					.slideDown(200)
					.siblings('dd.accordion-content')
						.slideUp(200)
				.prev()
					.removeClass('accordion-active');
	});	

// Tabs	
	$(".tab_container").hide(); //Hide all content
	$("ul.tabs li:first").addClass("tab-active").show(); //Activate first tab
	$(".tab_container:first").show(); //Show first tab content
		
	$("ul.tabs li").click(function() {
			$("ul.tabs li").removeClass("tab-active"); //Remove any "active" class
			$(this).addClass("tab-active"); //Add "active" class to selected tab
			$(".tab_container").hide(); //Hide all tab content
			var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
			$(activeTab).fadeIn(); //Fade in the active content
			return false;
	});
	
// Toggle	
	$(".toggle_container").hide(); 
	$("span.toggle-title").click(function(){
			$(this).toggleClass("toggle-active").next().slideToggle("normal");
			return false; 
	});


$(document).ready(function(){

//Elements Fading
	$('.element_from_top').each(function () {
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,top:"0px"},1000);
		});	
	});
	
	$('.element_from_bottom').each(function () {
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,bottom:"0px"},1000);
		});	
	});
	
	
	$('.element_from_left').each(function () {
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,left:"0px"},1000);
		});	
	});
	
	
	$('.element_from_right').each(function () {
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,right:"0px"},1000);
		});	
	});
	
	$('.element_fade_in').each(function () {
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,right:"0px"},1000);
		});	
	});


//Animated Progress Bars
	$('.bar li').each(function () {
		$(this).appear(function() {
		  $(this).animate({opacity:1,left:"0px"},1200);
		  var b = $(this).find("span").attr("data-width");
		  $(this).find("span").animate({
			width: b + "%"
		  }, 1700, "easeOutCirc");
		});	
	});


//Animated Counters
	$('.counters').each(function () {
		$(".timer .count").appear(function() {
		var counter = $(this).html();
		$(this).countTo({
			from: 0,
			to: counter,
			speed: 2000,
			refreshInterval: 60,
			});
		});
	});
	

//Fading Out AlertBox
	$('.shortcode_alertbox').find('.box_close').click(function(){
		$(this).parents('.alertboxes').animate({opacity:0},300).animate({height:"0px"});
	});



});



	
		
		
		
		


$(window).load(function(){
	
	
//Masonry Blog
	var $container = $('.blog-posts-content');
	$container.isotope({
		 masonry: {	
	  },
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
		},	
	});
  




  
//Google Map					
	var latlng = new google.maps.LatLng(45.738028,21.224535);
	var settings = {
		zoom: 16,
		center: new google.maps.LatLng(45.738028,21.224535), mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		scrollwheel: false,
		draggable: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: false,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP};
	
		
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	
	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});
	
	var contentString = '<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h3 id="firstHeading" class="firstHeading">NEWAVE</h3>'+
		'<div id="bodyContent">'+
		'<p>Here we are. Come to drink a coffee!</p>'+
		'</div>'+
		'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	
	var companyImage = new google.maps.MarkerImage('images/marker.png',
		new google.maps.Size(58,63),<!-- Width and height of the marker -->
		new google.maps.Point(0,0),
		new google.maps.Point(35,20)<!-- Position of the marker -->
	);
	
	
	
	var companyPos = new google.maps.LatLng(45.738028,21.224535);
	
	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyImage,               
		title:"Creative News",
		zIndex: 3});
	
	
	
	google.maps.event.addListener(companyMarker, 'click', function() {
		infowindow.open(map,companyMarker);
	});

});










   
  jQuery(document).ready(function($){     
// Portfolio Isotope
	var container = $('#portfolio-wrap');	
	

	container.isotope({
		animationEngine : 'best-available',
	  	animationOptions: {
	     	duration: 200,
	     	queue: false
	   	},
		layoutMode: 'fitRows'
	});	

	$('#filters a').click(function(){
		$('#filters a').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
	  	container.isotope({ filter: selector });
        setProjects();		
	  	return false;
	});
		
		
		function splitColumns() { 
			var winWidth = $(window).width(), 
				columnNumb = 1;
			
			
			if (winWidth > 1024) {
				columnNumb = 4;
			} else if (winWidth > 900) {
				columnNumb = 2;
			} else if (winWidth > 479) {
				columnNumb = 2;
			} else if (winWidth < 479) {
				columnNumb = 1;
			}
			
			return columnNumb;
		}		
		
		function setColumns() { 
			var winWidth = $(window).width(), 
				columnNumb = splitColumns(), 
				postWidth = Math.floor(winWidth / columnNumb);
			
			container.find('.portfolio-item').each(function () { 
				$(this).css( { 
					width : postWidth + 'px' 
				});
			});
		}		
		
		function setProjects() { 
			setColumns();
			container.isotope('reLayout');
		}		
		
		container.imagesLoaded(function () { 
			setColumns();
		});
		
	
		$(window).bind('resize', function () { 
			setProjects();			
		});

});










//Expander Slider
function initBxModal() {
    $('.project-slider').bxSlider({
		controls: true, 
		pager: false,		
		auto:true,
		pause: 3000,
		preloadImages:'all',
		
	});
};




//FullScreen Slider
$(function (){
	$('#fullscreen-slider').maximage({
		cycleOptions: {
			fx: 'fade',
			speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
			timeout: 0,
			prev: '#slider_left',
			next: '#slider_right',
			pause: 1,
			before: function(last,current){
				jQuery('.slide-content').fadeOut().animate({top:'100px'},{queue:false, easing: 'easeOutQuad', duration: 550});
				jQuery('.slide-content').fadeOut().animate({top:'-100px'});
			},
			after: function(last,current){
				jQuery('.slide-content').fadeIn().animate({top:'0'},{queue:false, easing: 'easeOutQuad', duration: 450});
			}	
			
			
					
		},
		
		
		
		onFirstImageLoaded: function(){
			jQuery('#cycle-loader').delay(800).hide();
			jQuery('#fullscreen-slider').delay(800).fadeIn('slow');
			jQuery('.slide-content').fadeIn().animate({top:'0'});
			jQuery('.slide-content a').bind('click',function(event){
				var $anchor = $(this);				
				jQuery('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top -44
				}, 1500,'easeInOutExpo');				
				event.preventDefault();
				});			
		}
	});

	// Helper function to Fill and Center the HTML5 Video
	jQuery('video,object').maximage('maxcover');
	
	
	
	

	// To show it is dynamic html text
	
});





$(window).load(function() {
	
	
	

	
	
	// Project Page Expander
	
	(function(){
	  
		  var container = $( "#project-page-holder" );
		  var $items = $('#portfolio-wrap .open-project-link');
		  index = $items.length;
		  $('#portfolio-wrap .open-project-link').click(function(){
	
		  if ($(this).hasClass('active')){
		  } else 
		  { lastIndex = index;
		  index = $(this).index();
		  $items.removeClass('active');
		  $(this).addClass('active');
	
		  var myUrl = $(this).find('.open-project').attr("href") + " .item-data"; 
	
		  
		   
		  
		  
		  $('#project-page-data').animate({opacity:0}, 400,function(){
				
				
				
				$("#project-page-data").load(myUrl,function(e){  
					var $helper = $('.helper');
					var height = $helper.height();
					
					
						$('#project-page-data').css("min-height", height);
							
						$('.project-slider').css({'height' : ''});	
						$('#maximage').css({'height' : ''});	
						
						
						
							$('#maximage').maximage({
								cycleOptions: {
									fx: 'fade',
									speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
									timeout: 6000,
									prev: '#arrow_left',
									next: '#arrow_right',
									pause: 1,
								},
							});
						

						
						
						
						
				});
				
				$('#project-page-data').delay(400).animate({opacity:1}, 400);
	
		  });
		  
		  
		  $('html, body').animate({ scrollTop: $(".portfolio-bottom").offset().top -40}, 900);
		  
		  
		  //Project Page Open
		  
		  
			
			  $('#project-page-holder').slideUp(600, function(){
					
				  $('#project-page-data').css('visibility', 'visible');}).delay(1100).slideDown(1000,function(){				  
				  
						$('#project-page-data').fadeIn('slow',function(){initBxModal();});
						$('.element_fade_in').each(function () {
							$(this).appear(function() {
							  $(this).delay(100).animate({opacity:1,right:"0px"},1000);
							});	
						});
					  
				  });
				
			  
		  }
	
		  return false;       
		  
		  });
	
		  //Project Page Close
		
		  $(document).on('click', '#project_close', function(event) {
		  
				
		  $('#project-page-data').animate({opacity:0}, 400,function(){		
				
				$('#project-page-holder').delay(400).slideUp(400);
				
		  });
				
				$('html, body').delay(1000).animate({ scrollTop: $(".portfolio-top").offset().top - 70}, 800);
				$items.removeClass('active') ;
		  
				return false;
				
		  });
	
	})();

    
});


$(window).load(function() { 
	document.getElementById("all").click();
});



// Switcher CSS 
  $(document).ready(function() {
"use strict";
    $("#hide, #show").click(function () {
        if ($("#show").is(":visible")) {
           
            $("#show").animate({
                "margin-left": "-500px"
            }, 500, function () {
                $(this).hide();
            });
            
            $("#switch").animate({
                "margin-left": "0px"
            }, 500).show();
        } else {
            $("#switch").animate({
                "margin-left": "-500px"
            }, 500, function () {
                $(this).hide();
            });
            $("#show").show().animate({
                "margin-left": "0"
            }, 500);
        }
    });
                      
});