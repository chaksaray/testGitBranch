import './home.html';

import { Meteor } from 'meteor/meteor';
// import { ReactiveVar } from 'meteor/reactive-var';
// import { ReactiveDict } from 'meteor/reactive-dict';
// import { Lists } from '../../api/lists/lists.js';
import { Template } from 'meteor/templating';
// import { ActiveRoute } from 'meteor/zimme:active-route';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { TAPi18n } from 'meteor/tap:i18n';

// import { insert } from '../../api/lists/methods.js';

// import '../components/loading.js';

Template.home.onRendered(function() {
    //js for swiper for slide contents
    var swiper = new Swiper('.swiper-container', {
        // pagination: '.swiper-pagination',
        slidesPerView: 6,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
});

// JavaScript jQuery code from Bootply.com editor   
Template.home.onRendered(function() {
    function openNav() {
        document.getElementById("mySidenav").style.width = "80%";
        // document.getElementById("flipkart-navbar").style.width = "50%";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.body.style.backgroundColor = "rgba(0,0,0,0)";
    }
});
// JavaScript jQuery code from Bootply.com editor   
Template.home.onRendered(function() {
    (function($) {

        //Function to animate slider captions 
        function doAnimations(elems) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';

            elems.each(function() {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function() {
                    $this.removeClass($animationType);
                });
            });
        }

        //Variables on page load 
        var $myCarousel = $('#carousel-example-generic'),
            $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

        //Initialize carousel 
        $myCarousel.carousel();

        //Animate captions in first slide on page load 
        doAnimations($firstAnimatingElems);

        //Pause carousel  
        $myCarousel.carousel('pause');

        //Other slides to be animated on carousel slide event 
        $myCarousel.on('slide.bs.carousel', function(e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });
        $('#carousel-example-generic').carousel({
            interval: 3000,
            pause: "false"
        });

    })(jQuery);
});