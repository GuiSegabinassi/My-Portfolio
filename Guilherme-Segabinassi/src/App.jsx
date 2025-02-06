import React from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* As outras seções vão aqui */}
    </div>
  );
}

export default App;
