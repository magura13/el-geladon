import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Cards from "./components/Cards";
import './App.css';

function App() {
  const brand = "Cannondale";
  const model = "Carbon5";
  const year = "2019";

  return (
    <>
      <Header />
      <Body />
      <Cards brand={brand} model={model} year={year} />
    </>
  );
}

export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello world <code>src/App.js</code> of React.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
