// 20230514 Here is a possible crud ui page for the interface code in react material typescript. I used the Material-UI library and React Hooks to create the components. I also added some basic validation and error handling. Note that this is not a complete solution and you may need to modify it according to your requirements.

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
} from "@mui/material";
import { Alert } from "@mui/material";
import axios from "axios";

// Define the interface for the client object
export interface Client {
  Id: number;
  LoginName: string;
  Password: string;
  Notes: string;
  ServerUrl: string;
  DatabaseId: string;
  Role: string; // master, agent
}

// Define the initial state for the client object
const initialClientState: Client = {
  Id: 0,
  LoginName: "",
  Password: "",
  Notes: "",
  ServerUrl: "",
  DatabaseId: "",
  Role: "",
};

// Define the component for the crud ui page
const ClientCrudPage = () => {
  // Define the state variables for the clients array, the selected client, the dialog open status, and the snackbar message
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client>(initialClientState);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  // Define a function to fetch the clients data from the server
  const fetchClients = async () => {
    try {
      const response = await axios.get("/api/clients");
      setClients(response.data);
    } catch (error) {
      console.error(error);
      setSnackbarMessage("Failed to fetch clients data");
    }
  };

  // Call the fetchClients function when the component mounts
  useEffect(() => {
    fetchClients();
  }, []);

  // Define a function to handle the dialog open event
  const handleDialogOpen = (client: Client) => {
    setSelectedClient(client);
    setDialogOpen(true);
  };

  // Define a function to handle the dialog close event
  const handleDialogClose = () => {
    setSelectedClient(initialClientState);
    setDialogOpen(false);
  };

  // Define a function to handle the input change event
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setSelectedClient({ ...selectedClient, [name]: value });
  };

  // Define a function to handle the create client event
  const handleCreateClient = async () => {
    try {
      const response = await axios.post("/api/clients", selectedClient);
      setClients([...clients, response.data]);
      setSnackbarMessage("Created client successfully");
      handleDialogClose();
    } catch (error) {
      console.error(error);
      setSnackbarMessage("Failed to create client");
    }
  };

  // Define a function to handle the update client event
  const handleUpdateClient = async () => {
    try {
      const response = await axios.put(`/api/clients/${selectedClient.Id}`, selectedClient);
      setClients(clients.map((client) => (client.Id === response.data.Id ? response.data : client)));
      setSnackbarMessage("Updated client successfully");
      handleDialogClose();
    } catch (error) {
      console.error(error);
      setSnackbarMessage("Failed to update client");
    }
  };

  // Define a function to handle the delete client event
  const handleDeleteClient = async () => {
    try {
      await axios.delete(`/api/clients/${selectedClient.Id}`);
      setClients(clients.filter((client) => client.Id !== selectedClient.Id));
      setSnackbarMessage("Deleted client successfully");
      handleDialogClose();
    } catch (error) {
      console.error(error);
      setSnackbarMessage("Failed to delete client");
    }
  };

 
  // Define a function to validate the selected client data
  const validateClient = () => {
    return (
      selectedClient.LoginName &&
      selectedClient.Password &&
      selectedClient.ServerUrl &&
      selectedClient.DatabaseId &&
      selectedClient.Role
    );
  };

  // Return the jsx element for the crud ui page
  return (
    <div>
      <h1>Client CRUD UI Page</h1>
      <Button variant="contained" color="primary" onClick={() => handleDialogOpen(initialClientState)}>
        Create New Client
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>LoginName</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>ServerUrl</TableCell>
              <TableCell>DatabaseId</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.Id}>
                <TableCell>{client.Id}</TableCell>
                <TableCell>{client.LoginName}</TableCell>
                <TableCell>{client.Password}</TableCell>
                <TableCell>{client.Notes}</TableCell>
                <TableCell>{client.ServerUrl}</TableCell>
                <TableCell>{client.DatabaseId}</TableCell>
                <TableCell>{client.Role}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => handleDialogOpen(client)}>
                    Edit/Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for creating/updating/deleting a client */}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{selectedClient.Id ? "Edit/Delete Client" : "Create New Client"}</DialogTitle>
        <DialogContent>
          <TextField
            name="LoginName"
            label="LoginName"
            value={selectedClient.LoginName}
            onChange={handleInputChange}
            required
          />
          <TextField
            name="Password"
            label="Password"
            value={selectedClient.Password}
            onChange={handleInputChange}
            required
          />
          <TextField
            name="Notes"
            label="Notes"
            value={selectedClient.Notes}
            onChange={handleInputChange}
          />
          <TextField
            name="ServerUrl"
            label="ServerUrl"
            value={selectedClient.ServerUrl}
            onChange={handleInputChange}
            required
          />
          <TextField
            name="DatabaseId"
            label="DatabaseId"
            value={selectedClient.DatabaseId}
            onChange={handleInputChange}
            required
          />
          <TextField
            name="Role"
            label="Role"
            value={selectedClient.Role}
            onChange={handleInputChange}
            required
          />
        </DialogContent>
        <DialogActions>
          {selectedClient.Id && (
            <Button variant="contained" color="secondary" onClick={handleDeleteClient}>
              Delete
            </Button>
          )}
          {selectedClient.Id ? (
            <Button variant="contained" color="primary" onClick={handleUpdateClient} disabled={!validateClient()}>
              Update
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleCreateClient} disabled={!validateClient()}>
              Create
            </Button>
          )}
          <Button variant="contained" onClick={handleDialogClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for showing messages */}
      <Snackbar open={snackbarMessage !== ""} autoHideDuration={3000} >
        <Alert  severity="info">
          {snackbarMessage}
        </Alert>
      </Snackbar>

    </div>

  );
};

export default ClientCrudPage;
