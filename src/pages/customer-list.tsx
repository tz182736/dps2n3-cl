import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';

import Customer_entry from '../pages/customer-entry.tsx';
import { dummy_data, Customer } from '../shared/i-customer';

interface Props {
  customers: Customer[];
}

const CustomerTable: React.FC<Props> = ({ customers }) => {

  return (<>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Rate2D</TableCell>
            <TableCell>Commission2D</TableCell>
            <TableCell>Rate3D</TableCell>
            <TableCell>Commission3D</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (

            <TableRow key={customer.Id}>
              <Routes>
                <Route path=":id" element={<Customer_entry customer={customer} />} />
              </Routes>
              <TableCell><Link to="{customer.Id}" 
              replace target="_blank" >{customer.Id}</Link></TableCell>
              <TableCell>{customer.Name}</TableCell>
              <TableCell>{customer.Phone}</TableCell>
              <TableCell>{customer.Rate2D}</TableCell>
              <TableCell>{customer.Commission2D}</TableCell>
              <TableCell>{customer.Rate3D}</TableCell>
              <TableCell>{customer.Commission3D}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  </>
  );
};

// export default CustomerTable;

const App: React.FC = () => {
  return (
    <div>
      <CustomerTable customers={dummy_data} />
    </div>
  );
};

export default App; 