import React, { ReactNode, useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

type Props = {
  center: { lat: number; lng: number };
  zoom?: number;
  children?: ReactNode;
};

function Map({ center, children, zoom }: Props) {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsRendered(true);
    }, 0);
  }, []);

  const mapLayer = {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`,
  };

  return isRendered ? (
    <MapContainer zoomControl={false} center={center} zoom={zoom ?? 13}>
      <TileLayer attribution={mapLayer.attribution} url={mapLayer.url} />
      {children}
    </MapContainer>
  ) : null;
}

export default Map;
