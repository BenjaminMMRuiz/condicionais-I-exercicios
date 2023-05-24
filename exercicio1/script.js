//# Exercício 1

//Crie uma função que receba uma const numérica qualquer. 
//Crie um `if` para verificar se o número guardado na const é **par**. 
//Caso seja, a função deve retornar a mensagem: "o número é par". 
//Depois disso, imprima o retorno no console.


let numeroPar =(numero) =>{
    if(numero %2 === 0){
        return('Numero e par:')

    }else{
        return('Numero e impar')
    }
}


console.log(numeroPar(2))