function Fn(){
	this.prop = 'propiedad'
	
}
Fn.prototype.lala = function FuncionDePrototipo(){}

const r = new Fn()
//console.log(r.__proto__);
//
//fat arrow function
//console.log(this);


const fatFn = () => {
	this.prop = 'lala'
}
const r1 = fatFn()
//console.log(this);




//return implicito
const fnR = () => 2
console.log(fnR());
