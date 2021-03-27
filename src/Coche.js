/**
 * Class Coche.
 *
 * @class Coche
 */
class Coche {
  constructor(marca, year) {
    this.marca = marca;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
  getMarcaCoche() {
    return this.marca;
  }
}
export default Coche
//solo una responsabilida esta clases