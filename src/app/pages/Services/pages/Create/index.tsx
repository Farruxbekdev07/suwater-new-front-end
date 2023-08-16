import React, { useState } from 'react';
import Button from 'UI/Button';
import Container from 'UI/Container';
import Input from 'UI/Input';
import Select from 'UI/Select';
import Header from 'app/components/Header';
import Sidebar from 'app/components/Sidebar';
import { useNavigate } from 'react-router-dom';
import Textarea from 'UI/Textarea';
import { toast } from 'react-toastify';
import { usePost } from 'app/pages/Hooks';

export default function CreateService({
  mode,
  changeMode,
  openSidebar,
  setOpenSidebar,
}) {
  const navigate = useNavigate();
  console.log(mode);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [information, setInformation] = useState('');
  const [image, setImage] = useState([]);
  const [job, setJob] = useState('');
  const { mutate: serviceData } = usePost();
  const userId = JSON.parse(localStorage.getItem('data') || '{}');

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(name, phone, information, image[0]);
    if (
      name.length !== 0 &&
      phone.length !== 0 &&
      information.length !== 0 &&
      image.length !== 0
    ) {
      var formData = new FormData();
      formData.append('image', image[0]);
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('information', information);
      formData.append('job', job);
      const path = '/services';
      const headers = {
        'Content-Type': 'multipart/form-data',
        Accept: '*/*',
      };
      // const heroData = { name, phone, information, image: image[0] };
      const url = `https://suwater.onrender.com/services/${userId}`;
      const data = { formData, navigate, url, path, headers };
      serviceData(data);
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
                  Xizmat qo'shish
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
                        <Input
                          label="Telefon raqami"
                          placeholder=" "
                          name="phone"
                          onChange={setPhone}
                        />
                        <Input
                          label="Kasbi"
                          placeholder=" "
                          name="job"
                          onChange={setJob}
                        />
                      </div>
                      <div>
                        <Textarea
                          label="Ma'lumot yozing"
                          placeholder=" "
                          name="information"
                          className="h-[120px]"
                          onChange={setInformation}
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
                        <Button className="w-1/4 flex justify-center">
                          Saqlash
                        </Button>
                      </div>
                    </div>
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
