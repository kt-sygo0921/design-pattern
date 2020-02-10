import * as React from 'react';
import { TemplateMethodClient } from '../designPattern/TempleteMethod/Client';

const TemplateMethodPattern: React.FC = () => {
    const decorator = new TemplateMethodClient();
    decorator.main();
    return (
        <>
            <p>TemplateMethodClientパターン</p>
            <p>consoleをみてみよう</p>
        </>
    )
}

export {TemplateMethodPattern};
