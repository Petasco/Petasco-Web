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

// ============== launch time =============================
var countDown = new Date ("May 30, 2023 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDown - now;

    var days =Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours =Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes =Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds =Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }

}, 1000);