
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Voucher } from "../shared/vm-report";

interface Props {
  vouchers: Voucher[];
}


// const VoucherList: React.FC<Props> = ({ vouchers }) => {
const VoucherList: React.FC = () => {
  const vouchers: Voucher[] = [
    { Id: 1, VouType: 'type1', Name: 'voucher1', Total: 100, FullLucky: 0, PartLucky: 0, Balance: 50 },
    { Id: 2, VouType: 'type2', Name: 'voucher2', Total: 200, FullLucky: 0, PartLucky: 0, Balance: 150 },
    { Id: 3, VouType: 'type3', Name: 'voucher3', Total: 300, FullLucky: 0, PartLucky: 0, Balance: 200 },
  ];


  return (
    <List>
      {vouchers?.map((voucher) => (
        <ListItem key={voucher.Id}>
          <ListItemText primary={`Type: ${voucher.VouType}`} secondary={`Name: ${voucher.Name}`} />
          <ListItemText primary={`Balance: ${voucher.Balance}`} secondary={`Total: ${voucher.Total}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default VoucherList;

// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>Vouchers</h1>
//       <VoucherList vouchers={vouchers} /> // pass the vouchers prop here
//     </div>
//   );
// };

// export default App;