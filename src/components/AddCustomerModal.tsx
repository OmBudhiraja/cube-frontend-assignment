import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { type Customer } from '../data';

interface AddCustomerModalProps {
  handleAdd: (customer: Customer) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddCustomerModal = ({ handleAdd, open, onOpenChange }: AddCustomerModalProps) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !title || !address) return;

    handleAdd({
      id: String(Date.now()),
      name,
      title,
      address,
    });

    setName('');
    setTitle('');
    setAddress('');

    onOpenChange(false);
  };
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <button
          title="Add new Customer"
          className="fixed bottom-10 right-10 flex items-center justify-center text-white bg-slate-800 outline-offset-2 outline-slate-800 w-12 h-12 text-lg rounded-full"
        >
          🞢
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black bg-opacity-40 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white px-6 pt-6 pb-7 focus:outline-none">
          <Dialog.Title className="text-lg font-medium">Add new Customer</Dialog.Title>
          <Dialog.Description className="sr-only">
            Add a new customer to the list
          </Dialog.Description>
          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-5">
            <FormField
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Name"
              id="name"
              type="text"
              placeholder="John Doe"
              required
            />
            <FormField
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              label="Title"
              id="title"
              type="text"
              placeholder="SDE"
              required
            />
            <FormField
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              id="address"
              type="text"
              placeholder="213 Main St"
              required
            />
            <button className="flex items-center justify-center text-white bg-slate-800 p-3 rounded-lg mt-3 outline-offset-2">
              Add
            </button>
          </form>
          <Dialog.Close asChild>
            <button className="absolute top-4 right-6 text-2xl rounded-full" aria-label="Close">
              ⨯
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormField = ({ label, id, ...rest }: FormFieldProps) => {
  return (
    <fieldset className="flex flex-col gap-2">
      <label className="text-gray-800 pl-1" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="w-full rounded-lg px-3 py-2 text-[15px] border border-gray-400 outline-gray-500 outline-2"
        {...rest}
      />
    </fieldset>
  );
};

export default AddCustomerModal;
