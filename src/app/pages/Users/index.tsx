import { useLazyQuery } from '@apollo/client';
import Button from 'UI/Button';
import Input from 'UI/Input';
import Select from 'UI/Select';
import Table from 'app/components/Table';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET__USER } from './pages/api';
import { districts, regions, villages } from 'data';
import RightContext from 'app/components/RightContext';
import { useTranslation } from 'react-i18next';

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
  const navigate = useNavigate();
  const region = regions.filter(item => item.name_uz === 'Jizzax viloyati')[0];
  const district = districts.filter(item => item.region_id === region.id);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const village = villages.filter(item => item.district_id == selectedDistrict);
  const [selectedVillage, setSelectedVillage] = useState(village);
  const [getUser, { data, refetch }] = useLazyQuery(GET__USER);
  const { t } = useTranslation('translation');

  useEffect(() => {
    getUser({
      variables: {
        size: 10,
        page,
      },
    });
  }, [data]);

  const logger = () => {
    refetch();
    console.log(data?.getUsers?.payload);
    console.log(selectedDistrict);
  };

  const selectDistrict = value => {
    const new_district = districts.filter(
      item => item.name_uz === value.target.value,
    )[0];
    setSelectedDistrict(new_district.id);
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
            {t('sidebar.foydalanuvchilar')}
          </h3>
          <Button
            className="rounded-2xl"
            mode={mode}
            onClick={() => navigate('/users/add-user')}
          >
            {t("users.foydalanuvchi-qo'shish")}
          </Button>
        </div>
        <div
          className="grid gap-4 grid-cols-2"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          }}
        >
          <Select mode={mode} onChange={selectDistrict}>
            {district?.map((item, index) => (
              <option key={index}>{item.name_uz}</option>
            ))}
          </Select>
          <Select
            mode={mode}
            onChange={e => setSelectedVillage(e.target.value)}
          >
            {village?.map((item, index) => (
              <option className="h-[40px] block px-[50px]" key={index}>
                {item.name_uz}
              </option>
            ))}
          </Select>
          <Input label="ID" placeholder=" " name="id" mode={mode} />
          <Button
            className={`rounded-2xl flex justify-center`}
            mode={mode}
            onClick={logger}
          >
            {t('sidebar.foydalanuvchilar')}
          </Button>
        </div>
        {data ? (
          <Table
            dataSource={data?.getUsers?.payload}
            columns={columns}
            pagination={true}
            totalDocs={20}
            mode={mode}
          />
        ) : null}
      </div>
    </div>
  );
}
