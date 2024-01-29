export interface Employee {
  id: number;
  name: string;
  email: string;
  phoneNo: string;
  address: {
    street: string;
    city: string;
    country: string;
  }[];
  position: string;
  salary: number;
  joiningDate: string;
}

export const employeeData: Employee[] = [
  {
    id: 1,
    name: 'Moneeb',
    email: 'moneeb@gmail.com',
    phoneNo: '03090460590',
    address: [
      {
        street: '4th Avenue',
        city: 'San Francisco',
        country: 'US',
      },
    ],
    position: 'Software Engineer',
    salary: 80000,
    joiningDate: '2022-01-01',
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNo: '1234567890',
    address: [
      {
        street: 'Main Street',
        city: 'New York',
        country: 'US',
      },
    ],
    position: 'Marketing Specialist',
    salary: 75000,
    joiningDate: '2022-02-15',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice.j@example.com',
    phoneNo: '9876543210',
    address: [
      {
        street: 'Oak Street',
        city: 'Los Angeles',
        country: 'US',
      },
    ],
    position: 'Financial Analyst',
    salary: 90000,
    joiningDate: '2021-12-01',
  },
  {
    id: 4,
    name: 'Eva Smith',
    email: 'eva.smith@example.com',
    phoneNo: '5551234567',
    address: [
      {
        street: 'Sunset Boulevard',
        city: 'Los Angeles',
        country: 'US',
      },
    ],
    position: 'HR Manager',
    salary: 85000,
    joiningDate: '2022-03-10',
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david.brown@example.com',
    phoneNo: '9879876543',
    address: [
      {
        street: 'Maple Avenue',
        city: 'Chicago',
        country: 'US',
      },
    ],
    position: 'Sales Representative',
    salary: 70000,
    joiningDate: '2021-11-20',
  },
  {
    id: 6,
    name: 'Sophia White',
    email: 'sophia.white@example.com',
    phoneNo: '5555678901',
    address: [
      {
        street: 'Pine Street',
        city: 'San Francisco',
        country: 'US',
      },
    ],
    position: 'Graphic Designer',
    salary: 78000,
    joiningDate: '2022-04-05',
  },
  {
    id: 7,
    name: 'Daniel Miller',
    email: 'daniel.m@example.com',
    phoneNo: '5558765432',
    address: [
      {
        street: 'Cedar Avenue',
        city: 'Seattle',
        country: 'US',
      },
    ],
    position: 'Product Manager',
    salary: 95000,
    joiningDate: '2021-10-15',
  },
  {
    id: 8,
    name: 'Olivia Taylor',
    email: 'olivia.t@example.com',
    phoneNo: '5552345678',
    address: [
      {
        street: 'Elm Street',
        city: 'Boston',
        country: 'US',
      },
    ],
    position: 'Customer Support Specialist',
    salary: 72000,
    joiningDate: '2022-05-20',
  },
  {
    id: 9,
    name: 'Michael Wilson',
    email: 'michael.w@example.com',
    phoneNo: '5557890123',
    address: [
      {
        street: 'Sycamore Avenue',
        city: 'Houston',
        country: 'US',
      },
    ],
    position: 'Operations Manager',
    salary: 88000,
    joiningDate: '2021-09-30',
  },
  {
    id: 10,
    name: 'Emma Clark',
    email: 'emma.c@example.com',
    phoneNo: '5553456789',
    address: [
      {
        street: 'Birch Street',
        city: 'Miami',
        country: 'US',
      },
    ],
    position: 'Data Analyst',
    salary: 76000,
    joiningDate: '2022-06-12',
  },
];
