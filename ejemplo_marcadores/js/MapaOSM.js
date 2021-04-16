// Variables y Objetos globales.
var mapa = null;

function cargarMapa(){
	// Asuncion - Paraguay.
	var longitud = -68.82717;
	var latitud = -32.89084;
	var zoom = 12;

    // Se instancia el objeto mapa.
	mapa =  L.map('map-container').setView([latitud, longitud], zoom);

	// Humanitarian Style.
	L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Data \u00a9 <a href="http://www.openstreetmap.org/copyright">' +
          'OpenStreetMap Contributors </a> Tiles \u00a9 HOT'
	}).addTo(mapa);
	var v_geojsonFeature = {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [ 
					"-68.8351000",
					"-32.9286300"
				]
			},
			"properties": {
				"nombre": "Los milagros ",
				"lugar": "COMEDOR DE DOGOY CRUZ CENTRO",
				"Horario": "9 AM a 12 PM" 
				
			}
		},{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [
				    "-68.8472",
				    "-32.8903"
				]
		    },
			"properties":{
			    "nombre": "CASINO DE MENDOZA",
				"lugar": "CASINO ",
				"Horario": "8 AM- 22 PM",
	
		    }
		},{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [
		            "-68.84522181621134",
		            "-32.92506208618385"
				], 
				
		    },
		    "properties": {
		    	"nombre": "CINE TEATRO PLAZA",
		    	"lugar": "TEATRO",
		    	"Horario": "9AM - 18PM"
		
		    }
		
		}]
	};

	

	
	// Agregando datos GeoJSON en una Capa (layer) vectorial.
	L.geoJson(v_geojsonFeature, {
		onEachFeature: onEachFeature
	}).addTo(mapa);

	// Funcion que muestra informacion en un popup.
	function onEachFeature(p_feature, p_layer) {
		if (p_feature.properties) {
            var v_popupString = '<div class="popup">';

            for (var k in p_feature.properties) {
                var v = p_feature.properties[k];
                v_popupString += '<b>' + k + '</b>: ' + v + '<br />';
            }
            v_popupString += '</div>';
            p_layer.bindPopup(v_popupString);
        }
	}
}
