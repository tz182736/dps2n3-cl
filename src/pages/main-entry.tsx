import { Box } from '@mui/material';

import Container from '@mui/material/Container';

export default () => {
    return (<>
        <h1>Main entry</h1>
        <Container maxWidth="xl">
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flexGrow: 0, bgcolor: 'grey.300', p: 1 }}>Item 1</Box >
                <Box sx={{ flexGrow: 1, bgcolor: 'grey.300', p: 1 }}>Item 2</Box>
                <Box sx={{ flexGrow: 2, bgcolor: 'grey.300', p: 1 }}>Item 3</Box>
            </Box >
        </Container>
    </>);
}