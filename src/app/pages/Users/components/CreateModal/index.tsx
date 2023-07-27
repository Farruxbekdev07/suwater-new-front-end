import Button from 'UI/Button';
import Input from 'UI/Input';
import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function CreateModal({ isVisible, onClose }) {
  if (!isVisible) return null;

  const handleClose = e => {
    if (e.target.id === 'wrapper') onClose();
  };

  const handleCreate = e => {
    e.preventDefault();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-40"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="w-[600px]">
        <div className="w-100 h-[50px] flex justify-end items-center">
          <Button
            leftIcon={XMarkIcon}
            onClick={onClose}
            type="outline"
          ></Button>
        </div>
        <div className="bg-gray-500 p-8 rounded">
          <form className="w-100 h-100 flex flex-col gap-2">
            <h1 className="text-white font-semibold mb-4 text-4xl">
              Create User
            </h1>
            <Input name="" placeholder="Name" type="text" />
            <Input name="" placeholder="Phone" type="tel" />
            <Input name="" placeholder="Email" type="email" />
            <Input name="" placeholder="Password" type="password" />
            <Button className="justify-center" onClick={handleCreate}>
              Create
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateModal;
