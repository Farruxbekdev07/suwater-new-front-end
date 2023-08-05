import React from 'react';

function CreateUser({ mode, changeMode }) {
  return (
    <div className={mode ? 'text-blue-700' : 'text-white'}>
      Foydalanuvchi qo'shish
    </div>
  );
}

export default CreateUser;
