import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Customer } from '../shared/i-customer';
 // Styles for the card 
const cardStyles = {
  width: '200px',
  height: '300px',
  margin: '10px'
};
 // Styles for the card content 
const cardContentStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between'
};
 // Styles for the title 
const titleStyles = {
  fontSize: '18px',
  fontWeight: 'bold'
};
 // Styles for the phone number 
const phoneStyles = {
  fontSize: '14px',
  color: 'gray'
};
 // Styles for the rate 
const rateStyles = {
  fontSize: '16px',
  color: 'green'
};
 // Styles for the commission 
const commissionStyles = {
  fontSize: '16px',
  color: 'blue'
};
 // Props for the CustomerCard component 
export interface CustomerCardProps {
  customer: Customer;
}
 // Component for displaying a customer card 
const CustomerCard = (props: CustomerCardProps) => {
  const { customer } = props;
  return (
    <Card style={cardStyles}>
      <CardContent classes={cardContentStyles}>
        <Typography style={titleStyles}>{customer.Name}</Typography>
        <Typography style={phoneStyles}>{customer.Phone}</Typography>
        <Typography style={rateStyles}>Rate2D: {customer.Rate2D}%</Typography>
        <Typography style={commissionStyles}>Commission2D: {customer.Commission2D}%</Typography>
        <Typography style={rateStyles}>Rate3D: {customer.Rate3D}%</Typography>
        <Typography style={commissionStyles}>Commission3D: {customer.Commission3D}%</Typography>
      </CardContent>
    </Card>
  );
};
 // Export the CustomerCard component 
export default CustomerCard;