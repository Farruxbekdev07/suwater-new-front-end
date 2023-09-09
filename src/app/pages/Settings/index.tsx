import { useMutation } from '@apollo/client';
import Button from 'UI/Button';
import Input from 'UI/Input';
import React, { useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { UPDATE__USER } from './api';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

function Settings({ mode }) {
  const userId = useSelector(
    (state: RootStateOrAny) => state?.auth?.userId?.id,
  );
  const [updateUser, { data, error }] = useMutation(UPDATE__USER);
  const [image, setImage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [counter, setCounter] = useState('');
  const [phone, setPhone] = useState('');
  const { t, i18n } = useTranslation('translation');

  const handleUpdate = () => {
    console.log(userId);
    const counterNumber = Number(counter);
    updateUser({
      variables: {
        firstName,
        lastName,
        address,
        counterNumber,
        phone,
        ID: userId,
      },
    });
    if (error) {
      toast.error(error?.message);
    } else {
      toast.success('Update user successfully');
    }
  };

  return (
    <div className={`w-full ${mode ? '' : 'bg-gray-900 dark:bg-gray-900 p-0'}`}>
      <div className={`px-5 grid gap-5 relative top-[80px]`}>
        <div className="max-[425px]:px-0">
          <div>
            <h3
              className={`text-[32px] mb-5 font-[600] ${
                mode === true ? 'text-black' : 'text-white'
              }`}
            >
              {t('sidebar.sozlamalar')}
            </h3>
          </div>
          <div className="flex gap-5 max-[768px]:grid">
            <div className="w-1/2 max-[768px]:w-full">
              <Input type="file" mode={mode} onChange={setImage} />
            </div>
            <div className="grid gap-5 w-1/2 max-[768px]:w-full">
              <Input
                label="users.ismi"
                name="firstname"
                placeholder=" "
                mode={mode}
                onChange={setFirstName}
              />
              <Input
                label="users.familiyasi"
                name="lastname"
                placeholder=" "
                mode={mode}
                onChange={setLastName}
              />
              <Input
                label="settings.manzil"
                name="address"
                placeholder=" "
                mode={mode}
                onChange={setAddress}
              />
              <Input
                label="users.hisoblagich-raqami"
                name="counterNumber"
                placeholder=" "
                mode={mode}
                onChange={setCounter}
              />
              <Input
                label="users.telefon"
                name="phone"
                placeholder=" "
                mode={mode}
                onChange={setPhone}
              />
              <div className="flex justify-between gap-5 max-[450px]:flex-col">
                <Button
                  className={`w-1/2 flex justify-center max-[450px]:w-full`}
                  type="outline"
                  mode={mode}
                >
                  {t('users.orqaga')}
                </Button>
                <Button
                  mode={mode}
                  className="w-1/2 flex justify-center max-[450px]:w-full"
                  onClick={handleUpdate}
                >
                  {t('users.saqlash')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
