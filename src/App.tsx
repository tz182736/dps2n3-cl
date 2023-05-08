import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/main-entry';
import Bet_type from './pages/bet-type-config';
import Customer_config from './pages/customer-config';
import Sale_carry_lucky from './pages/sale-carry-lucky';
import Sale_summary from './pages/sale-summary';
import NotFound from './pages/NotFound';
// import DpsAppBar from './components/DpsAppBar-tmp';
import DpsAppBar from './components/DpsAppBar-responsive';

function App() {
  return (
    <>
      <Router>
        <DpsAppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/bet-type-config" element={<Bet_type />} />
          <Route path="/customer-config" element={<Customer_config />} />
          <Route path="/sale-carry-lucky" element={<Sale_carry_lucky />} />
          <Route path="/sale-summary" element={<Sale_summary />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
