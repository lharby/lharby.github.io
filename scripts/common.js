$(function() {

    var $footerWrapper = $('#footer-wrapper');

    $('a#btn-nav1').click(function() {
        $footerWrapper.css('position','relative').appendTo('#page-wrapper');            
    });
        
    $('a#btn-nav2').click(function() {
        $footerWrapper.css('position','fixed').appendTo('body');
    });
        
    $('a#btn-nav3').click(function() {
        $footerWrapper.detach(); 
    });
        
    $('a#btn-nav4').click(function() {
        $footerWrapper.appendTo('body'); 
    });
   
});