import { useState, useEffect } from "react";
import Dexie from "dexie";

// Define the BetNumber interface
export interface BetNumber {
  id?: number;
  name: string;
  value: number;
}

// Define the custom hook
const useBetNumbers = () => {
  // Initialize the state
  const [betNumbers, setBetNumbers] = useState<BetNumber[]>([]);

  // Define the database name and version
  const dbName = "betNumbersDB";
  const dbVersion = 1;

  // Define the store name and schema
  const storeName = "betNumbers";
  const storeSchema = "++id,name,value";

  // Create a new instance of Dexie
  const db = new Dexie(dbName);

  // Define the database schema
  db.version(dbVersion).stores({
    [storeName]: storeSchema,
  });

  // Create a function to get all the bet numbers from the database
  const getAllBetNumbers = async () => {
    // Get all the bet numbers from the store
    const betNumbers = await db.table(storeName).toArray();

    // Set the state with the bet numbers
    setBetNumbers(betNumbers);
  };

  // Create a function to add a new bet number to the database
  const addBetNumber = async (betNumber: BetNumber) => {
    // Add the bet number to the store
    await db.table(storeName).add(betNumber);

    // Get all the bet numbers from the store
    const betNumbers = await db.table(storeName).toArray();

    // Set the state with the updated bet numbers
    setBetNumbers(betNumbers);
  };

  // Create a function to update an existing bet number in the database
  const updateBetNumber = async (betNumber: BetNumber) => {
    // Update the bet number in the store
    await db.table(storeName).put(betNumber);

    // Get all the bet numbers from the store
    const betNumbers = await db.table(storeName).toArray();

    // Set the state with the updated bet numbers
    setBetNumbers(betNumbers);
  };

  // Create a function to delete an existing bet number from the database
  const deleteBetNumber = async (id: number) => {
    // Delete the bet number from the store
    await db.table(storeName).delete(id);

    // Get all the bet numbers from the store
    const betNumbers = await db.table(storeName).toArray();

    // Set the state with the updated bet numbers
    setBetNumbers(betNumbers);
  };

  // Use an effect hook to get all the bet numbers when the component mounts
  useEffect(() => {
    getAllBetNumbers();
  }, []);

  // Return the state and the CRUD functions
  return { betNumbers, addBetNumber, updateBetNumber, deleteBetNumber };
};

export default useBetNumbers;
