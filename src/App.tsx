import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { customers } from './data';

const App: React.FC = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(customers[0].id);

  const selectedCustomer = customers.find((customer) => customer.id === selectedCustomerId);

  return (
    <div className="flex h-screen overflow-hidden">
      <CustomerList
        customers={customers}
        selectedCustomerId={selectedCustomerId}
        onSelectCustomer={setSelectedCustomerId}
      />
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
    </div>
  );
};

export default App;
