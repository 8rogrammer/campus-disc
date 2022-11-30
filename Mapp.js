import "../App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";

export const data = [
	{
		"location": "Manhattan Ave & Norman Ave at NE corner",
		"city": "Brooklyn",
		"state": "New York",
		"coordinates": -84.39602856451341,
		"another": 33.77373416406763,
	
	},
	{
		"location": "6th Ave & 42nd St at NW corner",
		"city": "Manhattan",
		"state": "New York",
		"coordinates": [-73.98393399979334,40.75533300052329],
	
	},
	{
		"location": "Essex St & Delancey St at SE corner",
		"city": "Manhattan",
		"state": "New York",
		"coordinates": [-73.9882730001973,40.718207001246554],

	}
]

function Mapp() {
	
  const [lng, setLng] = useState(-84.3964362602619);
  const [lat, setLat] = useState(33.7751075606479);
  
  return (
    <div className="App">
    {console.log('pk.eyJ1Ijoic2JhbGFzdWIzNiIsImEiOiJjbGIyb2hpaXkwMHVrM25yc3JmdmtsZXJoIn0.4VJ3VfOipTrZJAlMyeByUQ')}
      <h1>Mapbox tutorial</h1>
      <Map
        mapboxAccessToken={'pk.eyJ1Ijoic2JhbGFzdWIzNiIsImEiOiJjbGIyb2hpaXkwMHVrM25yc3JmdmtsZXJoIn0.4VJ3VfOipTrZJAlMyeByUQ'}
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "15px",
          border: "2px solid green",
		  margin: "auto",
		  zoom: 1
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
		  center: [lng, lat],
		  zoom: 14.5

        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude='-84.3964362602619' latitude='33.7751075606479' />
		<main> </main>
		
		<script>
			var finalString = "";
			for (let i = 0; i < 2; i++) {
    			finalString += `<Marker longitude=${data[i]["coordinates"]} latitude=${data[i]["another"]}/>`;
    			main.innerHTML = finalString;
			}
			 </script>
        <NavigationControl position="bottom-right" />
        <FullscreenControl />
        <GeolocateControl />
      </Map>
    </div>
  );
}

export default Mapp;