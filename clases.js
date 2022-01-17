//Expresión de classe
//const Rectangulo = class R{
//
//Clases declaradas con class no tienen hoisting!
//console.log(Rectangulo);
class Rectangulo{

}
//Hoisting
//Tomamos variables definidas con var
//y funciones definidas con function
//las lleva al comienzo del archivo
//console.log(Cuadrado);
function Cuadrado(){}
//console.log(Cuadrado,Rectangulo);
//
const r = new Rectangulo()

class Chancho{
    propiedad = 'mi propiedad'
    #hambre
    constructor(estado = 'feliz', hambre = false){
        this.estado = estado
        this.#hambre = hambre
    }

    hablar (){
        console.log(`soy un chancho ${this.estado} ${this.hambre ? 'con mucha hambre' : 'satisfecho'}`);
    }

    static comer(){
        console.log(this.propiedad,'estoy comiendo');
    }
}
Chancho.comer()
const feliz = new Chancho('feliz')
//console.log(feliz.__proto__.hablar);
//feliz.hablar()
const triste = new Chancho('triste')
//triste.hablar()
const nose = new Chancho()
//nose.hablar()