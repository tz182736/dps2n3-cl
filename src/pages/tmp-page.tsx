import React, { useState } from "react";
import { Box, Button, Input } from "@mui/material";

// import useBetNumbers, { BetNumber } from "../services/useDexieHook";
import useBetNumbers, { BetNumber } from "../services/useIdbHook";

// interface BetNumber {
//     id: number;
//     name: string;
//     value: number;
// }

const BetNumbers = () => {
    // Use the custom hook
    const { betNumbers, addBetNumber, updateBetNumber, deleteBetNumber } =
        useBetNumbers();

    // Define some local state for the input fields
    const [name, setName] = useState("");
    const [value, setValue] = useState(0);
    const [editId, setEditId] = useState<number | null>(null);

    // Define a function to handle the form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Check if we are editing or adding a new bet number
        if (editId) {
            // Update the existing bet number
            updateBetNumber({ id: editId, betNumber: name, betAmount: value });
            // Reset the input fields and edit id
            setName("");
            setValue(0);
            setEditId(null);
        } else {
            // Add a new bet number
            addBetNumber({ id: 0, betNumber: name, betAmount: value });
            // Reset the input fields
            setName("");
            setValue(0);
        }
    };

    // Define a function to handle the edit button click
    const handleEdit = (betNumber: BetNumber) => {
        // Set the input fields with the bet number data
        setName(betNumber.betNumber);
        setValue(betNumber.betAmount);
        // Set the edit id with the bet number id
        setEditId(betNumber.id ?? 0);
    };

    // Define a function to handle the delete button click
    const handleDelete = (id: number) => {
        // Delete the bet number by id
        deleteBetNumber(id);
    };

    return (
        <Box sx={{ maxWidth: "800px", margin: "0 auto" }}>
            <h1>
                Bet Numbers App
            </h1>
            <form onSubmit={handleSubmit}>
                <Box sx={{ flexDirection: "column", gap: "10px" }}>
                    <Input
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <Input
                        type="number"
                        placeholder="Enter value"
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        required
                    />
                    <Button type="submit">{editId ? "Update" : "Add"}</Button>
                </Box>
            </form>
            <Box sx={{ margin: "20px" }}>
                {betNumbers.map((betNumber) => (
                    <Box key={betNumber.id} sx={{ gap: "10px", alignItems: "center" }}>
                        <p>{betNumber.betNumber}</p>
                        <p>{betNumber.betAmount}</p>
                        <Button onClick={() => handleEdit(betNumber)}>Edit</Button>
                        <Button onClick={() => handleDelete(betNumber.id ?? 0)}>Delete</Button>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default BetNumbers;
