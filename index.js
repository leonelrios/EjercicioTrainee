class CVehiculo{
	constructor(marca, modelo, precio){
		this.marca = marca;
		this.modelo = modelo;
		this.precio = precio;
	}

	getMarca(){
		return `${this.marca}`;
	}

	getModelo(){
		return `${this.modelo}`;
	}

	getPrecio(){
		return `${this.precio}`;
	}
}

class CAuto extends CVehiculo{
	constructor(marca, modelo, puertas, precio){
		super(marca,modelo,precio);
		this.puertas = puertas;
	}

	getPuertas(){
		return `${this.puertas}`
	}

	toString(){
		return `//Marca: ${this.getMarca()} //Modelo: ${this.getModelo()} //Puertas: ${this.getPuertas()} //Precio: ${this.getPrecio()}`;
	}
}

class CMoto extends CVehiculo{
	constructor(marca, modelo, cilindradas, precio){
		super(marca,modelo,precio);
		this.cilindradas = cilindradas;
	}

	getCilindradas(){
		return `${this.cilindradas}`
	}

	toString(){
		return `//Marca: ${this.getMarca()} //Modelo: ${this.getModelo()} //Cilindradas: ${this.getCilindradas()} //Precio: ${this.getPrecio()}`;
	}
}

var auto1 = new CAuto ("Peugeot", "206", "4", "200.000,00");
var moto1 = new CMoto ("Honda", "Titan", "125cc","60.000,00");
var auto2 = new CAuto ("Peugeot", "208", "5","250.000,00");
var moto2 = new CMoto ("Yamaha", "YBR", "160cc","80.500,50");

vehiculos = [];
vehiculos.push(auto1);
vehiculos.push(moto1);
vehiculos.push(auto2);
vehiculos.push(moto2);

// LISTADO

vehiculos.map(function(vehiculo) {
    console.log(vehiculo.toString());
});
console.log('=============================')

//ORDENAMIENTO DE MENOR A MAYOR
vehiculos.sort(function (a, b){
    return (parseFloat(a.precio, 10) - parseFloat(b.precio, 10))
})

const vehiculoMasCaro = 'Vehículo más caro: ' + vehiculos[3].marca + ' ' + vehiculos[3].modelo;
const vehiculoMasBarato = 'Vehículo más barato: ' + vehiculos[0].marca + ' ' + vehiculos[0].modelo;
let vehiculoY = 'Vehículo que contiene en el modelo la letra ‘Y’: '  ;

//BUSQUEDA DE LA Y

for (let i = 0; i < vehiculos.length; i++) {
	if (vehiculos[i].modelo.includes("Y")){
    vehiculoY += vehiculos[i].marca + ' ' + vehiculos[i].modelo + ' ' + vehiculos[i].precio;
	}
}

console.log(vehiculoMasCaro);
console.log(vehiculoMasBarato);
console.log(vehiculoY);
console.log('=============================')
console.log('Vehículos ordenados por precio de mayor a menor: ')

//ORDENAMIENTO DE MAYOR A MENOR
vehiculos.sort(function (a, b){
    return (parseFloat(b.precio, 10) - parseFloat(a.precio, 10))
})

vehiculos.map(function(vehiculo) {
    console.log(vehiculo.marca + " " + vehiculo.modelo);
});