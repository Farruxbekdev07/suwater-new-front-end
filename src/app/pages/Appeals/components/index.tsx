import React from 'react';
import image from 'media/images/Rectangle 8.png';
import Button from 'UI/Button';
import { XMarkIcon, MapIcon, MapPinIcon } from '@heroicons/react/24/outline';
import mapImg from 'media/images/map-pin.png';

function RightModal({ hidden, flex, setHidden, setFlex, mode }) {
  const handleClick = () => {
    if (flex === 'flex') {
      setHidden('hidden');
      setFlex('block');
    }
  };
  return (
    <>
      <div className={`${hidden} fixed right-5 w-[auto] min-w-[350px]`}>
        <div>
          <div
            className={`px-5 pt-5 rounded-t-xl mt-16 ${
              mode === true
                ? 'border border-gray-300 border-b-0'
                : 'bg-gray-800'
            }`}
          >
            <img src={image} alt="image.png" className="w-100" />
          </div>
          <div
            className={`max-w-[360px] flex flex-col justify-between h-[300px] px-5 pt-8 pb-5 rounded-b-xl ${
              mode === true
                ? 'border border-gray-300 border-t-0 text-black'
                : 'bg-gray-800 text-white border border-gray-900'
            }`}
          >
            <div>
              <p className="mb-2 font-[600] font-sans text-[18px]">
                Bobur mahallasi
              </p>
              <p className="font-sans text-[14px] mb-2">
                Assalomu aleykum biz bobur mahallasidan xabar yozmoqdamiz
                bizning ko'chada quvr yorilganini eslatamiz.
              </p>
              <p className="flex font-sans text-[16px] gap-2 items-center">
                <img src={mapImg} alt="map" className="h-[30px]" />
                Registon ko'chasi, Samarqand, O'zb/
              </p>
            </div>
            <div className="flex gap-5">
              <Button
                className={`w-1/2 flex justify-center`}
                mode={mode}
                type="outline"
                onClick={handleClick}
              >
                Cancel
              </Button>
              <Button className="w-1/2 flex justify-center">
                Qabul qilish
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightModal;
