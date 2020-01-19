export class Book {
    private name_: string;

    constructor(name: string) {
        this.name_ = name;
    }

    getName() {
        return this.name_;
    }
}
