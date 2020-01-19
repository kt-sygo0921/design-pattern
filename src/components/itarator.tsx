import * as React from 'react';
import {Book} from '../designPattern/Itarator/book';
import {BookShelf} from '../designPattern/Itarator/bookShelf';
import {IIterator} from '../designPattern/Itarator/itarator';

const Itarator = (): JSX.Element => {
    const bookShelf = new BookShelf(4);
    bookShelf.appnedBook(new Book('こころ'));
    bookShelf.appnedBook(new Book('人間失格'));
    bookShelf.appnedBook(new Book('君の名は'));
    bookShelf.appnedBook(new Book('ぐりとぐら'));

    const it: IIterator = bookShelf.iterator();
    while(it.hasNext()) {
        console.log(it.next().getName());
    }
    return(
        <p>うおおおおおおお</p>
    )
}

export {Itarator};
