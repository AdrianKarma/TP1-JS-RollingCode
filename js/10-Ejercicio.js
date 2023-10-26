let num = prompt("Ingrese un número:");

if (num % 2 == 0) {
    document.write(`<h1 class= "bg-black text-white mt-4 container text-center"> El  <span class="text-danger" > ${num} </span>  es divisible por 2 </h1>`);
} else if (num % 3 == 0) {
    document.write(`<h1 class= "bg-black text-white mt-4 container text-center"> El  <span class="text-danger" > ${num} </span>  es divisible por 3 </h1>`);
} else if (num % 5 == 0) {
    document.write(`<h1 class= "bg-black text-white mt-4 container text-center"> El  <span class="text-danger" > ${num} </span>  es divisible por 5 </h1>`);
} else if (num % 7 == 0) {
  
    document.write(`<h1 class= "bg-black text-white mt-4 container text-center"> El  <span class="text-danger" > ${num} </span>  es divisible por 7 </h1>`);
} else {
    
    document.write(`<h1 class= "bg-black text-white mt-4 container text-center"> El  <span class="text-danger" > ${num} </span> no es divisible por 2, 3, 5 ni 7. </h1>`);
}