//-----------------------定义地图---------------------


var osmUrl = 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoienh0MTU1MTM2MiIsImEiOiJjamYydHp5YWEwNTYwMndxaDE3ZTV1eXo5In0.oFK8I1pv4ZKB56abIZcOiw',
        osm = L.tileLayer(osmUrl, {
            maxZoom: 20,
            minZoom: 6,
        });
   var map = new L.Map('map').addLayer(osm).setView(new L.LatLng(22.55174700000,114.09112200000), 11);



	var controlSearch = new L.Control.Search({
		position:'topright',		
		layer: markersLayer,
		initial: false,
		zoom: 12,
		marker: false
	});

	map.addControl( controlSearch );



















