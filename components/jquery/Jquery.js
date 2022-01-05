import { useEffect } from "react"
import { Fragment } from "react/cjs/react.production.min";

export const Jquery = ()=>{
    useEffect(()=>{
        jQuery(function($) { // DOM is now read and ready to be manipulated
            equalheight = function(container){
            
            var currentTallest = 0,
                 currentRowStart = 0,
                 rowDivs = new Array(),
                 $el,
                 topPosition = 0;
             $(container).each(function() {
            
               $el = $(this);
               $($el).height('auto')
               topPostion = $el.position().top;
            
               if (currentRowStart != topPostion) {
                 for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                   rowDivs[currentDiv].height(currentTallest);
                 }
                 rowDivs.length = 0; // empty the array
                 currentRowStart = topPostion;
                 currentTallest = $el.height();
                 rowDivs.push($el);
               } else {
                 rowDivs.push($el);
                 currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
              }
               for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                 rowDivs[currentDiv].height(currentTallest);
               }
             });
            }
            
            $(window).load(function() {
              equalheight('.eq-blocks');
            });
            
            
            $(window).resize(function(){
              equalheight('.eq-blocks');
            });
            
            });
            
            
            
            
            
            
            
            function main() {
                
                
                /*====================================
                counter
                ======================================*/
            
            
            
                
            
            (function () {
               'use strict';
            
            
            
            
            
            $(window).resize(function(){
            
                $('#home-banner .content,.entry-header .content').css({
                    position:'relative',
                    left: ($(window).width() - $('#home-banner .content,.entry-header .content').outerWidth())/2,
                    top: ($(window).height() - $('#home-banner .content,.entry-header .content ').outerHeight())/2
                });
            
            });
            
            // To initially run the function:
            $(window).resize();
            
            
            
            
            
            
            
                /*====================================
                Show Menu on Book
                ======================================*/
                $(window).bind('scroll', function() {
                    var navHeight = $(window).height() - 10;
                    if ($(window).scrollTop() > navHeight) {
                        $('.navbar-default').addClass('on');
                    } else {
                        $('.navbar-default').removeClass('on');
                    }
                });
            
                $('body').scrollspy({ 
                    target: '.navbar-default',
                    offset: 10
                })
            
                  
              
            
            
                /*====================================
                top -menu
                ======================================*/
            
            $('#top-menu.navbar-default li:has(ul)').addClass('menu-item-has-children');
            
            
            
            $('#home-banner h1 span').addClass('liner');
            
            
            
            
            
            
            
            /*creating click event*/
            $(document).ready(function(){
              $('a#nav-icon').click(function(){
                $('#nav-top').toggleClass('nav-view');
              });
              
              $("#testimonial").owlCarousel({
                    navigation : false, // Show next and prev buttons
                    slideSpeed : 300,
                    paginationSpeed : 400,
                    singleItem:true
                    });
              
            });
            
            
            /*nav-icon*/
            $(document).ready(function(){
                $('#nav-icon').click(function(){
                    $(this).toggleClass('open');
                });
            });
            
            $('.guide-block .nav-tabs > li > a').hover(function() {
              $(this).tab('show');
            });
            
                  /*====================================
                Portfolio Isotope Filter
                ======================================*/
                $(window).load(function() {
                    var $container = $('#lightbox');
                    $container.isotope({
                        filter: '*',
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    });
                    $('.cat a').click(function() {
                        $('.cat .active').removeClass('active');
                        $(this).addClass('active');
                        var selector = $(this).attr('data-filter');
                        $container.isotope({
                            filter: selector,
                            animationOptions: {
                                duration: 750,
                                easing: 'linear',
                                queue: false
                            }
                        });
                        return false;
                    });
            
                });
            
            
            
            }());
            
            
            }
            main();
            
            
    })
    return(<Fragment></Fragment>)
}
// shift