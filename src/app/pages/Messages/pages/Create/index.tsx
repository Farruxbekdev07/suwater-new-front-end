import React, { useState } from 'react';
import Button from 'UI/Button';
import Input from 'UI/Input';
import Select from 'UI/Select';
import { useNavigate } from 'react-router-dom';
import Textarea from 'UI/Textarea';
import { usePost } from 'app/pages/Hooks';
import { toast } from 'react-toastify';
import { CREATE__APPEAL } from './api';
import { useMutation } from '@apollo/client';

export default function SendMessage({ mode }) {
  const navigate = useNavigate();
  console.log(mode);
  const [createEmployee, { data, error }] = useMutation(CREATE__APPEAL);
  const [name, setName] = useState('');
  const [user, setUser] = useState('64eda45bb9c474bf542eeba6');
  const [status, setStatus] = useState('pending');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (
      name.length !== 0 &&
      description.length !== 0 &&
      image.length !== 0 &&
      location.length !== 0
    ) {
      createEmployee({
        variables: {
          // status,
          description,
          image: image[0],
          location,
          user,
        },
      });
    } else {
      toast.error('Enter full data');
    }
  };

  const options = [
    {
      option: 'pending',
    },
    {
      option: 'approved',
    },
  ];

  return (
    <div className={`w-full pb-[50px] ${mode ? '' : 'bg-gray-900 p-0'}`}>
      <div className={`px-5 grid gap-5 relative top-[80px]`}>
        <div>
          <h3
            className={`text-[32px] font-[600] ${
              mode === true ? 'text-black' : 'text-white'
            }`}
          >
            Xabar yozish
          </h3>
        </div>
        <div className="mt-7">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div
              className={`grid grid-cols-2 gap-5 p-5 max-[900px]:grid-cols-1 rounded-xl ${
                mode ? 'bg-gray-100' : 'bg-gray-800 '
              }`}
            >
              <div>
                <Input
                  type="file"
                  className="h-full"
                  name="testImage"
                  onChange={setImage}
                />
              </div>
              <div className="grid gap-5">
                <div className="grid gap-5">
                  <Input
                    label="Ismi"
                    placeholder=" "
                    name="name"
                    onChange={setName}
                  />
                  {/* <Select
                    option={status}
                    name="status"
                    onChange={setStatus}
                  /> */}
                </div>
                <div className="grid gap-5">
                  <Input
                    label="Manzil"
                    placeholder=" "
                    name="location"
                    onChange={setLocation}
                  />
                </div>
                <div>
                  <Textarea
                    label="Ma'lumot yozing"
                    placeholder=" "
                    name="description"
                    className="h-[120px]"
                    onChange={setDescription}
                  />
                </div>
                <div className="flex justify-end gap-5">
                  <Button
                    type="outline"
                    mode={mode}
                    className="w-1/4 flex justify-center"
                  >
                    Orqaga
                  </Button>
                  <Button className="w-1/4 flex justify-center">Saqlash</Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
