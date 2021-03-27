/**
 * Abstract Class Coche.
 *
 * @class Coche
 */
class Coche {
  constructor(precios) {

    this.precios = precios;
    if (this.constructor == Coche) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  precioMedioCoche() {
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
  constructor(precios) {
    super(precios);
  }
  precioMedioCoche() {
    return this.precios;
  }
}
/**
 * Ferrari.
 *
 * @class Ferrari
 * @extends {Coche}
 */
class Ferrari extends Coche {
  constructor(precios) {
    super(precios);
  }

  precioMedioCoche() {
    return this.precios;
  }
}

function imprimirPrecioMedioCoche(arrayCoches) {
  console.log("Se crea un interfax la cual se le hace un extends ", arrayCoches);
  for (const coche of arrayCoches) {
    console.log(coche.precioMedioCoche());
  }
}

const renault = new Renault(500);
const ferrari = new Ferrari(1000);

imprimirPrecioMedioCoche([renault, ferrari]);

export default Coche
//solo una responsabilida esta clases