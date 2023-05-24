//# Exercício 3

//Crie uma função que recebe do usuário sua nacionalidade, 
//utilizando um **prompt** com a seguinte mensagem: 
//"Escreva aqui sua nacionalidade." e guarde o valor da resposta em uma const `nacionalidade`.


//Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
//- brasileira;
//- argentina;
//- uruguaia;
//- chilena;
//- colombiana;

//Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhuma das possibilidades acima.

//> 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 

const origem = nacionalidade

function nacionalidade(){
    let nacionalidade = prompt ('Escreva aqui sua nacionalidade:').toLocaleLowerCase()

    if (nacionalidade === 'brasileira'){
        return('Você é Brasileiro(a)')

    } else if  (nacionalidade === 'argentina') {
        return('Você é Argentino(a)')

    } else if (nacionalidade === 'uruguaia'){
        return('Você é Urugaiano(a)')

    } else if (nacionalidade === 'chilena'){
        return('Você é Chileno(a)')

    } else if (nacionalidade === 'colombiana'){
        return('Você é Colombiano(a)')
    } else {
        return('Nacionalidade não localizada')
    }
}

console.log (origem(nacionalidade))