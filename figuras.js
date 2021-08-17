//Código del Cuadrado

//Perimetro del cuadrado
function PerimetroCuadrado(){
    const entrada=document.getElementById("inputCuadrado");
    const lado=Number(entrada.value);
    const perimetro=lado*4;
    alert(`Los lados del cuadrado miden: ${lado} cm y su perimetro es: ${perimetro}`);
}

//Area del cuadrado
function areaCuadrado(){
    const entrada=document.getElementById("inputCuadrado");
    const lado=Number(entrada.value);
    const area=lado*lado;
    alert(`Los lados del cuadrado miden: ${lado} cm y su area es de: ${area}`);
}

//Código del Triangulo

//Perimetro del triangulo
function perimetroTriangulo(){
    const entrada1=document.getElementById("lado1");
    const entrada2=document.getElementById("lado2");
    const entrada3=document.getElementById("base");
    const lado1=Number(entrada1.value);
    const lado2=Number(entrada2.value);
    const base=Number(entrada3.value);
    const perimetro=lado1+lado2+base;
    alert(`Los lados del triangulo miden: ${lado1} cm, ${lado2} cm , ${base} cm  y su perimetro es: ${perimetro}`);
}

//Area del triangulo
function areaTriangulo(){
    const entrada1=document.getElementById("base");
    const entrada2=document.getElementById("altura");
    const base=Number(entrada1.value);
    const altura=Number(entrada2.value);
    const area= (base * altura)/2;
    alert(`La base del triangulo mide: ${base} cm con una altura de: ${altura} y una area de ${area}`);
}


//Diametro
function diametroCirculo(radio){
    return radio * 2;
} 

// PI
const PI = Math.PI;

// Perimetro
function perimetroCirculo(){
    const entrada1=document.getElementById("radio");
    const radio=Number(entrada1.value);
    let diametro =diametroCirculo(radio);
    const perimetro =diametro*PI;
    alert(`El area del circulo es: ${radio} y su perimetro es: ${perimetro}`);
} 

//Area
function areaCirculo(){
    const entrada1=document.getElementById("radio");
    const radio=Number(entrada1.value);
    const area= PI * (radio * radio)
    alert(`El area del circulo es: ${radio} y su area es: ${area}`);
}

//Calcular la altura de un triángulo isósceles.

/* 
1- La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
2- La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
3- La función debe retornar la altura del triángulo.
*/

function alturaTriangulo(lado1,lado2,lado3){
    if (lado1 != lado2) {
        console.error("Los lados a y b no son iguales");
    }
    else{
        const base=lado3/2;
        const altura=Math.sqrt(Math.pow(lado1,2)-Math.pow(base,2));
        alert(`La altura del triangulo es: ${altura}`)
    }
}
