import { Box, Grid, TextField } from '@mui/material';

export default () => {
    return (<>
        <Box m={1} sx={{
            width: '100%',
            m: 0,
        }}>
            <Grid container   >
                <Grid item xs={6}>
                    <TextField   sx={{ p: 2, pr: 0 }}
                    size="small" variant="outlined"
                    label="Number" type="text" 
                />
                </Grid>
                </Grid>
        </Box>
    </>);
}