import {IAggregate} from './aggregate';
import {Book} from './book';
import {IIterator} from './itarator';
import {BookShelfIterator} from './bookShelfIterator';

export class BookShelf implements IAggregate {
    private books: Book[];

    private last: number = 0;

    public constructor(maxsize: number) {
        this.books = new Array(maxsize);
    }

    public getBookAt(index: number): Book {
        return this.books[index];
    }

    public appnedBook(book: Book): void {
        this.books[this.last++] = book;
    }

    public getLength(): number {
        return this.last;
    }

    public iterator(): IIterator {
        return new BookShelfIterator(this);
    }
}
