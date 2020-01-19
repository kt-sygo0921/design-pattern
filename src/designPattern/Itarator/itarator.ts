export interface IIterator {
    hasNext(): boolean;
    next(): Record<string, any>;
}
