jQuery(function(){
    //jQuery("#accordion").tabs("#accordion .pane", {event: 'mouseover', tabs: 'h2.tab', effect: 'slide'});
    jQuery("#tabs").tabs("#panes > li", {
          effect: "slide",
          event: 'mouseover'
    });
});

