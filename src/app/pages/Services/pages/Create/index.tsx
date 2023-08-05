import React from 'react';

function CreateService({ mode, changeMode }) {
  return (
    <div
      className={
        mode ? 'text-black dark:text-black' : 'text-white dark:text-white'
      }
    >
      CreateService
    </div>
  );
}

export default CreateService;
