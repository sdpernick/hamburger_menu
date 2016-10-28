/* Goal: reveal from the side (CSS: the nav must be set to position:fixed and left:100% for this to work on mobile)
--- mobile breakpoint: 580px */


// 1. on clicking of the hamburger, show the nav by animating it's left value to 0
$(".hamburger").on("click", function(){
    $("header nav").animate({
      left: 0
    });
});



// 2. on clicking of the close button in the nav, hide the nav by animating it's left value back to 100%
$("header nav").on("click", function(){
    $("header nav").animate({
      left: "100%"
    });
});


// 3. on resizing of the browser, we want to reset any styles set if we are back on desktop). Look into removeAttr to remove the inline styles that's being added to the nav element

$(window).on("resize", function(){
  $("header nav").removeAttr("style");

});


// Notes
// destop greater than 580 px
//    remove inline styles being added to nav (remove style element, removeAttr, google it)
//    whenever you change a style in javascript it adds an inline style