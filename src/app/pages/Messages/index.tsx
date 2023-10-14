import { useLazyQuery, useMutation } from '@apollo/client';
import Button from 'UI/Button';
import Collapsible from 'app/components/Collapse';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_MESSAGE } from './api';
import { useTranslation } from 'react-i18next';

function Messages({ mode }) {
  const navigate = useNavigate();
  const [getMessage, { data }] = useLazyQuery(GET_MESSAGE);
  const { t, i18n } = useTranslation('translation');

  useEffect(() => {
    getMessage({
      variables: { size: 10, page: 1 },
    });
  }, []);

  return (
    <div className={`w-full ${mode ? '' : 'bg-gray-900 p-0'}`}>
      <div className={`mb-[70px] grid gap-5 relative top-[80px]`}>
        <div className="px-5 w-100 relative">
          <div className="flex justify-between items-center mb-5">
            <h3
              className={`text-[32px] font-[600] ${
                mode === true ? 'text-black' : 'text-white'
              }`}
            >
              {t('Xabarlar')}
            </h3>
            <Button onClick={() => navigate('/messages/send-message')}>
              {t("Xabar yo'llash")}
            </Button>
          </div>
          <div className="rounded-xl overflow-hidden">
            {data?.getAnnouncements?.payload?.map((item, key) => {
              return <Collapsible mode={mode} dataSource={item} key={key} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
