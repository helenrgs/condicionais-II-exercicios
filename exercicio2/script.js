
// Vamos recriar o exercício Nacionalidade da aula de condicionais I, utilizando switch-case. 

// -> Relembrando o enunciado.

// Crie uma função que receba do usuário sua nacionalidade, utilize um prompt que diga: 
const diversaoNacionalidade = (nacionalidade) => {
    nacionalidade = (prompt("Qual a sua nacionalidade?")).toLowerCase()

    switch (nacionalidade){
        case 'brasileira':
            console.log(`Você é ${nacionalidade}`)
            break;
        case 'argentina':
            console.log(`Você é ${nacionalidade}`)
            break
        case 'uruguaia':
            console.log(`Você é ${nacionalidade}`)
            break
        case 'chilena':
            console.log(`Você é ${nacionalidade}`)
            break
        case 'colombiana':
            console.log(`Você é ${nacionalidade}`)
            break
        default:
            console.log('nacionalidade não encontrada')
    }
}
//"Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const nacionalidade.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:

// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura com o switch-case que verifique se a nacionalidade guardada na const nacionalidade, 
//é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. 
//O programa deve imprimir "nacionalidade não encontrada" 
//caso o valor de nacionalidade não corresponda a nenhum dos valores.


diversaoNacionalidade()