import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bet-type-config">BetType</Link>
          </li>
          <li>
            <Link to="/customer-config">Customer Setup</Link>
          </li> 
          <li>
            <Link to="/sale-carry-lucky">Sale/Carry/Lucky</Link>
          </li>
          <li>
            <Link to="/sale-summary">Sale Summary </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;