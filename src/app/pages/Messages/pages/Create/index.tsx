import React, { useEffect, useState } from 'react';
import Button from 'UI/Button';
import Input from 'UI/Input';
import SelectComponent from 'UI/Select';
import { useNavigate } from 'react-router-dom';
import Textarea from 'UI/Textarea';
import { usePost } from 'app/pages/Hooks';
import { toast } from 'react-toastify';
import { CREATE__MESSAGE } from './api';
import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import paths from 'constants/routePaths';

export default function SendMessage({ mode }) {
  const navigate = useNavigate();
  console.log(mode);
  const [createMessage, { data, error, loading }] =
    useMutation(CREATE__MESSAGE);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState([]);
  const { t, i18n } = useTranslation('translation');

  useEffect(() => {
    if (!loading && data) {
      navigate(paths.MESSAGES);
      toast.success('Message sended successfully');
    }
  }, [data, loading]);

  const handleSubmit = e => {
    e.preventDefault();
    if (title.length !== 0 && description.length !== 0) {
      // && image.length !== 0
      createMessage({
        variables: {
          description,
          image: image[0],
          title,
        },
      });
      setTitle('');
      setDescription('');
      setImage([]);
    } else {
      toast.error('Enter full data');
    }
  };

  return (
    <div className={`w-full pb-[50px] ${mode ? '' : 'bg-gray-900 p-0'}`}>
      <div className={`px-5 grid gap-5 relative top-[80px]`}>
        <div>
          <h3
            className={`text-[32px] font-[600] ${
              mode === true ? 'text-black' : 'text-white'
            }`}
          >
            {t('Xabar-yozish')}
          </h3>
        </div>
        <div className="mt-7">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div
              className={`grid grid-cols-2 gap-5 p-5 max-[900px]:grid-cols-1 rounded-xl border ${
                mode ? 'bg-gray-100' : 'bg-gray-800 '
              }`}
            >
              <div>
                <Input
                  type="file"
                  className="h-full"
                  name="testImage"
                  onChange={setImage}
                  value={image[0]}
                />
              </div>
              <div className="grid gap-5">
                <div className="grid gap-5">
                  <Input
                    label="Mavzu"
                    placeholder=" "
                    name="title"
                    onChange={setTitle}
                    value={title}
                  />
                </div>
                <div>
                  <Textarea
                    label="Ma'lumot-yozing"
                    placeholder=" "
                    name="description"
                    className="h-[120px]"
                    onChange={setDescription}
                    value={description}
                  />
                </div>
                <div className="flex justify-end gap-5">
                  <Button
                    type="outline"
                    mode={mode}
                    className="w-1/2 flex justify-center"
                    onClick={() => navigate('/messages')}
                  >
                    {t('Orqaga')}
                  </Button>
                  <Button className="w-1/2 flex justify-center">
                    {t('Saqlash')}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
