import React from "react";
import Logo from "./imgs/logo.jpg";

function Header() {
  return (
    <>
      <header>
        <img src={Logo} />
        <h1>Leo Bike Shop</h1>
      </header>
    </>
  );
}

export default Header;