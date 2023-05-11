import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, List, ListItem, Grid, Box } from '@mui/material';

interface BetNumber {
  id: number,
  number: string,
  amount: number;
}

const App = () => {
  const [number, setNumber] = useState<string>("");
  const [amount, setAmount] = useState<number>();
  const [numbersList, setNumbersList] = useState<BetNumber[]>([]);

  const addNumber = (): void => {
    setNumbersList([...numbersList, { id: 0, number: number, amount: amount } as BetNumber]);
    console.log(numbersList.length);
  }

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(event.target.value));
  };

  const handleAddNumber = () => {
    addNumber();
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" m={1} >
      <Grid container  >
        <Grid item xs={6}><TextField sx={{ pl: 0 }}
          size="small" variant="outlined"
          label="Number"
          type="text"
          value={number}
          color="success"
          onChange={handleNumberChange}
        />
        </Grid>
        <Grid item xs={4}><TextField sx={{ pl: 1 }}
          size="small" variant="outlined"
          label="Amount"
          type="number"
          value={amount}
          onChange={handleAmountChange}
        />
        </Grid>
        <Grid item xs={2} sx={{ pl: 1, pr: 0 }}>
          <Button variant="contained" sx={{ fontSize: 14 }} size="small" onClick={handleAddNumber}>
            Add
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <List>
          {numbersList.map((item, index) => (
            <ListItem key={index}>{item.number}{item.amount}</ListItem>
          ))}
        </List>
      </Grid>

    </Box>
  );
};

export default App;
