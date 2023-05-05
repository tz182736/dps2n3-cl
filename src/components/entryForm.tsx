import {  Grid } from '@mui/material';

function MyApp() {
  // #region zutsand const  

  // #endregion
  return (
    <>
      <Grid container spacing={2}>
        <Grid container>
          {/* First row */}
          <Grid item xs={12} sm={6}>
            {/* Content for the first row, column 1 */}
            lmenu
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Content for the first row, column 2 */}
            <select >
              <option>Customer 1</option>
            </select>
          </Grid>
          <Grid item xs={12}>
            {/* Content for the first row, column 3 */}
            rmenu
          </Grid>
        </Grid>
        <Grid container>
          {/* Second row */}
          <Grid item xs={12} sm={6}>
            {/* Content for the second row, column 1 */}
            <input type="text" />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Content for the second row, column 2 */}
            <input type="text" />
          </Grid>
          <Grid item xs={12}>
            {/* Content for the second row, column 3 */}
            button     </Grid>
        </Grid>
        <Grid container>
          {/* Third row */}
          <Grid item xs={12} md={9}>
            {/* Content for the third row, column 1 */}
              ?
          </Grid>
          <Grid item xs={12} md={3}>
            {/* Content for the third row, column 2 */}

            <table>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {/* {customers.map((customer: Customer) => (
                  <tr key={customer.id}>
                    <td>{customer.name}</td>
                    <td>${totalAmount(customer).toFixed(2)}</td>
                  </tr>
                ))} */}
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>100</td>
                </tr>
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MyApp;
