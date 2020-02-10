import { Component } from "./Component";

abstract class Decorator extends Component {
    protected Component: Component;

    constructor(component: Component) {
        super();
        this.Component = component;
    }
}

export {Decorator};
