import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import Dexie from 'dexie';

// Define the interface for the data type
export interface BetTypeConfig {
    CurrentBetType: '2D' | '3D';
    Rate2D: number;
    Commission2D: number;
    Rate3D: number;
    Commission3D: number;
}

// Create a Dexie database with a table for BetTypeConfig
const db = new Dexie('BetTypeConfigDB');
db.version(1).stores({
    betTypeConfigs: 'CurrentBetType',
});

// Create a React component that uses the interface and the database
export default function BetTypeConfigForm() {
    // Use a state variable to store the config data
    const [config, setConfig] = useState<BetTypeConfig>({
        CurrentBetType: '3D',
        Rate2D: 0,
        Commission2D: 0,
        Rate3D: 0,
        Commission3D: 0,
    });

    // Use useEffect to fetch the config data from IndexedDB
    useEffect(() => {
        // Use Dexie to get the config data by its key
        db.table('betTypeConfigs')
            .get('2D')
            .then((configFromDB) => {
                setConfig(configFromDB);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    // Handle input changes and update the config state
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setConfig({
            ...config,
            [name]: value,
        });
    };

    // Handle form submission and save the config to IndexedDB
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Use Dexie to put the config data in the table
        db.table('betTypeConfigs')
            .put(config)
            .then(() => {
                console.log('Saved config to IndexedDB');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // Render the form with Material UI components and compact style
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Current Bet Type"
                name="CurrentBetType"
                value={config.CurrentBetType}
                onChange={handleChange}
                select
                SelectProps={{
                    native: true,
                }}
                size='small'
                sx={{ width: '10rem', p: 1 }} // Use sx prop to apply compact style
            >
                <option value="2D">2D</option>
                <option value="3D">3D</option>
            </TextField><div />
            <TextField
                label="Rate 2D"
                name="Rate2D"
                type="number"
                value={config.Rate2D}
                onChange={handleChange}
                size='small'
                sx={{ width: '10rem', p: 1 }} // Use sx prop to apply compact style
            />
            <TextField
                label="Commission 2D"
                name="Commission2D"
                type="number"
                value={config.Commission2D}
                onChange={handleChange}
                size='small'
                sx={{ width: '10rem', p: 1 }} // Use sx prop to apply compact style
            />
            <Button type="submit" variant="contained" color="primary"
                size='small' sx={{ mt: 1.5 }}>
                Update
            </Button>

        </form >);
}