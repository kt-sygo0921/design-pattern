import * as React from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom';

import {Iterator} from './pages/Iterator';
import {Decorator} from './pages/Decorator';
import { TemplateMethod } from "./pages/TemplateMethod";

import "./styles.css";


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/Iterator" component={Iterator} />
        <Route path="/Decorator" component={Decorator} />
        <Route path="/TemplateMethod" component={TemplateMethod} />
      </div>

      <ul>
        <li><Link to="/Iterator">Iteratorパターン</Link></li>
        <li><Link to="/Decorator">Decoratorパターン</Link></li>
        <li><Link to="/TemplateMethod">TemplateMethodパターン</Link></li>
      </ul>
    </BrowserRouter>
  );
}