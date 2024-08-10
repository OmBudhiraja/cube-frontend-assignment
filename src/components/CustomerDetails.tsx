// import React, { useEffect, useState } from 'react';
import { type Customer } from '../data';

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  return <div className="w-2/3 p-4">{customer.name}</div>;
};

export default CustomerDetails;
