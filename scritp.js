// Variáveis
/* Tipos de dados
    number - let numero = 1256889
    string - let texto = "o que você quiser"
    objeto - let pessoa = {nome: "amanda", idade: 32}
    matriz - let pessoas = ["amanda", "lari", "keli", "solange"]
    bool - let bool = false 

    Estrutura de Controle (Pai das IA's)
    if - Se tiver saldo - tranfere
    else - Se NÃO - Não transfere / mensagem de erro

    Funcoes - É um pedaco de codigo que so executa quando é chamado


*/

/* Converter Dólar para Real

[x] Saber quando o botao é clicado
[x] Pegar o valor digitado pelo usuario
[x] Conversão do valor
[] Colocar o valor convertido na tela
*/

function converter() {
  let resultado = document.getElementById("resultado");
  let valorDolar = document.getElementById("valor").value;
  let dolarDoDia = 6;

  let valorReal = valorDolar * dolarDoDia;

  resultado.innerHTML = "R$" + valorReal + ",00";
  console.log(valorReal);
}
