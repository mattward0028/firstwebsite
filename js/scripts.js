// twitter
! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');

//facebook
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function initMap() {
    var myLatLng = {
        lat: 36.311687,
        lng: -115.302225
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        animation: google.maps.Animation.DROP,
        title: 'Hello World!'
    });

    marker.addListener('click', toggleBounce);

    $("#map").mouseenter (function(){
      marker.setMap(map);
    });

    function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

}


$(document).ready(function() {
    // Smooth Scrolling
    var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function() {
            window.location.hash = href;
        });
        return false;
    });

    // stellar
    $('#contact').stellar();

    $('#about').stellar();

    // tooltips
    $(function() {
        $('#tooltip1').tooltip();
    });

    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    //comment box

    $("#button").on("click", function() {
        var name = $('#name').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var comment = $('.message-box').val();

        if (comment === "") {
            $('.message-box').css("border", "2px solid red");
            return true;
        } else {
            $('#visible-name').html(name);
            $('#visible-phone').html(phone);
            $('#visible-email').html(email);
            $('#visible-comment').html(comment);
            $('.message-box, #name, #phone, #email').hide();
            console.log(name, phone, email, comment);
            return false;
        }

    });

    $(".message-box").on("keyup", function() {
        var charCount = $(".message-box").val().length;
        console.log(charCount);
        $("#char-count").html(charCount);
        if (charCount > 50) {
            $("#char-count").css("color", "red");
        } else {
            $("#char-count").css("color", "black");
        }
    });


    $(".form-control").css("background-color", "#eaeff4")

    // works section
    for (var i = 0; i < works.length; ++i) {
        $("#most-recent-work").append("\
	    <div class='col-sm-6 col-md-3'>\
          <a href=' " + works[i].url + "' class='work-img'>\
	      	<img class='img-responsive' src='" + works[i].pic + "'>\
          <span class='info'><p class='proj-title'>Title:</p> " + works[i].title + " </span>\
	    </div>\
	  ");

        var images = $("#most-recent-work img");
        if (i % 2 === 0) {
            $(images[i]).css("border", "2px solid DodgerBlue");
        } else {
            $(images[i]).css("border", "2px solid salmon");
        };

    };

    $(".work-img").mouseenter(function() {
        $(".info", this).show();
    }).mouseleave(function() {
        $(".info", this).hide();
    });


    for (var i = 0; i < works2.length; ++i) {
        $("#other-work").append("\
	    <div class='col-sm-6 col-md-3'>\
          <a href=' " + works2[i].url + "' class='work-img'>\
	      	<img class='img-responsive' src='" + works2[i].pic + "'>\
          <span class='info'><p class='proj-title'>Title:</p> " + works2[i].title + " </span>\
	    </div>\
	  ");

        var images = $("#other-work img");
        if (i % 2 === 0) {
            $(images[i]).css("border", "2px solid DodgerBlue");
        } else {
            $(images[i]).css("border", "2px solid salmon");
        };

    };

    $(".work-img").mouseenter(function() {
        $(".info", this).show();
    }).mouseleave(function() {
        $(".info", this).hide();
    });


});
