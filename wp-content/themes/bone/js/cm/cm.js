
(function($) {
    var menu = $('#menu-primary-menu'),
        html = '<li><img src="' + cmGetImgUrl('search.png') + '"/></li>',
        $search = $(html)
        ;
    
    menu.append($search);
})(jQuery);

// STICKY HEADER
(function($) {
    var tolerance = 300; //after scrolling over this value, the menu appear
    
    var $header = $('#cm-sticky-header');
    
    $(document).on('scroll', function() {
        var shouldShow = $(this).scrollTop() > tolerance
                    &&   !$header.hasClass('active');
                    
        var shouldHide = $(this).scrollTop() <= tolerance
                    &&   $header.hasClass('active');
        
        if(shouldShow) {
            $header.addClass('active');
        }
        
        if(shouldHide) {
            $header.removeClass('active');
        }
    });
    
})(jQuery);