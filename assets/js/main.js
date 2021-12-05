$(document).ready(function() {



  // mobile hamburger menu
  $("#navigation").accordion({
    header: ".mobile-nav-btn",
    event: "click",
    collapsible: true,
    active: false,
    animate: 280,
    beforeActivate: function(event, ui){
      $(".block-accordion").accordion({
        active: false
      });
    }
  });
  $(document).click(function(e) {
    if (!$("#navigation").is(e.target) && !$("#navigation").has(e.target).length) {
      $("#navigation").accordion({
        active: false
      });
    }
  });




  // user accordion
  $("#accordion-user").accordion({
    header: ".accordion-link",
    event: "click",
    collapsible: true,
    active: false,
    heightStyle: "content"
  });
  $(document).click(function(e) {
    if (!$("#accordion-user").is(e.target) && !$("#accordion-user").has(e.target).length) {
      $("#accordion-user").accordion({
        active: false
      });
    }
  });




  // blocks accordion
  $(".block-accordion").accordion({
    header: ".link-block",
    event: "click",
    collapsible: true,
    active: 0,
    heightStyle: "fill",
    autoHeight: false,
    animate: 280,
    create: function( e ) {
      var $newdiv1 = $( "<div class='menu-back-btn submenu-back'><p>Back to Main Navigation</p></div>" );
      $(this).find(".block-submenu").prepend($newdiv1);

      var $newdiv2 = $( "<div class='block-back-btn menu-back-btn'><p>Change Block</p></div>" );
      $(this).find(".block-submenu").append($newdiv2);
    }
  });
  $(".submenu-back").click(function(e){
    $("#accordion-menu").accordion({
      active: false
    });
    $(".block-accordion").accordion({
      active: false
    });
  });

  $(".block-back-btn").click(function(e){
    $(".block-accordion").accordion({
      active: false
    });
  });





  // navigation menu main accordion
  $("#accordion-menu").accordion({
    header: ".accordion-link",
    event: "click",
    collapsible: true,
    active: false,
    heightStyle: "content",
    animate: 300,
    create: function( e ) {
      var $newdiv1 = $( "<div class='menu-back-btn menu-back'><p>Back to Main Navigation</p></div>" );
      $(this).find(".navigation-submenu").prepend($newdiv1);
    },
    beforeActivate: function(event, ui) {
      $("#navigation").animate({
        'min-width': "200px"
      }, 100);
      // $(".navigation-submenu-dropdown-list").accordion({
      //   active: false
      // });
    },
    activate: function(event, ui) {
      var acc_open = false;
      $("#accordion-menu .navigation-submenu").each(function(e) {
        if ($(this).attr("aria-hidden") == "false") {
          acc_open = true;
          $(this).css("z-index", "-1");
        }
      });
      if (acc_open) {
        $("#navigation").animate({
          'min-width': "450px"
        }, 300);
      } else {
        $("#navigation").animate({
          'min-width': "200px"
        }, 300);
      }

    }

  });

  $(document).click(function(e) {
    if (!$("#accordion-menu").is(e.target) && !$("#accordion-menu").has(e.target).length) {
      $("#accordion-menu").accordion({
        active: false
      });
    }
  });

$(".menu-back").click(function(e){
  $("#accordion-menu").accordion({
    active: false
  });
});



  // navigation sumenu dropdown acordion
  $(".navigation-submenu-dropdown-list").accordion({
    header: ".navigation-submenu-link",
    event: "click",
    collapsible: true,
    active: false,
    heightStyle: "content"
  });

  $(".navigation-submenu-dropdown-list .navigation-submenu-link").each(function(e){
    $(this).mouseenter(function(){
      if ($(this).attr("aria-expanded") == "false"){
        // $(this).click();
        // console.log($(this).index());
        // $(this).accordion({ active: true });
        // $(".navigation-submenu-dropdown-list").accordion({
        //   active:$(this).index()
        // });
      }
      $(".navigation-submenu-dropdown-list").accordion({
        active:$(this).prop("tabindex")
      });
      // console.log($(this).prop("tabindex"));

      // console.log("yes");
    });
  });
  //

  // notification accordion
  $(".notification-accordions").accordion({
    header: ".not-accordion-link",
    event: "click",
    collapsible: true,
    active: false,
    icons: false,
    heightStyle: "content",
    animate: 300,
    beforeActivate: function(event, ui) {
      if (($(this).find(".not-accordion-link").attr("aria-expanded")) == "false") {
        $(this).find(".not-accordion-link").slideUp({ duration: 0, easing: "easeInOutQuart" });
      }else{
        $(this).find(".not-accordion-link").slideDown({ duration: 300, easing: "easeInOutQuart" });
      }
    },
  });
  $(".notification-accordions .close").click(function(){
      $(".notification-accordions").accordion({
        active: false
      });
  });




  // search modal
  $("#search-btn").click(function() {
    $("#search_modal").dialog('open');
  });

  $("#search_modal").dialog({
    minWidth: 400,
    minHeight: 'auto',
    modal: true,
    closeOnEscape: false,
    autoOpen: false,
    dialogClass: 'no-close',
    appendTo: "#content",
    show: {
      effect: "fadeIn",
      duration: 100
    },
    hide: {
      effect: "fadeOut",
      duration: 100
    },
    open: function() {
      $('.ui-widget-overlay').addClass('modal-overlay');
      $('.ui-widget-overlay').on('click', function() {
        $('#search_modal').dialog('close');
      });
      // $(".ui-dialog-titlebar-close", ui.dialog || ui).hide();
    }


  });





  // datatable
  $('#example').DataTable({
    paging: false,
    searching: false,
    ordering: true,
    "bInfo": false
  });





// delete Favourites items

$(".edit-fav .delete").click(function(e){
    $(this).closest(".fav-item-added").slideUp('easeInOutQuart',function(e){
      $(this).remove();
    });
});




});
