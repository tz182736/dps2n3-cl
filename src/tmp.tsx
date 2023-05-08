import React from 'react';
import { Box, Grid } from '@mui/material';

const FlexLayout: React.FC = () => {
  return (

    <Box display="flex" height="100vh">
      <Grid container>
        <Grid item xs={6} md={3}>
          <Box bgcolor="red" p={2}>
            This is the first item with 3/6 ratio on small screens and 3/12 ratio on medium screens
          </Box>
        </Grid>
        <Grid item xs={4} md={2}>
          <Box bgcolor="green" p={2}>
            This is the second item with 2/6 ratio on small screens and 2/12 ratio on medium screens
          </Box>
        </Grid>
        <Grid item xs={2} md={1}>
          <Box bgcolor="blue" p={2}>
            This is the third item with 1/6 ratio on small screens and 1/12 ratio on medium screens
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlexLayout;