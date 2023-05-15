import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { dummy_data, Voucher } from '../shared/vm-report';

interface Props {
  vouchers: Voucher[];
}

const VoucherTable: React.FC<Props> = ({ vouchers }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>VouType</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>FullLucky</TableCell>
            <TableCell>PartLucky</TableCell>
            <TableCell>Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vouchers.map((voucher) => (
            <React.Fragment key={voucher.Id}>
              <TableRow>
                <TableCell>{voucher.Id}</TableCell>
                <TableCell>{voucher.VouType}</TableCell>
                <TableCell>{voucher.Name}</TableCell>
                <TableCell>{voucher.Total}</TableCell>
                <TableCell>{voucher.FullLucky}</TableCell>
                <TableCell>{voucher.PartLucky}</TableCell>
                <TableCell>{voucher.Balance}</TableCell>
              </TableRow>
              {voucher.VouDetails.length > 0 && ( // check if the voucher has any details
                <>
                  {/* render a subheader row for the details table */}
                  <TableRow sx={{ backgroundColor: 'lightgreen' }}>
                    <TableCell colSpan={7}>
                      Details : {voucher.Name}
                    </TableCell>
                  </TableRow>
                  {/* render a header row for the details table */}
                  <TableRow sx={{ backgroundColor: 'lightgreen' }}>
                    <TableCell>BetNumber</TableCell>
                    <TableCell>BetAmount</TableCell>
                    <TableCell>BetTotal</TableCell>
                    <TableCell>FullLucky</TableCell>
                    <TableCell>PartLucky</TableCell>
                    <TableCell>Balance</TableCell>
                    <TableCell>Rate</TableCell>
                    <TableCell>Commission</TableCell>
                  </TableRow>
                  {/* render the details table */}
                  {voucher.VouDetails.map((detail) => (
                    <TableRow sx={{ backgroundColor: 'lightgreen' }} key={detail.BetNumber} >
                      <TableCell>{detail.BetNumber}</TableCell>
                      <TableCell>{detail.BetAmount}</TableCell>
                      <TableCell>{detail.BetTotal}</TableCell>
                      <TableCell>{detail.FullLucky}</TableCell>
                      <TableCell>{detail.PartLucky}</TableCell>
                      <TableCell>{detail.Balance}</TableCell>
                      <TableCell>{detail.Rate}</TableCell>
                      <TableCell>{detail.Commission}</TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// export default VoucherTable;

const App: React.FC = () => {
  return (
    <div>
      <VoucherTable vouchers={dummy_data} />
    </div>
  );
};

export default App; 