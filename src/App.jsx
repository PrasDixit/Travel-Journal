import React from "react";
import Header from "./Header";
import Card from "./Card";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Card />
      </div>
    </>
  );
};

export default App;
