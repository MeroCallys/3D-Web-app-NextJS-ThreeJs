import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="overview">Overview</NavLink>
      <NavLink to="profiles">Profiles</NavLink>
      <NavLink to="orders">Orders</NavLink>
      <NavLink to="ledgers">Ledger</NavLink>
    </header>
  );
}

export default Sidebar;
