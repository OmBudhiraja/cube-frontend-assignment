import { Customer } from '../data';
import CustomerCard from './CustomerCard';

interface CustomerListProps {
  customers: Customer[];
  selectedCustomerId: string | null;
  onSelectCustomer: (id: string) => void;
}

const CustomerList = ({ customers, selectedCustomerId, onSelectCustomer }: CustomerListProps) => {
  return (
    <aside className="w-96 h-full overflow-y-auto custom-scrollar border-r border-gray-200">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          isSelected={selectedCustomerId === customer.id}
          onSelectCustomer={onSelectCustomer}
        />
      ))}
    </aside>
  );
};

export default CustomerList;
