import Button from 'UI/Button';
import Input from 'UI/Input';
import React, { useState } from 'react';
import suwater from 'media/images/suwater-svg.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { LocalStorage } from '../Storage';
import { useMutation, useQuery, useQueryClient } from 'react-query';

function Sign__up() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [cookie, setCookie] = useCookies();
  const [validation, setValidation] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const body = { name, company, email, phone, password, address };
    if (name && company && email && phone && password && address) {
      axios
        .post('https://suwater.onrender.com/auth/admins/signup', body)
        .then(res => {
          console.log(res.data);
          return res.data;
        })
        .catch(e => console.log(e));
    } else {
      toast.error('Enter full data');
    }
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['signup'],
    queryFn: () => handleSubmit,
  });

  if (data) return console.log(data);

  // if (isLoading) return toast.loading('Loading...');

  if (error) return toast('An error has occurred');

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
            <Button
              className="w-1/2 flex justify-center bg-white text-blue-600 dark:text-blue-600 border-transparent font-semibold"
              onClick={() => navigate('/sign-in')}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="w-[345px] grid gap-4">
            <p className="text-[42px] font-sans font-semibold">Sign Up</p>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder=" "
                onChange={e => setPhone(e.target.value)}
                id="phone"
                className="block px-2.5 pb-2.5 pt-4 h-full w-full text-sm text-gray-700 bg-transparent rounded-xl border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                type="text"
                name="name"
                placeholder=" "
                onChange={e => setName(e.target.value)}
                id="name"
                className="block px-2.5 pb-2.5 pt-4 h-full w-full text-sm text-gray-700 bg-transparent rounded-xl border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="name"
                className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-transparent px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="email"
                placeholder=" "
                onChange={e => setEmail(e.target.value)}
                id="email"
                className="block px-2.5 pb-2.5 pt-4 h-full w-full text-sm text-gray-700 bg-transparent rounded-xl border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="email"
                className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-transparent px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
              >
                Email
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="company"
                placeholder=" "
                onChange={e => setCompany(e.target.value)}
                id="company"
                className="block px-2.5 pb-2.5 pt-4 h-full w-full text-sm text-gray-700 bg-transparent rounded-xl border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="company"
                className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-transparent px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
              >
                Company Name
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="address"
                placeholder=" "
                onChange={e => setAddress(e.target.value)}
                id="address"
                className="block px-2.5 pb-2.5 pt-4 h-full w-full text-sm text-gray-700 bg-transparent rounded-xl border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                htmlFor="address"
                className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-transparent px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
              >
                Address
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
            <Button
              onClick={refetch}
              className="flex justify-center items-center h-[50px] rounded-xl bg-black text-white dark:bg-black dark:text-white border-transparent dark:border-transparent"
            >
              Davom etish
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sign__up;
