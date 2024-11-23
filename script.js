
let nombre = prompt("Ingrese su Nombre");
let edad = prompt("ingrese su edad");
edad = parseInt(edad);
// if (isNaN(edad)) {
//     alert("no es un numero");
// }
// let mayor = `${nombre}  es mayor de edad y tiene ${edad} años`;
let menor = nombre.concat(" no es mayor de edad, tiene ", edad, " años.");



let mayor = [nombre, "es mayor de edad y tiene", edad, "años"];
let mensaje = mayor.join(" ");


if (edad >= 18) {
    console.log(mensaje);
} else {
    console.log(menor);
}