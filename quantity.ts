export class Quantity {

    constructor(
        public readonly value: number, 
        public readonly unit: string) {
    }

    toString(): string {

        return `${this.value} ${this.unit}`;
    }
}