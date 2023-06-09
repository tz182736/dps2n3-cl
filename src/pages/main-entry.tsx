import React, { useState } from 'react';
import { TextField, Button, List, ListItem, Grid, Box } from '@mui/material';

import { BetNumber } from "../shared/i-bet-number";

const initialNumbersList: BetNumber[] = [];

export const App = () => {

    const [number, setNumber] = useState('');
    const [amount, setAmount] = useState<number | undefined>();

    const [numbersList] = useState<BetNumber[]>(
        initialNumbersList
    );

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value);
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(parseFloat(event.target.value));
    };

    const handleAddNumber = () => {

    };

    return (
        <Box display='flex' flexDirection='column' alignItems='flex-start' m={1}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        sx={{ pl: 0 }}
                        size='small'
                        variant='outlined'
                        label='Number'
                        type='text'
                        value={number}
                        onChange={handleNumberChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        sx={{ pl: 1 }}
                        size='small'
                        variant='outlined'
                        label='Amount'
                        type='number'
                        value={amount}
                        onChange={handleAmountChange}
                    />
                </Grid>
                <Grid item xs={2} sx={{ pl: 1, pr: 0 }}>
                    <Button
                        variant='contained'
                        sx={{ fontSize: 14 }}
                        size='small'
                        onClick={handleAddNumber}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
            <Grid container>
                <List>
                    {numbersList.map((item, index) => (
                        <ListItem key={index}>
                            {item.Number}
                            {item.Amount !== undefined ? item.Amount : ''}
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </Box>
    );
}
