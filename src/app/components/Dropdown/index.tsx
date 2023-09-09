import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/reducer';

function Dropdown({ show }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
    navigate('/sign-in');
  };

  return (
    <div
      className={
        show
          ? 'grid absolute top-16 w-32 -left-16 h-fit rounded-md py-2 px-4 justify-center items-center bg-gray-400'
          : 'hidden'
      }
    >
      <p
        className="px-4 border border-transparent font-sans rounded-sm cursor-pointer hover:border-blue-500 hover:bg-blue-500"
        onClick={logout}
      >
        Log Out
      </p>
    </div>
  );
}

export default Dropdown;
