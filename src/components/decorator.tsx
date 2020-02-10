import * as React from 'react';
import { DecoratorClient } from '../designPattern/decorator/Client';

const Decorator: React.FC = () => {
    const decorator = new DecoratorClient();
    decorator.main();
    return (
        <>
            <p>decoratorパターン</p>
            <p>consoleをみてみよう</p>
        </>
    )
}

export {Decorator};
