$(document).ready(function(){
    if (Modernizr.touch) {
      // show the close overlay button
      // $(".close-overlay").removeClass("hidden");

      // handle the adding of hover class when clicked
      $(".hotel").click(function(e){
          if (!$(this).hasClass("hover")) {
              $(this).addClass("hover");
              $(this).find(".close-overlay").removeClass("hidden");
          }
      });
      // handle the closing of the overlay
      $(".close-overlay").click(function(e){
          e.preventDefault();
          e.stopPropagation();
          if ($(this).closest(".hotel").hasClass("hover")) {
              $(this).closest(".hotel").removeClass("hover");
              $(this).addClass("hidden");
          }
      });
  } else {
    // handle the mouseenter functionality
    $(".hotel").mouseenter(function(){
        $(this).addClass("hover");
    })
    // handle the mouseleave functionality
    .mouseleave(function(){
        $(this).removeClass("hover");
    });
  }
});
