import { Decorator } from "./Decorator";

class ConcreateDecoratorA extends Decorator {
    method1() {
        this.Component.method1();
        console.log('ConcreateDecoratorA method1');
    }

    method2() {
        this.Component.method2();
        console.log('ConcreateDecoratorA method2')
    }
}

export {ConcreateDecoratorA};
