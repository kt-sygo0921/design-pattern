import { ClassA } from "./ClassA";
import { ClassB } from "./ClassB";

class TemplateMethodClient {
    main() {
        const obj1 = new ClassA();
        obj1.operation1();

        const obj2 = new ClassB();
        obj2.operation1();
    }
}

export {TemplateMethodClient};
