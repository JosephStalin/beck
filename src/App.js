import React from "react";
import Navbar from "./Components/Navbar";

const App = () => {
  let hello = "hello";

  return (
    <div>
      <Navbar></Navbar>
      <div>{hello}</div>
    </div>
  );
};

export default App;
