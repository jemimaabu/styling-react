import React from "react";
import { Inline, Stylesheet, Sass, Tailwind, Styled } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Inline bgColor="pink" />
      <Stylesheet />
      <Sass />
      <Tailwind />
      <Styled />
    </div>
  );
}

export default App;
