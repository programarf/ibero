import Coche from "./Coche";
import CocheDB from "./CocheDB";
import CocheAbstract from "./CocheAbstract";
import CochesSubstitucionLiskov from "./CochesSubstitucionLiskov";



/* Class   */
let myCar = new Coche("Ford", 2014);
document.getElementById("demo").innerHTML =
    "Mi coche tiene " + myCar.age() + "años " + "y es  un " + myCar.getMarcaCoche();
/* Cada clase su responbilidad  */
let carDB = new CocheDB();
carDB.guardarCocheDB(12);
