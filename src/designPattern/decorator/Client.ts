import { Component } from "./component";
import { ConcreateComponent } from "./ConcreateComponent";
import { ConcreateDecoratorA } from "./ConcreateDecoratorA";
import { ConcreateDecoratorB } from "./ConcreateDecoratorB";

class DecoratorClient {
    main() {
        const component: Component = new ConcreateComponent();
        component.method1();
        component.method2();

        const componentA: Component = new ConcreateDecoratorA(component);
        componentA.method1();
        componentA.method2();

        const componentB: Component = new ConcreateDecoratorB(componentA);
        componentB.method1();
        componentB.method2();
    }
}

export {DecoratorClient};