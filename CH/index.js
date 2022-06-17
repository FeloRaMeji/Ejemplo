
/*const Producto1 = {
    nombre: 'Piña',
    categoria: 'Fruta',
    precio: 2000
}
const Producto2 = {
    nombre: 'Piña',
    categoria: 'Fruta',
    precio: 2000,
    temporada: {
        Q1: 'feb - mar',
        Q2: 'junio',
        Q3: 'N/A',
        Q4: 'oct - dic'
    }
}
console.log(Producto2)
console.table(Producto2.temporada)
console.warn(`${Producto2.temporada.Q1}| - |${Producto2.temporada.Q3}`)
*/
const autos = [
	{id: 1, titulo: 'Fiat', precio:180000,  stock:5, descuento:20},
	{id: 2, titulo: 'Renault', precio:200000,  stock:7, descuento:30},
	{id: 3, titulo: 'Ford', precio:300000,  stock:10, descuento:30},
	{id: 4, titulo: 'Chevrolet', precio:400000,  stock:15, descuento:20},
	{id: 5, titulo: 'Toyota', precio:1000000,  stock:6, descuento:20},
	{id: 6, titulo: 'Mitsubishi', precio:600000,  stock:7, descuento:10},
	{id: 7, titulo: 'Nissan', precio:300000,  stock:8, descuento:15},
	{id: 8, titulo: 'Volvo', precio:400000,  stock:20, descuento:20},
]

console.table(autos)
console.log('******** sort ascentente por precio ********');
autos.sort((a, b) => a.precio - b.precio); //orden ascentente por precio
console.table(autos)
console.log('******** sort ascentente por stock ********');
autos.sort((a, b) => b.stock - a.stock); //orden ascentente segun stock
console.table(autos)