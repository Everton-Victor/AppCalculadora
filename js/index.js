var nome = prompt("Digite seu nome");
var altura = parseFloat(prompt("Digite sua altura"));
var peso = parseFloat(prompt("Digite seu peso"));

var imc = peso / altura**2;
var resp = null;

if(imc < 16) {
    resp = "Baixo peso muito grave"
}else if(imc < 17){
    resp = "Baixo peso grave"
}else if(imc < 18.5) {
    resp = "Baixo peso"
}else if(imc < 25) {
    resp = "Peso normal "
}else if(imc < 30) {
    resp = "Sobrepeso"
}else if(imc < 35) {
    resp = "Obesidade grau I"
}else if(imc < 40) {
    resp = "Obesidade grau II"
}else if(imc >= 40) {
    resp = "Obesidade grau III"
}else {
    resp = undefined;
}

imc = parseInt(imc);
if(resp != undefined) {
    document.getElementById('result').innerHTML = ("<h2>" + nome + " possui índice de massa corporal igual a " + imc + "  kg/m², sendo classificado como: " + resp + "</h2>");
}else {
    document.getElementById('result').innerHTML = "<h2>Valor digitado inválido</h2>";
}

