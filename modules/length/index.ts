import { Quantity as QuantityBase } from "../../quantity";

Number.prototype.feet = function() { return new Quantity(this, "feet"); }
Number.prototype.meters = function() { return new Quantity(this, "meters"); }

declare global {
    interface Number {

        feet(): Quantity;
        meters(): Quantity;
    }
}

export default class Quantity extends QuantityBase {

    constructor(
        public readonly value: number, 
        public readonly unit: string) {

            super(value, unit);
    }

    toMeters() { return this.unit == "meters" ? this : new Quantity(this.value / 3.2808, "meters"); }
    toFeet() { return this.unit == "feet" ? this : new Quantity(this.value * 3.2808, "feet"); }
}