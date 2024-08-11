export interface Customer {
  id: string;
  name: string;
  title: string;
  address: string;
}

export const customers: Customer[] = [
  {
    id: '0',
    name: 'John Doe',
    title:
      'CEO of XYZ Corp Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quam, veritatis ratione tempore veniam asperiores nihil dignissimos inventore debitis? Nesciunt maiores expedita labore quaerat sunt nisi officiis, eligendi facilis, placeat, fugit exercitationem atque? Dolore rerum voluptatibus distinctio nesciunt nemo veniam.',
    address: '123 Main St, New York, NY 10001',
  },
  {
    id: '1',
    name: 'Jane Doe',
    title:
      'Senior Managar at XYZ Corp Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quam, veritatis ratione tempore veniam asperiores nihil dignissimos inventore debitis? Nesciunt maiores expedita labore quaerat sunt nisi officiis, eligendi facilis, placeat, fugit exercitationem atque? Dolore rerum voluptatibus distinctio nesciunt nemo veniam.',
    address: '123 Main St, New York, NY 10001',
  },
  {
    id: '2',
    name: 'John Smith',
    title: 'Marketing Head at XYZ Corp',
    address: '123 Main St, New York, NY 10001',
  },
  {
    id: '3',
    name: 'Jane Smith',
    title:
      'CTO of XYZ Corp Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quam, veritatis ratione tempore veniam asperiores nihil dignissimos inventore debitis? Nesciunt maiores expedita labore quaerat sunt nisi officiis, eligendi facilis, placeat, fugit exercitationem atque? Dolore rerum voluptatibus distinctio nesciunt nemo veniam.',

    address: '123 Main St, New York, NY 10001',
  },
  {
    id: '4',
    name: 'Lang Warren',
    title: 'Software Developer of XYZ Corp',
    address: '123 Main St, New York, NY 10001',
  },
  {
    id: '5',
    name: 'Brad Pitt',
    title: 'whatever at ABC Corp',
    address: '123 Main St, New York, NY 10001',
  },
];
