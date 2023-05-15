import React, { useState, useEffect } from "react";
import { Customer } from "../shared/customer"; // assuming the interface is defined in a separate file
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";

// assuming there is an API endpoint that returns an array of customers
const API_URL = "https://example.com/api/customers";

export const CustomerPage: React.FC = () => {
  // use state to store the customers array
  const [customers, setCustomers] = useState<Customer[]>([]);

  // use effect to fetch the data from the API when the component mounts
  useEffect(() => {
    // define an async function to fetch the data
    const fetchData = async () => {
      try {
        // make a GET request to the API and parse the response as JSON
        const response = await fetch(API_URL);
        const data = await response.json();

        // update the state with the data
        setCustomers(data);
      } catch (error) {
        // handle any errors
        console.error(error);
      }
    };

    // call the function
    fetchData();
  }, []); // pass an empty dependency array to run the effect only once

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>BetTotal</TableCell>
            <TableCell>WinTotal</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell>Rate2D</TableCell>
            <TableCell>Commission2D</TableCell>
            <TableCell>Rate3D</TableCell>
            <TableCell>Commission3D</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.Id}>
              <TableCell>{customer.Id}</TableCell>
              <TableCell>{customer.Name}</TableCell>
              <TableCell>{customer.Phone}</TableCell>
              <TableCell>{customer.BetTotal}</TableCell>
              <TableCell>{customer.WinTotal}</TableCell>
              <TableCell>{customer.Balance}</TableCell>
              <TableCell>{customer.Rate2D}</TableCell>
              <TableCell>{customer.Commission2D}</TableCell>
              <TableCell>{customer.Rate3D}</TableCell>
              <TableCell>{customer.Commission3D}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerPage;
