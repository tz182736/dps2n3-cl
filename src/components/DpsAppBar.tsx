import { AppBar, Toolbar, Select, MenuItem } from '@mui/material';

const DpsAppBar = () => {

  return (
    <AppBar position="static">
      <Toolbar>
        <Select style={{ flexGrow: 1 }}
          value={'option1'}
          onChange={() => { }}
          displayEmpty
          inputProps={{ 'aria-label': 'Select an option' }}
        >
          <MenuItem value={'option1'}>Option 1</MenuItem>
          <MenuItem value={'option2'}>Option 2</MenuItem>
          <MenuItem value={'option3'}>Option 3</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
};

export default DpsAppBar;
