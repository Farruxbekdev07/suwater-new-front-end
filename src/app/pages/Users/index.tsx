import Button from 'UI/Button';
import Table from 'app/components/Table';
import React from 'react';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '3',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '23',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '253',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '2242',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '222',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '65542',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '2562',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '252',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '4232',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '4232',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '4232',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '4232',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '4232',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '4232',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '4232',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '4232',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '4232',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
  {
    key: '4232',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    action: 'Edit',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '',
    dataIndex: 'address',
    key: 'action',
    render: (text, data) => <Button label={`${data?.name}, ${text}`} />,
  },
];

export default function Users() {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={true}
      totalDocs={20}
    />
  );
}
