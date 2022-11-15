import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

import mapStyles from "./mapStyles";

// Map Options

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",

}

const center = {
  lat: 9.9456,
  lng: 9.6966
}

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,

}

// Markers


export default function App() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const [selected, setSelected] = React.useState(null);

//   const myLatlng = new google.maps.LatLng(-25.363882,131.044922);

//   new google.maps.Marker({
//     position: myLatlng,
//     title: "Hello World!",
// });

  if (loadError) return "Error loading maps...";
  if (!isLoaded) return "Loading maps...";

  let markers = [ // Just an example this should probably be in your state or props. 
  {
    name: "Pontificia Universidad Católica de Chile",
    position: { lat: -33.4411, lng: -71.605756 },
    pic: "https://www.uc.cl/site/assets/files/1/og_uc_1200x630.jpg",
    txt: 
    "Last week, Northwestern welcomed a delegation from Indonesia who met with faculty."
  },
  {
    name: "ESNE UDIT Univ. of Design and Technology",
    position: { lat: 43.518776066040054, lng: -3.2042602646516696 },
    pic: "https://www.uc.cl/site/assets/files/1/og_uc_1200x630.jpg"
  },

  {
    name: "Tel Aviv University",
    position: { lat: 32.12203220918684, lng: 34.80470169304138},
    pic: "https://www.uc.cl/site/assets/files/1/og_uc_1200x630.jpg"
  },

  {
    name: "Universidad Panamericana",
    position: { lat: 19.48019335536261, lng: -99.17139771874655 },
    pic: "https://www.uc.cl/site/assets/files/1/og_uc_1200x630.jpg"
  },

  {
    name: "CEU San Pablo University",
    position: { lat: 40.44283304917721, lng: -3.7177161311135647 },
    pic: "https://www.uc.cl/site/assets/files/1/og_uc_1200x630.jpg"
  },

  {
    name: "National Taiwan University",
    position: { lat: 25.017544651160385, lng: 121.53975179728224 },
    pic: "https://www.uc.cl/site/assets/files/1/og_uc_1200x630.jpg"
  },

  {
    name: "UAE Scholarship Office",
    position: { lat: 24.472094299320695, lng: 54.38338406658058 },
    pic: "https://www.uc.cl/site/assets/files/1/og_uc_1200x630.jpg"
  },

  {
    name: "Japan Consul General",
    position: { lat: 41.89622673432281, lng: -87.62356196167777 },
    pic: "https://www.uc.cl/site/assets/files/1/og_uc_1200x630.jpg"
  },

  {
    name: "Chinese Consul General",
    position: { lat: 41.894002679082206, lng: -87.62783928873539 },
    pic: "https://www.uc.cl/site/assets/files/1/og_uc_1200x630.jpg"
  },

  {
    name: "Indian Consul General",
    position: { lat: 41.89012931087092, lng: -87.62147165989931 },
    pic: "https://www.uc.cl/site/assets/files/1/og_uc_1200x630.jpg"
  },

  {
    name: "Ministry for Science, Education and Research & OSTA",
    position: { lat: 38.94562669815216, lng: -77.06923586000039 },
    pic: "https://www.uc.cl/site/assets/files/1/og_uc_1200x630.jpg"
  },

  {
    name: "Indonesian Delegation",
    position: { lat: -6.160781852903187, lng: 106.82744697565509},
    pic: "https://www.northwestern.edu/international-relations/news/2022/news_images/indonesian-delegation_hero.jpg",
    txt: "In April 2022, a delegation, led by Luhut Pandjaitan, Indonesia’s Coordinating Minister for Maritime Affairs and Investment, visited Northwestern for a keynote presentation.",
    lnk: "https://www.northwestern.edu/international-relations/news/2022/indonesia-delegation.html"
  }


];

    return (
    <div>
      <h1>Northwestern International Visitors</h1>
      <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={3}
        center={center}
        options={options}
        >
      {markers.map((marker, index) => (
        <Marker
          title={marker.name}
          key={index}
          name={marker.name}
          position={marker.position}
          onClick={() => {
            setSelected(marker);
          }} />
      ))}

      {selected && (
        <InfoWindow position={selected.position}>
      <div>
        <h2> Visitor: {selected.name}</h2>
      <a href={selected.lnk}>
        <img src={selected.pic} height="400" width="620" ></img>
      </a>

        <p>{selected.txt} Click the photo for more information. </p>
        <button class="btn" onClick={() => setSelected("")}>Close</button>
      </div>
    </InfoWindow>
          )}

        </GoogleMap>

          
        </div>
        
        
  )};
