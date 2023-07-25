import React from 'react';
import Table from '.';

interface DataType {
  key: number;
  name: string;
  img: string;
  date: string;
  email: string;
  status: string;
}

const dataSource: DataType[] = [
  {
    key: 1,
    img: 'https://o.remove.bg/downloads/d5b197c5-6112-468a-bee3-e00c871609df/images-removebg-preview.png',
    name: 'Yunusbek Xabibullayev',
    email: 'yunusbekxabibullayev518@gmail.com',
    date: '20.05.2006',
    status: 'Online',
  },
  {
    key: 2,
    img: 'https://o.remove.bg/downloads/d5b197c5-6112-468a-bee3-e00c871609df/images-removebg-preview.png',
    name: 'Yunusbek Xabibullayev',
    email: 'yunusbekxabibullayev518@gmail.com',
    date: '20.05.2006',
    status: 'Online',
  },
  {
    key: 3,
    img: 'https://o.remove.bg/downloads/d5b197c5-6112-468a-bee3-e00c871609df/images-removebg-preview.png',
    name: 'Yunusbek Xabibullayev',
    email: 'yunusbekxabibullayev518@gmail.com',
    date: '20.05.2006',
    status: 'Online',
  },
  {
    key: 4,
    img: 'https://o.remove.bg/downloads/d5b197c5-6112-468a-bee3-e00c871609df/images-removebg-preview.png',
    name: 'Yunusbek Xabibullayev',
    email: 'yunusbekxabibullayev518@gmail.com',
    date: '20.05.2006',
    status: 'Online',
  },
  {
    key: 5,
    img: 'https://o.remove.bg/downloads/d5b197c5-6112-468a-bee3-e00c871609df/images-removebg-preview.png',
    name: 'Yunusbek Xabibullayev',
    email: 'yunusbekxabibullayev518@gmail.com',
    date: '20.05.2006',
    status: 'Online',
  },
  {
    key: 6,
    img: 'https://o.remove.bg/downloads/d5b197c5-6112-468a-bee3-e00c871609df/images-removebg-preview.png',
    name: 'Yunusbek Xabibullayev',
    email: 'yunusbekxabibullayev518@gmail.com',
    date: '20.05.2006',
    status: 'Online',
  },
];

const columns = [
  {
    title: 'User Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Date of birth',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];

export default function Tables() {
  return <Table dataSource={dataSource} columns={columns} />;
}
