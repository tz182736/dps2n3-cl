import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, List, ListItem, Grid, Box } from '@mui/material';

interface BetNumber {
  value: number;
}

const App = () => {
  const [number, setNumber] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [numbersList, setNumbersList] = useState<BetNumber[]>([]);

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
    <Box m={1} sx={{
      m: 0,
      backgroundColor: 'white',
      // '&:hover': {
      //   backgroundColor: 'white',
      //   opacity: [0.9, 0.8, 0.7],
      // },
    }}>
      <Grid container  >
        <Grid item xs={6}><TextField sx={{ p: 2, pr: 0 }}
          size="small" variant="outlined"
          label="Number" type="text"
          value={number}
          onChange={handleNumberChange}
        />
        </Grid>
        <Grid item xs={4}><TextField sx={{ p: 2, pr: 0 }}
          size="small" variant="outlined"
          label="Amount" type="number"
          value={amount}
          onChange={handleAmountChange}
        />
        </Grid>
        <Grid item xs={2} sx={{ p: 2 }}>
          <Button variant="contained" sx={{ fontSize: 14 }} size="small" onClick={handleAddNumber}>
            Add
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <List>        
          {numbersList.map((item, index) => (
          <ListItem key={index}>{item.value}</ListItem>
        ))}
        </List>
      </Grid>

    </Box>
  );
};

export default App;
