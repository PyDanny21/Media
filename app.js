$(document).ready(function () {
    var lastScrollTop=0;

    // Detect scroll event
    $(window).scroll(function (event) {
        var st=$(this).scrollTop();

        // compare scroll position
        if (st>lastScrollTop) {
            $('#bottomNav').slideUp();
        } else {
            $('#bottomNav').slideDown();
        }

        lastScrollTop=st;
        
    });
    
});