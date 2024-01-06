
import {MapContainer,TileLayer,Marker,Popup} from "react-leaflet"
import "./Map.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from  "leaflet"
import LeafletGeocoder from "./LeafletGeocoder";
import LeafletRoutingMachine from "./LeafletRoutingMachine";

function Map (){
    // const position = [36.8189700, 10.1657900]  
    const position = [36.850663264,10.222999108] 
    return (

      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       <LeafletGeocoder/>
       <LeafletRoutingMachine/>

      </MapContainer>
    )
}

let DefaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  
  L.Marker.prototype.options.icon = DefaultIcon;
 
export default Map;


// https://unpkg.com/leaflet@1.6/dist/images/
