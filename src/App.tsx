import React from "react";
import { Inline, Stylesheet, Sass, Tailwind } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Inline bgColor="pink" />
      <Stylesheet />
      <Sass />
      <Tailwind />
    </div>
  );
}

export default App;
