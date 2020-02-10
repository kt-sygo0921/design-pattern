import * as React from "react";
import "./styles.css";

import {Itarator} from './components/itarator';
import { Decorator } from "./components/decorator";
import { TemplateMethod } from "./components/templateMethod";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Itarator />
      <Decorator />
      <TemplateMethod />
    </div>
  );
}
