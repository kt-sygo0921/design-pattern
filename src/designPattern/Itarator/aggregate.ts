import {IIterator} from './itarator';

export interface IAggregate {
    iterator(): IIterator;
}
