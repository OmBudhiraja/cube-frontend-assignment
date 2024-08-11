import { Virtuoso } from 'react-virtuoso';

import { Customer } from '../data';
import CustomerCard from './CustomerCard';

interface CustomerListProps {
  customers: Customer[];
  selectedCustomerId: string | null;
  onSelectCustomer: (id: string) => void;
}

const CustomerList = ({ customers, selectedCustomerId, onSelectCustomer }: CustomerListProps) => {
  return (
    <Virtuoso
      data={customers}
      className="w-96 h-full overflow-y-hidden custom-scrollar border-r border-gray-200"
      itemContent={(_, c) => (
        <CustomerCard
          key={c.id}
          customer={c}
          isSelected={selectedCustomerId === c.id}
          onSelectCustomer={onSelectCustomer}
        />
      )}
    />
  );
};

export default CustomerList;
