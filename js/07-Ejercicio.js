let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");
let num3 = prompt("Ingrese el tercer número:");

let mayor = num1;

if (num2 > mayor) {
    mayor = num2;
}

if (num3 > mayor) {
    mayor = num3;
}



document.write(`<h1 class= "bg-black text-white mt-4 container text-center"> El  <span class="text-danger" > ${mayor} </span> es el numero mas grande </h1>`);