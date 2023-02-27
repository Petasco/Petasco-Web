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

// =========================copy to clickboard ===============
const copyText = document.querySelectorAll(".copy-text");
let copyTxt = document.querySelectorAll(".copy-text");
for (const copyTxt of copyText) {
    
    copyTxt.querySelector("button").addEventListener("click", function(){
        let input = copyTxt.querySelector("input.text");
        input.select();
    
    
        navigator.clipboard.writeText(input.value)
        .then(() => {"Copied"});
    
        
        
        copyTxt.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function(){
            copyTxt.classList.remove("active");
        }, 500);
    });


}
