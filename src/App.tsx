import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { styled, ThemeProvider } from '@mui/material/styles';

import './index.css'
import theme from './theme';

import Home from './pages/main-entry';
import Bet_type from './pages/bet-type-config';
import Customer_config from './pages/customer-config';
import Sale_carry_lucky from './pages/sale-carry-lucky';
import Sale_summary from './pages/sale-summary';
import NotFound from './pages/NotFound';

import DpsAppBar from './components/DpsAppBar';
import Tmp from './pages/tmp-page.tsx';

const Offset = styled('div')(({ theme: Theme }) => Theme.mixins.toolbar);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <DpsAppBar />
        <Offset /> <br />
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
    </ThemeProvider>
    ,
  </React.StrictMode>,
)
