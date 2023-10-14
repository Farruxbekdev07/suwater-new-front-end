import Button from 'UI/Button';
import React, { useEffect, useState } from 'react';
import suwater from 'media/images/suwater-svg.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { GetUser } from '../Utils';
import { toast } from 'react-toastify';
import { useLazyQuery } from '@apollo/client';
import { SIGN__IN } from './api';
import { useDispatch } from 'react-redux';
import { signIn } from 'store/reducer';
import paths from 'constants/routePaths';

function Sign__in() {
  const [login, { data, loading, error }] = useLazyQuery(SIGN__IN);
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && data) {
      dispatch(
        signIn({ token: data?.signIn?.token, id: data?.signIn?.user?._id }),
      );
      navigate(paths.MAIN);
      toast.success('Sign In Successfully');
    }
  }, [data, loading, dispatch, navigate]);

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  const handleSubmit = e => {
    e.preventDefault();
    if (phone && password) {
      login({
        variables: {
          phone,
          password,
        },
      });
    } else {
      toast.error('Enter phone and password');
    }
  };

  return (
    <div className="flex h-screen">
      <div className="bg-blue-500 dark:bg-blue-500 w-1/2 flex justify-center items-center">
        <div className="w-[400px]">
          <p className="flex justify-center text-[42px] font-sans font-bold italic text-white h-24">
            SuWater
            <img className="h-[50px]" src={suwater} alt="suwater" />
          </p>
          <p className="text-center text-[32px] font-sans font-semibold text-white h-16">
            Hello friend!
          </p>
          <p className="text-center text-[22px] text-white font-sans h-28">
            Enter your personal detail and start journey with us
          </p>
          <div className="flex justify-center">
            <Button
              className="w-1/2 flex justify-center bg-white text-blue-600 dark:text-blue-600 border-transparent font-semibold"
              onClick={() => navigate('/sign-up')}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
      <div className="w-1/2 grid justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="w-[345px] grid gap-4">
            <p className="text-[42px] font-sans font-semibold">Sign In</p>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder=" "
                onChange={e => setPhone(e.target.value)}
                id="phone"
                className={`block px-2.5 pb-2.5 pt-4 h-full w-full text-sm text-gray-700 bg-transparent rounded-xl border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              />
              <label
                htmlFor="phone"
                className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-transparent px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
              >
                Phone
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder=" "
                onChange={e => setPassword(e.target.value)}
                id="password"
                className="block px-2.5 pb-2.5 pt-4 h-full w-full text-sm text-gray-700 bg-transparent rounded-xl border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="password"
                className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-transparent px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
              >
                Password
              </label>
            </div>
            <NavLink to={'/users'} className="text-[14px] text-blue-600">
              Forgot password?
            </NavLink>
            <Button className="flex justify-center items-center h-[50px] rounded-xl bg-black text-white dark:bg-black dark:text-white border-transparent dark:border-transparent">
              Davom etish
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sign__in;
