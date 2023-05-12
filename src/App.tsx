import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme, styled } from '@mui/material';

import Home from './pages/main-entry';
import Bet_type from './pages/bet-type-config';
import Customer_config from './pages/customer-config';
import Sale_carry_lucky from './pages/sale-carry-lucky';
import Sale_summary from './pages/sale-summary';
import NotFound from './pages/NotFound';

import DpsAppBar from './components/DpsAppBar';
import Tmp from './services/local-storage';

const Offset = styled('div')(({ theme: Theme }) => Theme.mixins.toolbar);

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {

  return (
    <>
      <Router>
        <ThemeProvider theme={lightTheme}>
          <DpsAppBar />
          <Offset />
        </ThemeProvider>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/bet-type-config" element={<Bet_type />} />
          <Route path="/customer-config" element={<Customer_config />} />
          <Route path="/sale-carry-lucky" element={<Sale_carry_lucky />} />
          <Route path="/sale-summary" element={<Sale_summary />} />
          <Route element={<NotFound />} />
          <Route path="/tmp" element={<Tmp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
