import React, { useState } from 'react';
import Button from 'UI/Button';

function Actions() {
  const [activeAction, setActiveAction] = useState(null);

  const updateActiveAction = (action: any) => {
    if (activeAction !== action) {
      setActiveAction(action);
      return;
    }
    setActiveAction(null);
  };

  return (
    <div className="actions__buttons">
      <Button className={'action__button--active'}>{'icon'}</Button>
    </div>
  );
}

export default Actions;
