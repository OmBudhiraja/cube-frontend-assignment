import { memo } from 'react';
import { type Customer } from '../data';

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onSelectCustomer: (id: string) => void;
}

function CustomerCard({ customer, isSelected, onSelectCustomer }: CustomerCardProps) {
  return (
    <div
      key={customer.id}
      className={`p-6 cursor-pointer flex flex-col gap-4 border-b border-gray-200 last:border-b-0 transition-colors ${
        isSelected ? 'bg-gray-200 border-r-2 border-r-slate-800' : 'bg-white'
      }`}
      onClick={() => onSelectCustomer(customer.id)}
    >
      <h3 className="font-normal text-2xl">{customer.name}</h3>
      <p className="text-gray-600 line-clamp-4 leading-snug text-[15px]">{customer.address}</p>
    </div>
  );
}

export default memo(CustomerCard);
