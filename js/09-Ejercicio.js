let frase = prompt('Ingrese una frase');
console.log(frase.length);

for (let i = 0; i < frase.length; i++) {
    console.log(frase.charAt(i));
    if(frase.charAt(i) === 'a' || frase.charAt(i) === 'e' || frase.charAt(i) === 'i' || frase.charAt(i) === 'o'|| frase.charAt(i) === 'u'){
       // document.write(frase.charAt(i) + " ");
        document.write(` <span class= "bg-black text-white container ">  ${frase.charAt(i)} </span>`);
    }
};

