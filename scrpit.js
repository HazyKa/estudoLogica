//cria um array que coloca 10 numeros aleaotios
//separar em outros 2 array os mutiplos de 3 e 5 
 
let todosNumeros = [];

function criarNumeros(){
    for(i = 0; i < 10; i++){
        todosNumeros.push(Math.floor(Math.random() * 100))
    }
    separarNumeros();
    console.log(todosNumeros)
}

let tres = [];
let cinco = [];
let nenhum = [];

function separarNumeros(){
    for(i = 0; i < 10; i++){
        if(todosNumeros[i] % 3 == 0){
            tres.push(todosNumeros[i]);
        } else if(todosNumeros[i] % 5 == 0){
            cinco.push(todosNumeros[i]);
        }else {
            nenhum.push(todosNumeros[i]);
        }
    }

    console.log("multiplos de tres: " + tres);
    console.log("multiplos de cinco: " + cinco);
    console.log("sobra: " + nenhum);
}

criarNumeros()
