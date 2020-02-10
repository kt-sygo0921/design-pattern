import * as React from "react";

import { DecoratorPattern } from "../../components/decorator";

export default function Decorator() {
  return (
    <div className="App">
      <h1>Decoratorパターン</h1>
      <DecoratorPattern />
    </div>
  );
}

export {Decorator}