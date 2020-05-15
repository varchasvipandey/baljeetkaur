import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//componenets
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import Main from "./components/main/main";

function App() {
  return (
    <div className="App">
      {/* NAV */}
      <Navigation />
      {/* HEADER */}
      <Header />
      {/* MAIN */}
      <Main />
      {/* FOOTER */}
    </div>
  );
}

export default App;
