import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, List, ListItem, Box, Grid } from '@mui/material';

interface Number {
  value: number;
}

const App = () => {
  const [number, setNumber] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [numbersList, setNumbersList] = useState<Number[]>([]);

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(parseFloat(event.target.value));
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(event.target.value));
  };

  const handleAddNumber = () => {
    setNumbersList([...numbersList, { value: number }]);
    setNumber(0);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={6} md={3}>
          <TextField
            label="Number"
            type="text"
            value={number}
            onChange={handleNumberChange}
          />
        </Grid>
        <Grid item xs={4} md={2}>
          <TextField
            label="Amount"
            type="number"
            value={amount}
            onChange={handleAmountChange}
          />
        </Grid>
        <Grid item xs={2} md={1}>
          <Button variant="contained" onClick={handleAddNumber}>
            Add Number
          </Button>
        </Grid>
      </Grid>

      <br />
      <List>
        {numbersList.map((item, index) => (
          <ListItem key={index}>{item.value}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default App;
