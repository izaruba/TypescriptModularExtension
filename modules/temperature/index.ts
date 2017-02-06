import { Quantity as QuantityBase } from "../../quantity";

Number.prototype.fahrenheit = function() { return new Quantity(this, "°F"); }
Number.prototype.celcius = function() { return new Quantity(this, "°C"); }

declare global {
    interface Number {

        fahrenheit(): Quantity;
        celcius(): Quantity;
    }
}

export default class Quantity extends QuantityBase {

    constructor(
        public readonly value: number, 
        public readonly unit: string) {

            super(value, unit);
    }

    toCelcius() { return this.unit == "°C" ? this : new Quantity((this.value - 32) * 5 / 9, "°C"); }
    toFahrenheit() { return this.unit == "°F" ? this : new Quantity(this.value * 9 / 5 + 32, "°F"); }
}