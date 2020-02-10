abstract class Abstract {
    public abstract method1(): void;
    public abstract method2(): void;

    public operation1(): void {
        this.method1();
        this.method2();
    }
}

export {Abstract}