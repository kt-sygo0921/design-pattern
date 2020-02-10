import { Decorator } from "./Decorator";

class ConcreateDecoratorB extends Decorator {
    method1() {
        this.Component.method1();
        console.log('ConcreateDecoratorB method1');
    }

    method2() {
        this.Component.method2();
        console.log('ConcreateDecoratorB method2')
    }
}

export {ConcreateDecoratorB};
