/**
 * Abstract Class Coche.
 *
 * @class Coche
 */
class Coche {
    constructor(asientos) {
        this.asientos = asientos;
        if (this.constructor == Coche) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    numAsientos() {
        throw new Error("Method 'numAsientos()' must be implemented.");
    }
}

/**
 * Renault.
 *
 * @class Renault
 * @extends {Coche}
 */
class Renault extends Coche {
    constructor(asientos) {
        super(asientos);
    }
    numAsientos() {
        return this.asientos;
    }
}

/**
 * Ferrari.
 *
 * @class Ferrari
 * @extends {Coche}
 */
class Ferrari extends Coche {
    constructor(asientos) {
        super(asientos);
    }
    numAsientos() {
        return this.asientos;
    }
}

/**
 * Toyota.
 *
 * @class Toyota
 * @extends {Coche}
 */
class Toyota extends Coche {
    constructor(numAsientos) {
        super(numAsientos);
    }
    numAsientos() {
        return this.asientos;
    }
}

function imprimirNumAsientos(arrayCoches) {
    for (const coche of arrayCoches) {
        console.log("substitucion liskov", coche.numAsientos());
    }
}

const renault = new Renault(5);
const ferrari = new Ferrari(2);
const toyota = new Toyota(3);

imprimirNumAsientos([renault, ferrari, toyota]);