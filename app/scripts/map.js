/**
 * Created by mikenikonov on 02/07/16.
 */
ymaps.ready(init);
var myMap;

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.79532166197225,49.127950099584496],
        zoom: 16,
        controls: []
    });

    myMap.behaviors.disable('scrollZoom');

    myPlacemark = new ymaps.Placemark([55.79532166197225,49.127950099584496], {
        hintContent: 'Samruh',
        balloonContentHeader:'<p style="color:#583305;font-size:14px;">"SAMRUH" Artist Association</p>',
        balloonContentBody: '<p>ул Карла Маркса, 46 б.</p><p>+7 916 155 86 94</p><p>mail@samruh.com</p>'
    });

    myMap.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();
}