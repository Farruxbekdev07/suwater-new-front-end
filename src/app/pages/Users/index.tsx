import Button from 'UI/Button';
import Container from 'UI/Container';
import Input from 'UI/Input';
import Select from 'UI/Select';
import Header from 'app/components/Header';
import Sidebar from 'app/components/Sidebar';
import Table from 'app/components/Table';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const dataSource = [
  {
    key: '1',
    name: 'Abduqodir Kuralov',
    address: "Jizzax viloyati / Sharof Rashidov tumani / Qo'rayantoq mahallasi",
    action: "Ma'lumotlarni ko'rish",
  },
  {
    key: '2',
    name: 'Abduqodir Kuralov',
    address: "Jizzax viloyati / Sharof Rashidov tumani / Qo'rayantoq mahallasi",
    action: "Ma'lumotlarni ko'rish",
  },
  {
    key: '3',
    name: 'Abduqodir Kuralov',
    address: "Jizzax viloyati / Sharof Rashidov tumani / Qo'rayantoq mahallasi",
    action: "Ma'lumotlarni ko'rish",
  },
  {
    key: '4',
    name: 'Abduqodir Kuralov',
    address: "Jizzax viloyati / Sharof Rashidov tumani / Qo'rayantoq mahallasi",
    action: "Ma'lumotlarni ko'rish",
  },
  {
    key: '5',
    name: 'Abduqodir Kuralov',
    address: "Jizzax viloyati / Sharof Rashidov tumani / Qo'rayantoq mahallasi",
    action: "Ma'lumotlarni ko'rish",
  },
  {
    key: '1',
    name: 'Abduqodir Kuralov',
    address: "Jizzax viloyati / Sharof Rashidov tumani / Qo'rayantoq mahallasi",
    action: "Ma'lumotlarni ko'rish",
  },
  {
    key: '2',
    name: 'Abduqodir Kuralov',
    address: "Jizzax viloyati / Sharof Rashidov tumani / Qo'rayantoq mahallasi",
    action: "Ma'lumotlarni ko'rish",
  },
  {
    key: '3',
    name: 'Abduqodir Kuralov',
    address: "Jizzax viloyati / Sharof Rashidov tumani / Qo'rayantoq mahallasi",
    action: "Ma'lumotlarni ko'rish",
  },
  {
    key: '4',
    name: 'Abduqodir Kuralov',
    address: "Jizzax viloyati / Sharof Rashidov tumani / Qo'rayantoq mahallasi",
    action: "Ma'lumotlarni ko'rish",
  },
  {
    key: '5',
    name: 'Abduqodir Kuralov',
    address: "Jizzax viloyati / Sharof Rashidov tumani / Qo'rayantoq mahallasi",
    action: "Ma'lumotlarni ko'rish",
  },
  {
    key: '1',
    name: 'Abduqodir Kuralov',
    address: "Jizzax viloyati / Sharof Rashidov tumani / Qo'rayantoq mahallasi",
    action: "Ma'lumotlarni ko'rish",
  },
  {
    key: '2',
    name: 'Abduqodir Kuralov',
    address: "Jizzax viloyati / Sharof Rashidov tumani / Qo'rayantoq mahallasi",
    action: "Ma'lumotlarni ko'rish",
  },
  {
    key: '3',
    name: 'Abduqodir Kuralov',
    address: "Jizzax viloyati / Sharof Rashidov tumani / Qo'rayantoq mahallasi",
    action: "Ma'lumotlarni ko'rish",
  },
  {
    key: '4',
    name: 'Abduqodir Kuralov',
    address: "Jizzax viloyati / Sharof Rashidov tumani / Qo'rayantoq mahallasi",
    action: "Ma'lumotlarni ko'rish",
  },
  {
    key: '5',
    name: 'Abduqodir Kuralov',
    address: "Jizzax viloyati / Sharof Rashidov tumani / Qo'rayantoq mahallasi",
    action: "Ma'lumotlarni ko'rish",
  },
];

const columns = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '',
    dataIndex: 'action',
    key: 'action',
  },
];

export default function Users({
  mode,
  changeMode,
  openSidebar,
  setOpenSidebar,
}) {
  const navigate = useNavigate();
  console.log(mode);

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
              <div className="flex justify-between">
                <h3
                  className={`text-[32px] text-white font-[600] ${
                    mode === true
                      ? 'dark:text-black'
                      : 'text-white dark:text-white'
                  }`}
                >
                  Foydalanuvchilar
                </h3>
                <Button
                  className="rounded-2xl"
                  mode={mode}
                  onClick={() => navigate('/users/add-user')}
                >
                  Foydalanuvchi qo'shish
                </Button>
              </div>
              <div
                className="grid gap-4 grid-cols-2"
                style={{
                  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                }}
              >
                <Select option={'option'} mode={mode} />
                <Select option={'option'} mode={mode} />
                <Input label="ID" placeholder=" " name="id" mode={mode} />
                <Button
                  className={`rounded-2xl flex justify-center`}
                  mode={mode}
                >
                  Qidirish
                </Button>
              </div>
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={true}
                totalDocs={20}
                mode={mode}
              />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
