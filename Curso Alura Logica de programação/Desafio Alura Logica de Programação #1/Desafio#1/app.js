alert("Boas vindas ao nosso site");
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos";

let chuteNome = prompt("Qual o seu nome?");
let chuteIdade = prompt("Qual a sua idade?");

if (chuteIdade >= 18 ){
    alert("Pode tirar a habilitação");
}