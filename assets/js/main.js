$(document).ready(function() {



  // mobile hamburger menu
  $("#navigation").accordion({
    header: ".mobile-nav-btn",
    event: "click",
    collapsible: true,
    active: false,
  });





  // user accordion
  $("#accordion-user").accordion({
    header: ".accordion-link",
    event: "mouseenter",
    collapsible: true,
    active: false,
    heightStyle: "content"
  });
  $('#accordion-user').mouseleave(function() {
    $("#accordion-user").accordion({
      active: false
    });
  });
  $("#accordion-user .accordion-link").click(function(e) {
    if ($(this).attr("aria-selected") == "true") {
      $(this).mouseleave();
    } else {
      $(this).mouseenter();
    }
  });





  // blocks accordion
  $(".block-accordion").accordion({
    header: ".link-block",
    event: "click",
    collapsible: true,
    active: 0,
    heightStyle: "fill"
  });






  // navigation menu main accordion
  $("#accordion-menu").accordion({
    header: ".accordion-link",
    event: "click",
    collapsible: true,
    active: false,
    heightStyle: "content",
    activate: function(event, ui) {
      var acc_open = false;
      $("#accordion-menu .navigation-submenu").each(function(e) {
        if ($(this).attr("aria-hidden") == "false") {
          acc_open = true;
          $(this).css("z-index","-1");
        }
      });
      $("#navigation").css(
        'min-width', "200px"  );
      if (acc_open) {
        $("#navigation").animate({
          'min-width': "450px"
        }, 200);
      }else{
        $("#navigation").animate({
          'min-width': "200px"
        }, 200);
      }

    }

  });


  $("#accordion-menu .accordion-link").mouseenter(function(e) {
    if ($(this).attr("aria-selected") == "true") {
      $("#accordion-menu").accordion({
        active: false
      });
    } else {
      $(this).click();
    }
  });

  $('#accordion-menu').mouseleave(function(e) {
    if (e.relatedTarget || e.toElement) {
      $("#accordion-menu").accordion({
        active: false
      });
    }
  });

  // $("#accordion-menu").change(function(){
  //   console.log("change");
  //
  //   var acc_open = false;
  //   $("#accordion-menu .accordion-link").each(function(e) {
  //     if ($(this).attr("aria-selected") == "true") {
  //       // accordion acc_open
  //       acc_open = true;
  //     }
  //   });
  //   if (!acc_open) {
  //     $("#navigation").animate({
  //       'min-width': "450px"
  //     }, 300);
  //   }else{
  //     $("#navigation").animate({
  //       'min-width': "200px"
  //     }, 300);
  //   }
  // })

  // $("#accordion-menu").accordion({
  //   header: ".accordion-link",
  //   event: "mouseenter",
  //   collapsible: true,
  //   active: false,
  //   heightStyle: "content",
  //   beforeActivate: function(event, ui) {
  //     var acc_open = false;
  //     $("#accordion-menu .accordion-link").each(function(e) {
  //       if ($(this).attr("aria-selected") == "true") {
  //         // accordion acc_open
  //         acc_open = true;
  //       }
  //     });
  //     if (!acc_open) {
  //       $("#navigation").animate({
  //         'min-width': "450px"
  //       }, 300);
  //     }else{
  //       $("#navigation").animate({
  //         'min-width': "200px"
  //       }, 300);
  //     }
  //
  //   }
  //
  // });
  //
  //   // $("#accordion-menu .accordion-link").each(function(e){
  //     // $("#accordion-menu .accordion-link").mouseenter(function(e){
  //     //   if ($(this).attr("aria-selected") == "false"){
  //     //     $(this).click();
  //     //   }
  //     //
  //     //   console.log("yes");
  //     // })
  //   // })
  //
  // $('#accordion-menu').mouseleave(function(e) {
  //   if (e.relatedTarget || e.toElement) {
  //     $("#accordion-menu").accordion({
  //       active: false
  //     });
  //   }
  // });
  //
  // $("#accordion-menu .accordion-link").click(function(e) {
  //   if ($(this).attr("aria-selected") == "true") {
  //     $("#accordion-menu").accordion({
  //       active: false
  //     });
  //   } else {
  //     $(this).mouseenter();
  //   }
  // });


  // navigation sumenu dropdown acordion
  $(".navigation-submenu-dropdown-list").accordion({
    header: ".navigation-submenu-link",
    event: "mouseenter",
    collapsible: true,
    active: false,
    heightStyle: "content"
  });
  $('.navigation-submenu-dropdown-list').mouseleave(function() {
    $(".navigation-submenu-dropdown-list").accordion({
      active: false
    });
  });
  $(".navigation-submenu-dropdown-list .navigation-submenu-link").click(function(e) {
    if ($(this).attr("aria-selected") == "true") {
      $(this).mouseleave();
    } else {
      $(this).mouseenter();
    }
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









});
