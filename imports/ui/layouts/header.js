import './header.html';


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

Template.header.onRendered(function(){
	$('.dropdown').hover(
      function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(1).fadeIn();
      }, 
      function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(1).fadeOut();
      }
    );

    $('.dropdown-menu').hover(
      function() {
        $(this).stop(true, true);
      },
      function() {
        $(this).stop(true, true).delay(1).fadeOut();
      }
    );
});
Template.header.onRendered(function(){
  //js for swiper for slide banner
  var swiper = new Swiper('.swiper-container-banner', {
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      paginationClickable: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: 5000,
      autoplayDisableOnInteraction: false
  });
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