import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Customer } from '../shared/vm-report';

interface Props {
  customers: Customer[];
}

const CustomerTable: React.FC<Props> = ({ customers }) => {
  return (
    <TableContainer>
      <Table sx={{ tableLayout: 'auto' }}> // use the sx prop to set the table layout to auto
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>BetTotal</TableCell>
            <TableCell>WinTotal</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell>Rate2D</TableCell>
            <TableCell>Commission2D</TableCell>
            <TableCell>Rate3D</TableCell>
            <TableCell>Commission3D</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.Id}>
              <TableCell sx={{ padding: '0px 5px' }}> // use the sx prop to reduce the padding of each cell
                {customer.Id}
              </TableCell>
              <TableCell sx={{ padding: '0px 5px' }}>
                {customer.Name}
              </TableCell>
              <TableCell sx={{ padding: '0px 5px' }}>
                {customer.Phone}
              </TableCell>
              <TableCell sx={{ padding: '0px 5px' }}>
                {customer.BetTotal}
              </TableCell>
              <TableCell sx={{ padding: '0px 5px' }}>
                {customer.WinTotal}
              </TableCell>
              <TableCell sx={{ padding: '0px 5px' }}>
                {customer.Balance}
              </TableCell>
              <TableCell sx={{ padding: '0px 5px' }}>
                {customer.Rate2D}
              </TableCell>
              <TableCell sx={{ padding: '0px 5px' }}>
                {customer.Commission2D}
              </TableCell>
              <TableCell sx={{ padding: '0px 5px' }}>
                {customer.Rate3D}
              </TableCell>
              <TableCell sx={{ padding: '0px 5px' }}>
                {customer.Commission3D}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTable;
