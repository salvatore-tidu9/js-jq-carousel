$(document).ready(function () {

    $(".next").click(function() {
        
        nextPhoto();
    });

    $(".prev").click(function () {

        prevPhoto();
    });
});


function nextPhoto() {

    var nextPhoto = $(".photos img.active");

    var nextCircle = $(".nav_circle i.active");

    nextPhoto.removeClass("active");

    nextCircle.removeClass("active");

    if(nextPhoto.hasClass("last")) {

        $("img.first").addClass("active");

        $("i.first").addClass("active");
    }

    else {

        nextPhoto.next("img").addClass("active");

        nextCircle.next("i").addClass("active");
    }

}


function prevPhoto() {

    var prevPhoto = $(".photos img.active");

    var prevCircle = $(".nav_circle i.active")

    prevPhoto.removeClass("active");

    prevCircle.removeClass("active");

    if (prevPhoto.hasClass("first")) {

        $("img.last").addClass("active");

        $("i.last").addClass("active");
    }

    else {

        prevPhoto.prev("img").addClass("active");

        prevCircle.prev("i").addClass("active");
    }
}