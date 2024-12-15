
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
/* clase 13 after */
/*
let capturaTitulo = document.getElementById("titulo");
console.log(capturaTitulo);
console.log(capturaTitulo.textContent);
// alert(capturaTitulo.textContent);
var hola = "Hola jen";
var nombres = ["juan", "miguel"];
var apellidos = ["Perez", "Rodriguez"];
let estudiantes = {
    nombre: "juan",
    apellido: "Perez",
    edad: 30,
    estado: true,
}
console.log(hola);
console.log(nombres);
console.log(nombres[0]);
console.log(estudiantes);
console.log(estudiantes.apellido);

const persona = {
    nombre: "Jen",        // valor: cadena
    edad: 33,              // valor: número
    casado: false,         // valor: booleano
    habilidades: ["JS", "HTML", "CSS"], // valor: arreglo
    direccion: {           // valor: objeto anidado
        ciudad: "Buenos Aires",
        pais: "Argentina"
    },
    saludar: function () {  // valor: función (método)
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años, estoy aprendiendo ${this.habilidades[0]} y vivo en ${this.direccion.ciudad}, ${this.direccion.pais}.`;
    },
    cantar: function (cancion) {
        console.log("puedo cantar:", cancion)
    }
};
console.log(persona.saludar())
persona.saludar();
persona.cantar("lalala");
let items = document.getElementsByClassName("clases");
console.log(items);
console.log(items[2]);
// console.log(items[2].textContent);

for (let i = 0; i < items.length; i++) {
    const element = items[i];
    console.log(element.textContent);
    element.textContent = "hola";
    element.style.backgroundColor = "green";
}

let titulo = document.getElementById("titulo");
function rojo() {
    titulo.classList.add("rojo");
    console.log(titulo);  // agrega la clase .rojo
}
*/

// clase 14

// Listeners -- escuchadores (forma correcta de trabajar eventos)

let titulo = document.getElementById("titulo");
console.log(titulo);
// elemento.addEventListener("evento", "funcion");
titulo.addEventListener("click", function () {
    console.log("estoy escuchando algo ")
})
titulo.addEventListener("dblclick", function () {
    titulo.style.backgroundColor = "yellow"
})
let inputA = document.getElementById("inputA");
let inputB = document.getElementById("inputB");
let botonSumar = document.getElementById("sumar");
let resultado = document.getElementById("resultado");
//   botonSumar.addEventListener("click", function () {
//     let suma = Number(inputA.value) + Number(inputB.value);
//   resultado.textContent = suma;
// })
var numero = 0;
inputA.addEventListener("change", function () {
    numero++;
    resultado.textContent = numero;
    titulo.classList.add("rojo");
    console.log(numero);
})

// let nombre = "maria";
// let nombres = ["maria", "juan"];

// let nombreObjeto = {
//     // key: value
//     nombre: "alex",
//     apellido: "ubago",
//     edad: 29,
//     cantar: function () {
//         console.log("puedo cantar lalalalal ")
//     }
// }
// console.log(nombre)
// console.log(nombres[1])
// nombreObjeto.cantar();
let nombreUsuario = prompt("ingrese su nombre");
// local Storage
// localStorage.clear();
//                       key------------value
localStorage.setItem("usuarioTalento", nombreUsuario)
console.log(localStorage.getItem("usuarioTalento"));
let nombreVariable = localStorage.getItem("usuarioTalento");
let usuario = document.getElementById("usuario");
console.log(usuario);
usuario.textContent += nombreVariable;