import { memo } from 'react';
import { type Customer } from '../data';

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onSelectCustomer: (id: string) => void;
}

function CustomerCard({ customer, isSelected, onSelectCustomer }: CustomerCardProps) {
  console.log('CustomerCard render', customer.id);
  return (
    <div
      key={customer.id}
      className={`p-6 cursor-pointer flex flex-col gap-4 ${
        isSelected ? 'bg-gray-200' : 'bg-white'
      }`}
      onClick={() => onSelectCustomer(customer.id)}
    >
      <h3 className="font-normal text-[27px]">{customer.name}</h3>
      <p className="text-gray-600 line-clamp-4 leading-snug text-[15px]">{customer.address}</p>
    </div>
  );
}

export default memo(CustomerCard);
