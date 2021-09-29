/*==============================================================*/
// Battle Map  JS
/*==============================================================*/
(function($) {
    "use strict"; // Start of use strict

var marker;

window.initMap = function() {
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 42.984987, lng: -81.245351}
    });
    
    marker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: {lat: 42.984987, lng: -81.245351}
    });
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
    } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    }
    }

}(jQuery)); // End of use strict
              