import { useLazyQuery, useQuery } from '@apollo/client';
import Button from 'UI/Button';
import Container from 'UI/Container';
import Input from 'UI/Input';
import Select from 'UI/Select';
import Header from 'app/components/Header';
import Sidebar from 'app/components/Sidebar';
import Table from 'app/components/Table';
import { i18n } from 'locales/i18n';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET__USER } from './pages/api';

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
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: '',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '',
    dataIndex: 'phone',
    key: 'phone',
  },
];

export default function Users({ mode }) {
  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  console.log(mode);
  const [getUser, { data, refetch }] = useLazyQuery(GET__USER);

  useEffect(() => {
    getUser({
      variables: {
        size: 10,
        page,
      },
    });
  }, []);

  const logger = () => {
    console.log(data.getUsers.payload);
  };

  return (
    <div
      className={`w-full pb-[50px] ${mode ? 'bg-white' : 'bg-gray-900 p-0'}`}
    >
      <div className={`px-5 grid gap-5 relative top-[80px]`}>
        <div className="flex justify-between">
          <h3
            className={`text-[32px] font-[600] ${
              mode ? 'text-black' : 'text-white'
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
            onClick={logger}
          >
            Qidirish
          </Button>
        </div>
        <Table
          dataSource={data?.getUsers?.payload}
          columns={columns}
          pagination={true}
          totalDocs={20}
          mode={mode}
        />
      </div>
    </div>
  );
}
