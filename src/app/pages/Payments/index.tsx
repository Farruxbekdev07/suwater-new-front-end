import React from 'react';
import Users from '../Users';
import Table from 'app/components/Table';
import Button from 'UI/Button';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    lastName: 'Medhurst',
    category: 'Blood donation',
    price: '100 $',
    status: 'Paid',
  },
  {
    key: '2',
    name: 'John',
    lastName: 'Medhurst',
    category: 'Blood donation',
    price: '120 $',
    status: 'Unpaid',
  },
  {
    key: '1',
    name: 'Mike',
    lastName: 'Medhurst',
    category: 'Blood donation',
    price: '100 $',
    status: 'Paid',
  },
  {
    key: '2',
    name: 'John',
    lastName: 'Medhurst',
    category: 'Blood donation',
    price: '120 $',
    status: 'Unpaid',
  },
  {
    key: '1',
    name: 'Mike',
    lastName: 'Medhurst',
    category: 'Blood donation',
    price: '100 $',
    status: 'Paid',
  },
  {
    key: '2',
    name: 'John',
    lastName: 'Medhurst',
    category: 'Blood donation',
    price: '120 $',
    status: 'Unpaid',
  },
];

const columns = [
  {
    title: 'First name',
    dataIndex: 'name',
    key: 'names',
  },
  {
    title: 'Last name',
    dataIndex: 'lastName',
    key: 'last name',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];

function Payments() {
  return (
    <div>
      <div className="flex justify-between mb-7">
        <h2 className="text-white">Payments</h2>
        <Button>Payment</Button>
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={true}
        totalDocs={3}
      />
    </div>
  );
}

export default Payments;
