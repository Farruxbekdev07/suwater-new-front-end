import React, { useRef } from 'react';
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
  Circle,
  CircleMarker,
  Polyline,
  Polygon,
  Rectangle,
  SVGOverlay,
} from 'react-leaflet';
import L, { LeafletMouseEvent, bounds } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Map from 'app/components/Map';
import Sidebar from 'app/components/Sidebar';
import Header from 'app/components/Header';
import Container from 'UI/Container';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
// import 'leaflet/dist/leaflet.css';
// import 'index.css';

// function LocationMarker() {
//   const [position, setPosition] = React.useState(null);
//   const map = useMapEvents({
//     click() {
//       map.locate();
//     },
//     locationfound(e) {
//       setPosition(e.latlng);
//       map.flyTo(e.latlng, map.getZoom());
//     },
//   });

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>You are here</Popup>
//     </Marker>
//   );
// }

function Main({ mode, setMode, openSidebar, setOpenSidebar }) {
  return (
    <div className="flex">
      <div
        className={
          openSidebar
            ? 'w-64 max-[640px]:w-20 relative transition-all'
            : 'hidden transition-all'
        }
      >
        <Sidebar open={openSidebar} mode={mode} changeMode={setMode} />
      </div>
      <div className="flex-1">
        <Header
          mode={mode}
          changeMode={setMode}
          open={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />

        <div className={`w-full pb-[50px] ${mode ? '' : 'bg-gray-900 p-0'}`}>
          <Container>
            <div className={`px-5 grid gap-5 relative top-[40px]`}>
              <div className="relative overflow-hidden">
                <Map
                  center={{ lat: 40.1258659569295, lng: 67.82735824584962 }}
                  zoom={9}
                ></Map>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Main;
