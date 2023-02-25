const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    950: {
        items: 3
    },
    2000: {
        items: 4
    },
}

$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

// owl carousel call
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation.owl-nav-prev'),$('.owl-navigation.owl-nav-next')],
    responsive: responsive
});

// click to scroll top
$('.move-up span').click(function() {
    $('html,body').animate({
        scrollTop:0
    }, 1000);
})

// AOS instance
AOS.init();


}); 

var popupTimer;
function delayPopup(popup){
    popupTimer = setTimeout(function() {
        $(popup).popup('hide') }, 4200);
}

$(document).ready(function () {
    $('.copyToken').click(function (){
        clearTimeout(popupTimer);

        var $input = $(this).closest('div').find('.copyInput');

        $input.select();

        document.execCommand("copy");

        $(this).popup({
            title: 'Copied Successfully',
            content: 'Share this link with your sender',
            on: 'manual',
            exclusive: true
        })
        .popup('show');

        delayPopup(this);
    });
});