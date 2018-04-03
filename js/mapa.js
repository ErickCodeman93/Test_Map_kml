
var urlKml = [
'http://erick.codeman.mx/kml/huatulco/COMERCIAL-MIXTO.COMERCIAL.DENSIDAD.ALTA.Mz4.Lt2.kml',
'http://erick.codeman.mx/kml/huatulco/MULTIFAMILIAR-RESID.TURIST.MULTIF.DENS.BAJA.Mzn2.lote20.kml',
'http://erick.codeman.mx/kml/huatulco/UNIFAMILIAR-RESID.TURIST.DENSIDAD%20BAJA.Mzn1.lote4.kml',
'http://erick.codeman.mx/kml/huatulco/UNIFAMILIAR-RESID.TURIST.DENSIDAD.BAJA.Mz1.Lt6.kml'
];

var valor;
function initMap(){
var ctaLayer;

	var myloc 	= new google.maps.LatLng(17.6698698, -101.6087897);
	var mapOption = {
		center:myloc,
		zoom:17
	};

	var map = new google.maps.Map(document.getElementById('map'),mapOption);

	var maker = new google.maps.Marker({
		map: map,
		position: map.getCenter(),
	   	animation: google.maps.Animation.BOUNCE
	});

	$('#valor').on('change',function(){
		 valor = $(this).val();

		  ctaLayer = new google.maps.KmlLayer({
          url: urlKml[valor],
          map: map,
        });

		ctaLayer.setMap(map);


	});
		
	
}


window.addEventListener('load',initMap);