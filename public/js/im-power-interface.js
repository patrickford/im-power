
$(document).ready(function() {

  // jQuery for mananging responsive menus
  // Set class attribute to highlight currently selected menu item
  $(document).on("click", ".nav li", function() {
    $(".nav li").removeClass("active");
    $(this).addClass("active");
    $("#main-nav-label").text($(this).find("a:first").text());
  });

  // Collapse menu after item is selected
  $(document).on("click", ".navbar-collapse.in", function(e) {
      if ($(e.target).is("a") ) {
          $(this).collapse("hide");
      }
  });

  // Added for Mega Menu (from jsfiddle.net/apougher/ydcMQ/ example)
  $(document).on("hover", ".dropdown", 
        function() { $('.dropdown-menu', this).stop().fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).stop().fadeOut("fast");
    });

    // $('#registerModal').on('shown.bs.modal', function (e) {
    //   alert('Modal is successfully shown!');
    //   });
})