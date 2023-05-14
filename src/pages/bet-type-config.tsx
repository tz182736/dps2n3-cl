// Import React, Material UI components and idb
import React, { useState } from "react";
import { TextField, Grid, Button } from "@mui/material";
import { openDB } from "idb";
import { BetEntryType } from "../shared/bet-number";

// Define a functional component that takes the BetEntryType props and renders a form
const BetEntryForm: React.FC<BetEntryType> = () => {
    // Destructure the props
    const {
        BetEntryType,
        Rate2D,
        Commission2D,
        Rate3D,
        Commission3D,
    } = props;

    // Define the state variables for the form inputs
    const [betEntryType, setBetEntryType] = useState(BetEntryType);
    const [rate2D, setRate2D] = useState(Rate2D);
    const [commission2D, setCommission2D] = useState(Commission2D);
    const [rate3D, setRate3D] = useState(Rate3D);
    const [commission3D, setCommission3D] = useState(Commission3D);

    // Define a function to handle the form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // Prevent the default behavior of the form
        event.preventDefault();

        // Open the idb database and get the transaction object
        const db = await openDB("BetEntryDB", 1);
        const tx = db.transaction("betEntries", "readwrite");

        // Update the bet entry with the new values
        await tx.store.put({
            BetEntryType: betEntryType,
            Rate2D: rate2D,
            Commission2D: commission2D,
            Rate3D: rate3D,
            Commission3D: commission3D,
        });

        // Wait for the transaction to complete and close the database
        await tx.done;
        db.close();
    };

    // Return the JSX element
    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Bet Entry Type"
                        value={betEntryType}
                        variant="outlined"
                        fullWidth
                        disabled
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Rate 2D"
                        value={rate2D}
                        variant="outlined"
                        fullWidth
                        type="number"
                        onChange={(event) => setRate2D(Number(event.target.value))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Commission 2D"
                        value={commission2D}
                        variant="outlined"
                        fullWidth
                        type="number"
                        onChange={(event) => setCommission2D(Number(event.target.value))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Rate 3D"
                        value={rate3D}
                        variant="outlined"
                        fullWidth
                        type="number"
                        onChange={(event) => setRate3D(Number(event.target.value))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Commission 3D"
                        value={commission3D}
                        variant="outlined"
                        fullWidth
                        type="number"
                        onChange={(event) => setCommission3D(Number(event.target.value))}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Update Bet Entry
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};


export default BetEntryForm;