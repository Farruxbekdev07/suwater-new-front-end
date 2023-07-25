import Button from 'UI/Button';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArchiveBoxIcon } from '@heroicons/react/24/outline';
import Input from 'UI/Input';

export function HomePage() {
  const [value, setValue] = React.useState('');

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <h1>Users</h1>
      <Button label="QR Code" type="outline" leftIcon={ArchiveBoxIcon} />
      <Input
        value={value}
        onChange={setValue}
        label="Full Name"
        name="fullName"
      />
    </>
  );
}
