new WOW().init();


$('[data-fancybox="images"]').fancybox({
    loop:true,
    buttons: [
        "zoom",
        "share",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close"
    ],
});

$(document).ready(function () {
    $('#phone').inputmask("+\\9\\96 (999) 99-99-99")
})