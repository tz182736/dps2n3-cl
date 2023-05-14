
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { styled, ThemeProvider } from '@mui/material/styles';

import './index.css'

import { App as Home } from './pages/main-entry.tsx';
import Bet_type from './pages/bet-type-config.tsx';
import Customer_config from './pages/customer-config.tsx';
import Sale_carry_lucky from './pages/sale-carry-lucky.tsx';
import Sale_summary from './pages/sale-summary.tsx';
import NotFound from './pages/NotFound.tsx';

import { CustomerListProps } from "./shared/customer";

import DpsAppBar from './components/DpsAppBar.tsx';
import Tmp from './pages/tmp-page.tsx';

const Offset = styled('div')(({ theme: Theme }) => Theme.mixins.toolbar);


export const App = () => {
  
  return (<>
    <Router>
      <DpsAppBar />
      <Offset /> <br />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/bet-type-config" element={<Bet_type />} />
        <Route path="/customer-config" element={<Customer_config {CustomerListProps} />} />
        <Route path="/sale-carry-lucky" element={<Sale_carry_lucky />} />
        <Route path="/sale-summary" element={<Sale_summary />} />
        <Route element={<NotFound />} />
        <Route path="/tmp" element={<Tmp />} />
      </Routes>
    </Router>
  </>);
}
