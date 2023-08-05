import Button from 'UI/Button';
import Container from 'UI/Container';
import Header from 'app/components/Header';
import Sidebar from 'app/components/Sidebar';
import Table from 'app/components/Table';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Services({ mode, changeMode, openSidebar, setOpenSidebar }) {
  const navigate = useNavigate();
  const dataSource = [
    {
      key: '1',
      name: 'Santexnika xizmati',
      address: 'Ikrom Alixanov',
      action: '+998 50 000 77 00',
    },
    {
      key: '2',
      name: 'Santexnika xizmati',
      address: 'Ikrom Alixanov',
      action: '+998 50 000 77 00',
    },
    {
      key: '3',
      name: 'Santexnika xizmati',
      address: 'Ikrom Alixanov',
      action: '+998 50 000 77 00',
    },
    {
      key: '4',
      name: 'Santexnika xizmati',
      address: 'Ikrom Alixanov',
      action: '+998 50 000 77 00',
    },
    {
      key: '5',
      name: 'Santexnika xizmati',
      address: 'Ikrom Alixanov',
      action: '+998 50 000 77 00',
    },
    {
      key: '1',
      name: 'Santexnika xizmati',
      address: 'Ikrom Alixanov',
      action: '+998 50 000 77 00',
    },
    {
      key: '2',
      name: 'Santexnika xizmati',
      address: 'Ikrom Alixanov',
      action: '+998 50 000 77 00',
    },
    {
      key: '3',
      name: 'Santexnika xizmati',
      address: 'Ikrom Alixanov',
      action: '+998 50 000 77 00',
    },
    {
      key: '4',
      name: 'Santexnika xizmati',
      address: 'Ikrom Alixanov',
      action: '+998 50 000 77 00',
    },
    {
      key: '5',
      name: 'Santexnika xizmati',
      address: 'Ikrom Alixanov',
      action: '+998 50 000 77 00',
    },
    {
      key: '1',
      name: 'Santexnika xizmati',
      address: 'Ikrom Alixanov',
      action: '+998 50 000 77 00',
    },
    {
      key: '2',
      name: 'Santexnika xizmati',
      address: 'Ikrom Alixanov',
      action: '+998 50 000 77 00',
    },
    {
      key: '3',
      name: 'Santexnika xizmati',
      address: 'Ikrom Alixanov',
      action: '+998 50 000 77 00',
    },
    {
      key: '4',
      name: 'Santexnika xizmati',
      address: 'Ikrom Alixanov',
      action: '+998 50 000 77 00',
    },
    {
      key: '5',
      name: 'Santexnika xizmati',
      address: 'Ikrom Alixanov',
      action: '+998 50 000 77 00',
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

  return (
    <div className="">
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
              <div className={`grid gap-5 relative top-[80px]`}>
                <div className="px-5 relative">
                  <div className="flex justify-between w-100 mb-5">
                    <h3
                      className={`text-[32px] font-[600] ${
                        mode === true ? 'text-black' : 'text-white'
                      }`}
                    >
                      Xizmatlar
                    </h3>
                    <Button onClick={() => navigate('/services/add-service')}>
                      Xizmat qo'shish
                    </Button>
                  </div>
                  <Table
                    columns={columns}
                    dataSource={dataSource}
                    pagination={true}
                    totalDocs={20}
                    mode={mode}
                  />
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
