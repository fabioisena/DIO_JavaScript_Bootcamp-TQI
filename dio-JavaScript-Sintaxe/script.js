/* Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20". */


function receberNumero() {
    valor1 = Number(prompt('insira o primeiro valor'));
    valor2 = Number(prompt('insira o segundo valor'));  
}

receberNumero();

resultado = valor1 + valor2;
console.log(resultado);

//***************SOLUÇÃO UTILIZANDO IF***************** */
if (valor1==valor2) {
    mensagem1 = "Os números num1 e num2 são iguais. Sua soma é ";
}else{
    mensagem1 = "Os números num1 e num2 NÃO são iguais. Sua soma é ";
}

if (resultado < 10){
    mensagem2 =  resultado + ", que é menor que 10";
}
if (resultado == 10){
    mensagem2 = "exatamente 10";
}
if (resultado > 10 && resultado < 20){
    mensagem2 = resultado + ", que é maior que 10 e menor que 20";
}
if (resultado == 20){
    mensagem2 = "exatamente 20 ";
}
if (resultado > 20){
    mensagem2 = resultado + ", que é maior que 20";
} 

/* console.log (resultado);
console.log (mensagem2);
 */

alert(mensagem1 + mensagem2);
