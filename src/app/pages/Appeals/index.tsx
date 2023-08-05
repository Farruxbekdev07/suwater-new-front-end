import Button from 'UI/Button';
import Table from 'app/components/Table';
import React from 'react';
import RightModal from './components';
import Container from 'UI/Container';
import Sidebar from 'app/components/Sidebar';
import Header from 'app/components/Header';

function Appeals({ mode, changeMode, openSidebar, setOpenSidebar }) {
  const [flex, setFlex] = React.useState('block');
  const [hidden, setHidden] = React.useState('hidden');

  const handleClick = () => {
    if (flex === 'block') {
      setFlex('flex');
      setHidden('');
    }
  };

  const dataSource = [
    {
      key: '1',
      name: 'Shofirkon mahallasi',
      address: "Registon ko'chasi, Samarqand, O'zbekiston",
      action: (
        <Button
          className="outline-0 border-0 py-0 m0"
          type="outline"
          onClick={handleClick}
          mode={mode}
        >
          Ma'lumotlarni ko'rish
        </Button>
      ),
    },
    {
      key: '2',
      name: 'Shofirkon mahallasi',
      address: "Registon ko'chasi, Samarqand, O'zbekiston",
      action: (
        <Button
          className="outline-0 border-0 py-0"
          type="outline"
          onClick={handleClick}
          mode={mode}
        >
          Ma'lumotlarni ko'rish
        </Button>
      ),
    },
    {
      key: '3',
      name: 'Shofirkon mahallasi',
      address: "Registon ko'chasi, Samarqand, O'zbekiston",
      action: (
        <Button
          className="outline-0 border-0 py-0"
          type="outline"
          onClick={handleClick}
          mode={mode}
        >
          Ma'lumotlarni ko'rish
        </Button>
      ),
    },
    {
      key: '4',
      name: 'Shofirkon mahallasi',
      address: "Registon ko'chasi, Samarqand, O'zbekiston",
      action: (
        <Button
          className="outline-0 border-0 py-0"
          type="outline"
          onClick={handleClick}
          mode={mode}
        >
          Ma'lumotlarni ko'rish
        </Button>
      ),
    },
    {
      key: '5',
      name: 'Shofirkon mahallasi',
      address: "Registon ko'chasi, Samarqand, O'zbekiston",
      action: (
        <Button
          className="outline-0 border-0 py-0"
          type="outline"
          onClick={handleClick}
          mode={mode}
        >
          Ma'lumotlarni ko'rish
        </Button>
      ),
    },
    {
      key: '1',
      name: 'Shofirkon mahallasi',
      address: "Registon ko'chasi, Samarqand, O'zbekiston",
      action: (
        <Button
          className="outline-0 border-0 py-0"
          type="outline"
          onClick={handleClick}
          mode={mode}
        >
          Ma'lumotlarni ko'rish
        </Button>
      ),
    },
    {
      key: '2',
      name: 'Shofirkon mahallasi',
      address: "Registon ko'chasi, Samarqand, O'zbekiston",
      action: (
        <Button
          className="outline-0 border-0 py-0"
          type="outline"
          onClick={handleClick}
          mode={mode}
        >
          Ma'lumotlarni ko'rish
        </Button>
      ),
    },
    {
      key: '3',
      name: 'Shofirkon mahallasi',
      address: "Registon ko'chasi, Samarqand, O'zbekiston",
      action: (
        <Button
          className="outline-0 border-0 py-0"
          type="outline"
          onClick={handleClick}
          mode={mode}
        >
          Ma'lumotlarni ko'rish
        </Button>
      ),
    },
    {
      key: '4',
      name: 'Shofirkon mahallasi',
      address: "Registon ko'chasi, Samarqand, O'zbekiston",
      action: (
        <Button
          className="outline-0 border-0 py-0"
          type="outline"
          onClick={handleClick}
          mode={mode}
        >
          Ma'lumotlarni ko'rish
        </Button>
      ),
    },
    {
      key: '5',
      name: 'Shofirkon mahallasi',
      address: "Registon ko'chasi, Samarqand, O'zbekiston",
      action: (
        <Button
          className="outline-0 border-0 py-0"
          type="outline"
          onClick={handleClick}
          mode={mode}
        >
          Ma'lumotlarni ko'rish
        </Button>
      ),
    },
    {
      key: '1',
      name: 'Shofirkon mahallasi',
      address: "Registon ko'chasi, Samarqand, O'zbekiston",
      action: (
        <Button
          className="outline-0 border-0 py-0"
          type="outline"
          onClick={handleClick}
          mode={mode}
        >
          Ma'lumotlarni ko'rish
        </Button>
      ),
    },
    {
      key: '2',
      name: 'Shofirkon mahallasi',
      address: "Registon ko'chasi, Samarqand, O'zbekiston",
      action: (
        <Button
          className="outline-0 border-0 py-0"
          type="outline"
          onClick={handleClick}
          mode={mode}
        >
          Ma'lumotlarni ko'rish
        </Button>
      ),
    },
    {
      key: '3',
      name: 'Shofirkon mahallasi',
      address: "Registon ko'chasi, Samarqand, O'zbekiston",
      action: (
        <Button
          className="outline-0 border-0 py-0"
          type="outline"
          onClick={handleClick}
          mode={mode}
        >
          Ma'lumotlarni ko'rish
        </Button>
      ),
    },
    {
      key: '4',
      name: 'Shofirkon mahallasi',
      address: "Registon ko'chasi, Samarqand, O'zbekiston",
      action: (
        <Button
          className="outline-0 border-0 py-0"
          type="outline"
          onClick={handleClick}
          mode={mode}
        >
          Ma'lumotlarni ko'rish
        </Button>
      ),
    },
    {
      key: '5',
      name: 'Shofirkon mahallasi',
      address: "Registon ko'chasi, Samarqand, O'zbekiston",
      action: (
        <Button
          className="outline-0 border-0 py-0"
          type="outline"
          onClick={handleClick}
          mode={mode}
        >
          Ma'lumotlarni ko'rish
        </Button>
      ),
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
    <>
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
              <div className={`grid gap-5 relative`}>
                <div
                  className={`${flex} justify-between w-100 relative top-[80px]`}
                >
                  <div className="px-5 w-100">
                    <div className="mb-5">
                      <p
                        className={`text-[32px] font-[600] font-sans ${
                          mode === true ? 'text-black' : 'text-white'
                        }`}
                      >
                        Murojatlar
                      </p>
                    </div>
                    <Table
                      dataSource={dataSource}
                      columns={columns}
                      pagination={true}
                      totalDocs={20}
                      mode={mode}
                    />
                  </div>
                  <RightModal
                    hidden={hidden}
                    flex={flex}
                    setHidden={setHidden}
                    setFlex={setFlex}
                    mode={mode}
                  />
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appeals;
