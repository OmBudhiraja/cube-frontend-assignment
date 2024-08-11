import { useState } from 'react';
import { customers as initialCustomers } from './data';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import AddCustomerModal from './components/AddCustomerModal';

const App = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(customers[0].id);
  const [showAddCustomerModal, setShowAddCustomerModal] = useState(false);

  const selectedCustomer = customers.find((customer) => customer.id === selectedCustomerId);

  return (
    <div className="flex h-screen overflow-hidden">
      <CustomerList
        customers={customers}
        selectedCustomerId={selectedCustomerId}
        onSelectCustomer={setSelectedCustomerId}
      />
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      <AddCustomerModal
        open={showAddCustomerModal}
        onOpenChange={setShowAddCustomerModal}
        handleAdd={(c) => {
          setCustomers((prev) => [c, ...prev]);
          setSelectedCustomerId(c.id);
        }}
      />
    </div>
  );
};

export default App;
