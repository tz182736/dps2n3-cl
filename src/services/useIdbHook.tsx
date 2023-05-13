import { useState, useEffect } from "react";
import { openDB } from "idb";

// Define the BetNumber interface
export interface BetNumber {
  id: number;
  betNumber: string;
  betAmount: number;
}

// Define the custom hook
const useBetNumbers = () => {
  // Initialize the state
  const [betNumbers, setBetNumbers] = useState<BetNumber[]>([]);

  // Define the database name and version
  const dbName = "betNumbersDB";
  const dbVersion = 1;

  // Define the store name
  const storeName = "betNumbers";

  // Create a function to open the database
  const openDatabase = async () => {
    // Open the database and create the store if it doesn't exist
    const db = await openDB(dbName, dbVersion, {
      upgrade(db) {
        db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
      },
    });
    return db;
  };

  // Create a function to get all the bet numbers from the database
  const getAllBetNumbers = async () => {
    // Open the database
    const db = await openDatabase();

    // Get all the bet numbers from the store
    const betNumbers = await db.getAll(storeName);

    // Set the state with the bet numbers
    setBetNumbers(betNumbers);
  };

  // Create a function to add a new bet number to the database
  const addBetNumber = async (betNumber: BetNumber) => {
    // Open the database
    const db = await openDatabase();

    // Add the bet number to the store
    await db.add(storeName, betNumber);

    // Get all the bet numbers from the store
    const betNumbers = await db.getAll(storeName);

    // Set the state with the updated bet numbers
    setBetNumbers(betNumbers);
  };

  // Create a function to update an existing bet number in the database
  const updateBetNumber = async (betNumber: BetNumber) => {
    // Open the database
    const db = await openDatabase();

    // Update the bet number in the store
    await db.put(storeName, betNumber);

    // Get all the bet numbers from the store
    const betNumbers = await db.getAll(storeName);

    // Set the state with the updated bet numbers
    setBetNumbers(betNumbers);
  };

  // Create a function to delete an existing bet number from the database
  const deleteBetNumber = async (id: number) => {
    // Open the database
    const db = await openDatabase();

    // Delete the bet number from the store
    await db.delete(storeName, id);

    // Get all the bet numbers from the store
    const betNumbers = await db.getAll(storeName);

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
