let num = prompt("Ingrese un número:");

if (num % 2 == 0) {
    document.write(`<h1 class= "bg-black text-white mt-4 container text-center"> El número <span class="text-danger" > ${num} </span> ES divisible por 2 </h1>`)
} else {
   
    document.write(`<h1 class= "bg-black text-white mt-4 container text-center"> El número <span class="text-danger" > ${num} </span> NO es divisible por 2 </h1>`);
}