import Button from 'UI/Button';
import Input from 'UI/Input';
import React from 'react';
import suwater from 'media/images/suwater-svg.png';

function Sign__up() {
  return (
    <div className="flex h-screen">
      <div className="bg-blue-500 dark:bg-blue-500 w-1/2 flex justify-center items-center">
        <div className="w-[400px]">
          <p className="flex justify-center text-[42px] font-sans font-bold italic text-white h-24">
            SuWater
            <img className="h-[50px]" src={suwater} alt="suwater" />
          </p>
          <p className="text-center text-[32px] font-sans font-semibold text-white h-16">
            Welcome back!
          </p>
          <p className="text-center text-[22px] text-white font-sans h-28">
            To keep connected with us please login with your personal info
          </p>
          <div className="flex justify-center">
            <Button className="w-1/2 flex justify-center bg-white text-blue-600 dark:text-blue-600 border-transparent font-semibold">
              Sign In
            </Button>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div>
          <p className="text-[42px] font-sans font-semibold">Sign Up</p>
          <Input label="Name" placeholder=" " name="name" />
          <Input label="Email" placeholder=" " name="email" />
          <Input label="Password" placeholder=" " name="password" />
          <Input
            label="Confirm Password"
            placeholder=" "
            name="confirm password"
          />
          <Button>Davom etish</Button>
        </div>
      </div>
    </div>
  );
}

export default Sign__up;
