// # Exercício 1

// Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
const parOuNao =() => {
    numero = Number(prompt("Digite um número"))
    if (numero%2 == 0 || numero % 3 == 0) {
        console.log("O número é divisível por 2 ou 3")
    }
}
    
// 2. Utilizando um operador lógico para unir duas operações relacionais
// ```jsx
//     if(expressao && expressao){ //&& para E
//     //expressao || expressao para OU     
    
//     }
// ```

parOuNao()