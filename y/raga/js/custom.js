$(document).ready(function(){jQuery("#load").fadeOut();jQuery("#loading").delay(0).fadeOut("slow");$('#back-to-top').fadeOut();$(window).on("scroll",function(){if($(this).scrollTop()>250){$('#back-to-top').fadeIn(1400);}else{$('#back-to-top').fadeOut(400);}});$('#top').on('click',function(){$('top').tooltip('hide');$('body,html').animate({scrollTop:0},800);return false;});$(".navbar a").on("click",function(event){$(".navbar-collapse").collapse('hide');});jQuery('.ad-title').on("click",function(e){e.preventDefault();var $this=jQuery(this);if($this.next().hasClass('show')){$this.next().removeClass('show');$this.next().slideUp(350);$this.parent().removeClass('ad-active');}else{$this.parent().addClass('ad-active');jQuery('.ad-title').not(this).parent().removeClass('ad-active');$this.parent().parent().find('div .ad-details').removeClass('show');$this.parent().parent().find('div .ad-details').slideUp(350);$this.next().toggleClass('show');$this.next().slideToggle(350);}});$('.navbar-nav li a').on('click',function(e){var anchor=$(this);$('html, body').stop().animate({scrollTop:$(anchor.attr('href')).offset().top-0},1500);e.preventDefault();});$(window).on('scroll',function(){if($(this).scrollTop()>100){$('header').addClass('menu-sticky');}else{$('header').removeClass('menu-sticky');}});$('.popup-gallery').magnificPopup({delegate:'a.popup-img',tLoading:'Loading image #%curr%...',type:'image',mainClass:'mfp-img-mobile',gallery:{navigateByImgClick:true,enabled:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}});$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({type:'iframe',disableOn:700,mainClass:'mfp-fade',preloader:false,removalDelay:160,fixedContentPos:false});$(".iq-search").on('click',function(){var checkId=document.getElementsByClassName("search-open");if(checkId.length>0){$('.iq-search').removeClass("search-open");}else{$('.iq-search').addClass("search-open");}})
new WOW().init();$(".panorama").panorama_viewer({repeat:true});$('#fullpage').fullpage({verticalCentered:true,css3:false,navigation:true,anchors:['overview','headphone','headset','speaker','soundbar','subwoofer','contact'],menu:'#menu',navigationPosition:'right',responsiveWidth:767,afterResponsive:function(isResponsive){}});$('.owl-carousel').each(function(){var $carousel=$(this);$carousel.owlCarousel({items:$carousel.data("items"),loop:$carousel.data("loop"),margin:$carousel.data("margin"),nav:$carousel.data("nav"),dots:$carousel.data("dots"),autoplay:$carousel.data("autoplay"),autoplayTimeout:$carousel.data("autoplay-timeout"),navText:['<i class="lnr lnr-chevron-left"></i>','<i class="lnr lnr-chevron-right"></i>'],responsiveClass:true,responsive:{0:{items:$carousel.data("items-mobile-sm")},480:{items:$carousel.data("items-mobile")},786:{items:$carousel.data("items-tab")},1023:{items:$carousel.data("items-laptop")},1199:{items:$carousel.data("items")}}});});$('#contact-from').submit(function(e){var flag=0;e.preventDefault();$('.require').each(function(){if($.trim($(this).val())==''){$(this).css("border","1px solid red");e.preventDefault();flag=1;}else{$(this).css("border","1px solid grey");flag=0;}});if(grecaptcha.getResponse()==""){flag=1;alert('Please verify Recaptch');}else{flag=0;}
if(flag==0){$.ajax({url:'php/contact-form.php',type:'POST',data:$("#contact-from").serialize()}).done(function(data){$("#result").html('Form was successfully submitted.');$('#contact-from')[0].reset();}).fail(function(){alert('Ajax Submit Failed ...');});}});function doAnimations(elems){var animEndEv="webkitAnimationEnd animationend";elems.each(function(){var $this=$(this),$animationType=$this.data("animation");$this.addClass($animationType).one(animEndEv,function(){$this.removeClass($animationType);});});}
var $myCarousel=$("#carouselExampleControls, #carouselExampleControlss"),$firstAnimatingElems=$myCarousel.find(".carousel-item:first").find("[data-animation ^= 'animated']");$myCarousel.carousel();doAnimations($firstAnimatingElems);$myCarousel.on("slide.bs.carousel",function(e){var $animatingElems=$(e.relatedTarget).find("[data-animation ^= 'animated']");doAnimations($animatingElems);});$("#marker2").click(function(){$("#marker02").toggleClass("active").siblings().removeClass("active");});$("#marker3").click(function(){$("#marker03").toggleClass("active").siblings().removeClass("active");});$("#marker4").click(function(){$("#marker04").toggleClass("active").siblings().removeClass("active");});});