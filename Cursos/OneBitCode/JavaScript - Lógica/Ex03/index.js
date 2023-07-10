let atacante = prompt("Qual o nome do 1° Jogador?");
let poderDeAtaque = prompt("Qual o poder de Ataque do 1° Jogador?");

let defensor = prompt("Qual o nome do 2° Jogador?");
let poderDeDefesa = prompt("Qual o poder de Defesa do 2° Jogador?");
let pontosDeVida = prompt("Quantos pontos de vida tem 2° Jogador?");
let possuiEscudo = prompt("O personagem tem escudo? (Responda com Sim ou Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}
pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" + 
    defensor + "\nPontos de vida: " + pontosDeVida +
    "\n Poder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)