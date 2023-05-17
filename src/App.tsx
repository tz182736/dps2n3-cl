
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import './index.css'

import { App as Home } from './pages/main-entry.tsx';
import Bet_type from './pages/bet-type-config.tsx';
import Customer_list from './pages/customer-list.tsx';
import Customer_entry from './pages/customer-entry.tsx';
import Sale_carry_lucky from './pages/sale-carry-lucky.tsx';
import Sale_summary from './pages/sale-summary.tsx';
import NotFound from './pages/NotFound.tsx';

import DpsAppBar from './components/DpsAppBar.tsx';
import Tmp from './pages/test-only/tmp-page.tsx';

const Offset = styled('div')(({ theme: Theme }) => Theme.mixins.toolbar);

export default function App() {
  return (<>
    <Router>
      <DpsAppBar />
      <Offset /> <br />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/bet-type-config" element={<Bet_type />} />
        <Route path="/customer-list/*" element={<Customer_list />} />
        {/* <Route path="/customer-entry" element={<Customer_entry customer={customer} />} /> */}
        <Route path="/sale-carry-lucky" element={<Sale_carry_lucky />} />
        <Route path="/sale-summary" element={<Sale_summary />} />
        <Route element={<NotFound />} />
        <Route path="/tmp" element={<Tmp />} />
      </Routes>
    </Router>
  </>);
}
