//Ejercicio 2: variables y tipos de datos
let nombreProducto1 = "Telefono";
let precioProducto1 = 300;
let disponibleProducto1 = true;

let nombreProducto2 = "Laptop HP";
let precioProducto2 = 650;
let disponibleProducto2 = false;

console.log("Producto 1:", nombreProducto1, precioProducto1, disponibleProducto1);
console.log("Producto 2:", nombreProducto2, precioProducto2, disponibleProducto2);

//Ejercicio 3: operadores
let precio = 650;
let descuento = precio * 0.15;
let precioFinal = precio - descuento;

console.log("Precio original: $" + precio);
console.log("Dinero ahorrado: $" + descuento);
console.log("Precio final: $" + precioFinal);

//Ejercicio 4: estructuras de control
function clasificarEdad(edad) {
  if (edad < 18) {
    console.log("Menor de edad");
  } else if (edad <= 65) {
    console.log("Adulto");
  } else {
    console.log("Adulto mayor");
  }
}

clasificarEdad(15);
clasificarEdad(30);
clasificarEdad(70);