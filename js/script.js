$(document).ready(function () {

    $(".next").click(function() {
        
        nextPhoto();
    });

    $(".prev").click(function() {

        prevPhoto();
    });
});


function nextPhoto() {

    var activePhoto = $(".photos img.active");

    var activeCircle = $(".nav_circle i.active");

    activePhoto.removeClass("active");

    activeCircle.removeClass("active");

    if(activePhoto.hasClass("last")) {

        $("img.first").addClass("active");

        $("i.first").addClass("active");
    }

    else {

        activePhoto.next("img").addClass("active");

        activeCircle.next("i").addClass("active");
    }

}


function prevPhoto() {

    var activePhoto = $(".photos img.active");

    var activeCircle = $(".nav_circle i.active")

    activePhoto.removeClass("active");

    activeCircle.removeClass("active");

    if (activePhoto.hasClass("first")) {

        $("img.last").addClass("active");

        $("i.last").addClass("active");
    }

    else {

        activePhoto.prev("img").addClass("active");

        activeCircle.prev("i").addClass("active");
    }
}