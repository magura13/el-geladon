import React from "react";
import Logo from "./imgs/logo.jpg";

function Header() {
//no react não uso font-weight mas sim fontWeight em camelCase
const styleCss = {
  color: 'green',
  fontWeight: 'bold',
  border: '1px solid black',
}

  return (
    <>
        <img className="Logo" src={Logo} />
      <header className="Header" style={styleCss}>
        <h1 style={{color: 'green', fontWeight: 800}}>Leo Bike Shop</h1>
        <h2 style={styleCss}>A Melhor Loja do norte de minas</h2>
      </header>
    </>
  );
}

export default Header;