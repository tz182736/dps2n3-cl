// I’m not sure what you are trying to do, but I can try to help you with your code. Here is a possible React TypeScript CRUD UI component for your Customer interface:

import React, { useState } from "react";
import { Customer } from "../shared/customer";

interface CustomerProps {
  customer: Customer;
  onUpdate: (customer: Customer) => void;
  onDelete: (id: number) => void;
}

const CustomerItem: React.FC<CustomerProps> = ({
  customer,
  onUpdate,
  onDelete,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState<Customer>(customer);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedCustomer({ ...editedCustomer, [name]: value });
  };

  const handleUpdate = () => {
    onUpdate(editedCustomer);
    setEditMode(false);
  };

  const handleDelete = () => {
    onDelete(customer.Id);
  };

  return (
    <div className="customer-item">
      {editMode ? (
        <div className="customer-edit">
          <input
            type="text"
            name="Name"
            value={editedCustomer.Name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Phone"
            value={editedCustomer.Phone}
            onChange={handleChange}
          />
          <input
            type="number"
            name="BetTotal"
            value={editedCustomer.BetTotal}
            onChange={handleChange}
          />
          <input
            type="number"
            name="WinTotal"
            value={editedCustomer.WinTotal}
            onChange={handleChange}
          />
          <input
            type="number"
            name="Balance"
            value={editedCustomer.Balance}
            onChange={handleChange}
          />
          <input
            type="number"
            name="Rate2D"
            value={editedCustomer.Rate2D}
            onChange={handleChange}
          />
          <input
            type="number"
            name="Commission2D"
            value={editedCustomer.Commission2D}
            onChange={handleChange}
          />
          <input
            type="number"
            name="Rate3D"
            value={editedCustomer.Rate3D}
            onChange={handleChange}
          />
          <input
            type="number"
            name="Commission3D"
            value={editedCustomer.Commission3D}
            onChange={handleChange}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <div className="customer-view">
          <p>{customer.Name}</p>
          <p>{customer.Phone}</p>
          <p>{customer.BetTotal}</p>
          <p>{customer.WinTotal}</p>
          <p>{customer.Balance}</p>
          <p>{customer.Rate2D}</p>
          <p>{customer.Commission2D}</p>
          <p>{customer.Rate3D}</p>
          <p>{customer.Commission3D}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

interface CustomerListProps {
  customers: Customer[];
  onUpdate: (customer: Customer) => void;
  onDelete: (id: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  onUpdate,
  onDelete,
}) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CustomerItem
          key={customer.Id}
          customer={customer}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default CustomerList;
