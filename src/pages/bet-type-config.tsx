import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';

import { BetTypeConfig } from '../shared/bet-number';
import { db } from '../shared/db';

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
            .get('BetConfigStatus')
            .then((configFromDB) => {
                console.log(configFromDB);
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
            .put(config, 'BetConfigStatus')
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
                value={config?.CurrentBetType}
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
                value={config?.Rate2D}
                onChange={handleChange}
                size='small'
                sx={{ width: '10rem', p: 1 }} // Use sx prop to apply compact style
            />
            <TextField
                label="Commission 2D"
                name="Commission2D"
                type="number"
                value={config?.Commission2D}
                onChange={handleChange}
                size='small'
                sx={{ width: '10rem', p: 1 }} // Use sx prop to apply compact style
            /><TextField
                label="Rate 3D"
                name="Rate3D"
                type="number"
                value={config?.Rate3D}
                onChange={handleChange}
                size='small'
                sx={{ width: '10rem', p: 1 }} // Use sx prop to apply compact style
            />
            <TextField
                label="Commission 3D"
                name="Commission3D"
                type="number"
                value={config?.Commission3D}
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