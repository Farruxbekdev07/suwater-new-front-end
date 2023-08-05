import Button from 'UI/Button';
import Container from 'UI/Container';
import Input from 'UI/Input';
import Header from 'app/components/Header';
import Sidebar from 'app/components/Sidebar';
import React from 'react';

function Settings({ mode, changeMode, openSidebar, setOpenSidebar }) {
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
          className={`w-full ${mode ? '' : 'bg-gray-900 dark:bg-gray-900 p-0'}`}
        >
          <Container>
            <div className={`px-5 grid gap-5 relative top-[80px]`}>
              <div className="max-[425px]:px-0">
                <div>
                  <h3
                    className={`text-[32px] mb-5 font-[600] ${
                      mode === true ? 'text-black' : 'text-white'
                    }`}
                  >
                    Settings
                  </h3>
                </div>
                <div className="flex gap-5 max-[768px]:grid">
                  <div className="w-1/2 max-[768px]:w-full">
                    <Input type="file" mode={mode} />
                  </div>
                  <div className="grid gap-5 w-1/2 max-[768px]:w-full">
                    <Input
                      label="Ism"
                      name="name"
                      placeholder=" "
                      mode={mode}
                    />
                    <Input
                      label="Login"
                      name="login"
                      placeholder=" "
                      mode={mode}
                    />
                    <Input
                      label="Parol"
                      name="password"
                      placeholder=" "
                      mode={mode}
                    />
                    <Input
                      label="Parolni tasdiqlash"
                      name="confirm__password"
                      placeholder=" "
                      mode={mode}
                    />
                    <div className="flex justify-between gap-5 max-[450px]:flex-col">
                      <Button
                        className={`w-1/2 flex justify-center max-[450px]:w-full`}
                        type="outline"
                        mode={mode}
                      >
                        Orqaga
                      </Button>
                      <Button
                        mode={mode}
                        className="w-1/2 flex justify-center max-[450px]:w-full"
                      >
                        Saqlash
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Settings;
