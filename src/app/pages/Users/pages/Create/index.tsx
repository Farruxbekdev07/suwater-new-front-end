import { useMutation } from '@apollo/client';
import Button from 'UI/Button';
import Input from 'UI/Input';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CREATE__USER } from './api';
import { useTranslation } from 'react-i18next';

export default function CreateUser({ mode }) {
  const navigate = useNavigate();
  const [createUser, { data, error }] = useMutation(CREATE__USER);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [counter, setCounter] = useState('');
  const [password, setPassword] = useState('');
  const [region, setRegion] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const { t } = useTranslation('translation');

  const handleSubmit = e => {
    e.preventDefault();
    if (
      firstName.length !== 0 &&
      password.length !== 0 &&
      counter.length !== 0 &&
      phone.length !== 0 &&
      lastName.length !== 0 &&
      region.length !== 0 &&
      street.length !== 0 &&
      district.length !== 0 &&
      neighborhood.length !== 0
    ) {
      const counterNumber = Number(counter);
      const address = `${region}/${district}/${neighborhood}/${street}`;
      createUser({
        variables: {
          firstName,
          lastName,
          phone,
          password,
          counterNumber,
          address,
        },
      });
      if (error) {
        toast.error(error.message);
      } else {
        navigate('/users');
        toast.success('User created successfully!');
      }
    } else {
      toast.error('Enter full data');
    }
  };

  return (
    <div
      className={`w-full pb-[50px] ${
        mode ? '' : 'bg-gray-900 dark:bg-gray-900 p-0'
      }`}
    >
      <div className={`px-5 grid gap-5 relative top-[80px]`}>
        <div>
          <h3
            className={`text-[32px] text-white font-[600] ${
              mode === true ? 'dark:text-black' : 'text-white dark:text-white'
            }`}
          >
            {t("Foydalanuvchi qo'shish")}
          </h3>
        </div>
        <div className="mt-7">
          <form onSubmit={handleSubmit}>
            <div
              className={`grid grid-cols-2 gap-5 p-5 max-[900px]:grid-cols-1 rounded-xl ${
                mode ? 'bg-gray-100' : 'bg-gray-800 '
              }`}
            >
              <Input
                label="Ismi"
                placeholder=" "
                name="firstname"
                onChange={setFirstName}
              />
              <Input
                label="Familiyasi"
                placeholder=" "
                name="lastname"
                onChange={setLastName}
              />
              <Input
                label="Viloyati"
                placeholder=" "
                name="viloyat"
                onChange={setRegion}
              />
              <Input
                label="Tuman"
                placeholder=" "
                name="tuman"
                onChange={setDistrict}
              />
              <Input
                label="Mahalla"
                placeholder=" "
                name="mahalla"
                onChange={setNeighborhood}
              />
              <Input
                label="Ko'cha"
                placeholder=" "
                name="kucha"
                onChange={setStreet}
              />
              <Input
                label="Telefon"
                placeholder=" "
                name="phone"
                onChange={setPhone}
              />
              <Input
                label="Hisoblagich-raqami"
                placeholder=" "
                name="counterNumber"
                onChange={setCounter}
                type="number"
              />
              <Input
                label="Parol"
                placeholder=" "
                name="parol"
                type="password"
                onChange={setPassword}
              />
            </div>
            <div className="flex justify-end mt-5 gap-5">
              <Button
                type="outline"
                className="w-[200px] flex justify-center"
                mode={mode}
                onClick={() => navigate('/users')}
              >
                {t('Orqaga')}
              </Button>
              <Button className="w-[200px] flex justify-center">
                {t('Saqlash')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
