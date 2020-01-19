import {IIterator} from './itarator';
import {BookShelf} from './bookShelf';

export class BookShelfIterator implements IIterator {
    private bookShelf: BookShelf;

    private index: number;

    constructor(bookShelf: BookShelf) {
        this.bookShelf = bookShelf;
        this.index = 0;
    }

    public hasNext(): boolean {
        if (this.index < this.bookShelf.getLength()) {
            return true;
        }
        return false;
    }

    public next(): Record<string, any> {
        return this.bookShelf.getBookAt(this.index++);
    }
}
