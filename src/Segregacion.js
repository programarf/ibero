var Loro = /** @class */ (function () {
    function Loro() {
    }
    /**
     *
     */
    Loro.prototype.volar = function () {
    };
    /**
     *
     */
    Loro.prototype.comer = function () {
    };
    return Loro;
}());
Loro["__class"] = "Loro";
Loro["__interfaces"] = ["IAveVoladora", "IAve"];
var Pinguino = /** @class */ (function () {
    function Pinguino() {
    }
    /**
     *
     */
    Pinguino.prototype.nadar = function () {
    };
    /**
     *
     */
    Pinguino.prototype.comer = function () {
    };
    return Pinguino;
}());
Pinguino["__class"] = "Pinguino";
Pinguino["__interfaces"] = ["IAve", "IAveNadadora"];