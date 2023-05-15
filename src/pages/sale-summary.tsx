import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { data_summaries, Summary } from '../shared/vm-summary';

interface Props {
  summaries: Summary[];
}

const SummaryTable: React.FC<Props> = ({ summaries }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>VouType</TableCell>
            <TableCell>Name</TableCell>
            {summaries[0]?.Sale.map((sale) => ( // use the first summary's Sale array to generate the column headers
              <TableCell key={sale.Id}>{sale.Date}</TableCell>
            ))}
            <TableCell>FullLucky</TableCell>
            <TableCell>PartLucky</TableCell>
            <TableCell>Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {summaries.map((summary) => (
            <TableRow key={summary.Id}>
              <TableCell>{summary.Id}</TableCell>
              <TableCell>{summary.VouType}</TableCell>
              <TableCell>{summary.Name}</TableCell>
              {summary.Sale.map((sale) => ( // use the summary's Sale array to generate the column values
                <TableCell key={sale.Id}>{sale.Total}</TableCell>
              ))}
              <TableCell>{summary.FullLucky}</TableCell>
              <TableCell>{summary.PartLucky}</TableCell>
              <TableCell>{summary.Balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <SummaryTable summaries={data_summaries} /> // pass the vouchers prop here
    </div>
  );
};

export default App;

