import React, { useRef, useState } from 'react';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Sidebar from 'app/components/Sidebar';
import Header from 'app/components/Header';
import Container from 'UI/Container';
import MapContainer from 'app/components/Map';
import { convertYearString, dates, mapBCFormat } from '../Utils/constants';

function Main({ mode }) {
  const [index, setIndex] = useState(0);
  return (
    <div
      className={`w-full pb-[50px] ${mode ? 'bg-white' : 'bg-gray-900 p-0'}`}
    >
      <div className={`px-5 grid gap-5 relative top-[40px]`}>
        <div className="relative">
          <MapContainer year={convertYearString(mapBCFormat, dates[index])} />
        </div>
      </div>
    </div>
  );
}

export default Main;
