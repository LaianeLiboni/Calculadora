functioncalcular() {
var operacao= document.getElementById("operacao").value;
var num1 = document.getElementById('num1').value;
var num2 = document.getElementById('num1').value;

if (num1 == "" || num1 == null) {
alert("Por favor digite um número!");
} 
if (num2 == "" || num2 == null) {
alert("Por favor digite um número!");
} 
var number1 = Number(num1);
var number2 = Number(num2);

var resultado = null;

if(option.value == 1) {
resultado.value = number1 + number2;
}else if(option.value == 2) {
resultado.value = number1 - number2;
}else if(option.value == 3) {
resultado.value = number1 * number2;
}else if(option.value == 4) {
resultado.value = number1 / number2;
}else {
alert("Selecione uma operação.");

document.getElementById("resultado").value = resultado;

}