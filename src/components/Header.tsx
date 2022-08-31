import { NavLink, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <header style={{ display: "flex", height: "4rem" }}>
        <NavLink to="/">
          <h1>Home</h1>
        </NavLink>
        <NavLink to="shoppingcart">ShoppingCart</NavLink>
        <NavLink to="admincms">Admin CMS</NavLink>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
