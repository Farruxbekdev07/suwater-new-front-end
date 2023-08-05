import React from 'react';

function SendMessage({ mode, changeMode }) {
  return (
    <div
      className={
        mode ? 'text-black dark:text-black' : 'text-white dark:text-white'
      }
    >
      SendMessage
    </div>
  );
}

export default SendMessage;
