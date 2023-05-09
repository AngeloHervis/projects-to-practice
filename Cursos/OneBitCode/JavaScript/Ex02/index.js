let nameCar1 = prompt("Qual o nome do 1° carro?");
let velCar1 = prompt("Qual a velocidade do 1° carro?");

let nameCar2 = prompt("Qual o nome do 2° carro?");
let velCar2 = prompt("Qual a velocidade do 2° carro?");

if (velCar1 > velCar2) {
    alert("o carro " + nameCar1 + " é mais rápido!!")
} 
else if (velCar1 < velCar2) {
        alert("o carro " + nameCar2 + " é mais rápido!!")
}
else{
    alert("A velocidade de ambos os carros é igual!!")
}
