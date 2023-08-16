import Button from 'UI/Button';
import Container from 'UI/Container';
import Input from 'UI/Input';
import Select from 'UI/Select';
import Header from 'app/components/Header';
import Sidebar from 'app/components/Sidebar';
import { usePost } from 'app/pages/Hooks';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function CreateUser({
  mode,
  changeMode,
  openSidebar,
  setOpenSidebar,
}) {
  const navigate = useNavigate();
  console.log(mode);
  const [firstName, setFirstName] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [region, setRegion] = useState('');
  const [phone, setPhone] = useState('');
  const [homePhone, setHomePhone] = useState('');
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const { mutate: userData } = usePost();
  const userId = JSON.parse(localStorage.getItem('data') || '{}');

  const handleSubmit = e => {
    e.preventDefault();
    console.log({
      firstName,
      password,
      email,
      phone,
      last_name,
      region,
      homePhone,
      street,
      district,
      neighborhood,
    });
    if (
      firstName.length !== 0 &&
      password.length !== 0 &&
      email.length !== 0 &&
      phone.length !== 0 &&
      last_name.length !== 0 &&
      region.length !== 0 &&
      homePhone.length !== 0 &&
      street.length !== 0 &&
      district.length !== 0 &&
      neighborhood
    ) {
      const path = '/users';
      const heroData = {
        firstName,
        password,
        email,
        phone,
        last_name,
        region,
        homePhone,
        street,
        district,
        neighborhood,
      };
      const url = `https://suwater.onrender.com/auth/admins/${userId}/users/add`;
      const data = { heroData, navigate, url, path };
      userData(data);
    } else {
      toast.error('Enter full data');
    }
  };

  return (
    <div className="flex">
      <div
        className={
          openSidebar
            ? 'w-64 max-[640px]:w-20 relative transition-all'
            : 'hidden transition-all'
        }
      >
        <Sidebar open={openSidebar} mode={mode} changeMode={changeMode} />
      </div>
      <div className="flex-1">
        <Header
          mode={mode}
          changeMode={changeMode}
          open={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <div
          className={`w-full pb-[50px] ${
            mode ? '' : 'bg-gray-900 dark:bg-gray-900 p-0'
          }`}
        >
          <Container>
            <div className={`px-5 grid gap-5 relative top-[80px]`}>
              <div>
                <h3
                  className={`text-[32px] text-white font-[600] ${
                    mode === true
                      ? 'dark:text-black'
                      : 'text-white dark:text-white'
                  }`}
                >
                  Foydalanuvchi qo'shish
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
                      onChange={setLast_name}
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
                      label="Ko'chasi"
                      placeholder=" "
                      name="kucha"
                      onChange={setStreet}
                    />
                    <Input
                      label="Uy raqami"
                      placeholder=" "
                      name="home"
                      onChange={setHomePhone}
                    />
                    <Input
                      label="Telefon"
                      placeholder=" "
                      name="phone"
                      onChange={setPhone}
                    />
                    <Input
                      label="Login"
                      placeholder=" "
                      name="login"
                      onChange={setEmail}
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
                      Orqaga
                    </Button>
                    <Button className="w-[200px] flex justify-center">
                      Saqlash
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
