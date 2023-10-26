let numero = prompt("Introduce un número: ");
let divisibles = [];

if (numero % 2 == 0) {
    divisibles.push("2");
}
if (numero % 3 == 0) {
    divisibles.push("3");
}
if (numero % 5 == 0) {
    divisibles.push("5");
}
if (numero % 7 == 0) {
    divisibles.push("7");
}

if (divisibles.length > 0) {
    document.write(`<h1 class= "bg-black text-white mt-4 container text-center"> El <span class="text-danger" >${numero} </span> es divisible por ${divisibles.join(" y por ")}.</h1>`);
}
else {
    
    document.write(`<h1 class= "bg-black text-white mt-4 container text-center"> El  <span class="text-danger" > ${numero} </span> no es divisible por 2, 3, 5 ni 7. </h1>`);
};