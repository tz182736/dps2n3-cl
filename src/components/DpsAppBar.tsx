{/* #region(collapsed) List of Import  */ }
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
{/* #endregion */ }

const config_pages: [name: string, route: string][] = [['Bet Type', 'bet-type-config'], ['Customer setup', 'customer-config'],['Test page','Tmp']]
const setting_pages: [name: string, route: string][] = [['Sale/Carry/Lucky', 'sale-carry-lucky'], ['Sale Summary', 'sale-summary']]

function ResponsiveAppBar() {
  {/* #region(collapsed) functions declaration  */}

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // curried function to prevent callback 
  const handleCloseNavMenu2 = (routeData: string) => () => {
    setAnchorElNav(null);
    navigate(routeData);
  };

  const handleCloseUserMenu = (routeData: string) => () => {
    setAnchorElUser(null);
    navigate(routeData);
  };

  {/* #endregion */}

  return (
    <AppBar position="fixed" color="primary" enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* #region customer name ui for desktop  */}
          <Select style={{ flexGrow: 1 }}
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 380,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            value={'option1'}
            onChange={() => { }}
            displayEmpty
            inputProps={{ 'aria-label': 'Select an option' }}
          >
            <MenuItem value={'option1'}>Aye Min 1</MenuItem>
            <MenuItem value={'Bo Pai 2'}>Bo Pai 2</MenuItem>
            <MenuItem value={'Cow Gyi 3'}>Cow Gyi 3</MenuItem>
          </Select>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu2('')}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {config_pages.map((page) => (
                <MenuItem key={page[0]}
                  onClick={handleCloseNavMenu2(page[1])}
                >
                  <Typography textAlign="center">{page[0]}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* #endregion customer name ui for Desktop */}

          {/* #region customer name ui for Phone */}
          <Select style={{ flexGrow: 1 }}
            sx={{
              mr: 1,
              display: {
                xs: 'flex', md: 'none'
              },
              fontFamily: 'monospace',
              fontWeight: 380,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            value={'option1'}
            onChange={() => { }}
            displayEmpty
            inputProps={{ 'aria-label': 'Select an option' }}
          >
            <MenuItem value={'option1'}>Option 1</MenuItem>
            <MenuItem value={'option2'}>Option 2</MenuItem>
            <MenuItem value={'option3'}>Option 3</MenuItem>
          </Select>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {config_pages.map((page) => (
              <Button
                key={page[0]}
                onClick={handleCloseNavMenu2(page[1])}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page[0]}
              </Button>
            ))}
          </Box>
          {/* #endregion customer name ui for phone */}

          {/* #region right corner  Setting MenuItem , flexGrow: 0  */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu('')}
            >
              {setting_pages.map((setting) => (
                <MenuItem key={setting[0]} onClick={handleCloseUserMenu(setting[1])}>
                  <Typography textAlign="center">{setting[0]}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* #endregion right corner  Setting MenuItem , flexGrow: 0 */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
