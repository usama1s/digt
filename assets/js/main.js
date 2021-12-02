$(document).ready(function() {
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
});


$(document).ready(function() {
  $("#accordion-block").accordion({
    header: ".link-block",
    event: "click",
    collapsible: true,
    active: 0,
    heightStyle: "fill"
  });

});


$(document).ready(function() {
  $("#accordion-menu").accordion({
    header: ".accordion-link",
    event: "mouseenter",
    collapsible: true,
    active: false,
    heightStyle: "content"
  });
  $('#accordion-menu').mouseleave(function() {
    $("#accordion-menu").accordion({
      active: false
    });
  });
});

$(document).ready(function() {
  $("#navigation-submenu-dropdown").accordion({
    header: ".navigation-submenu-link",
    event: "mouseenter",
    collapsible: true,
    active: false,
    heightStyle: "content"
  });
  $('#navigation-submenu-dropdown').mouseleave(function() {
    $("#navigation-submenu-dropdown").accordion({
      active: false
    });
  });
});


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
  show: {
        effect: "fadeIn",
        duration: 400
      },
  hide: {
    effect: "fadeOut",
    duration: 400
  },
  open: function() {
        $('.ui-widget-overlay').addClass('modal-overlay');
        $('.ui-widget-overlay').on('click', function() {
          $('#search_modal').dialog('close');
        });
        // $(".ui-dialog-titlebar-close", ui.dialog || ui).hide();
    }


});


$('#example').DataTable({
  paging: false,
  searching: false,
    ordering:  true,
    "bInfo" : false
});
