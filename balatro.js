let qtdNotas, i = 0, nota, somaNotas = 0, media;
let nome = "", acumulaNome = ""

function calcularNota(){
qtdNotas = parseInt(prompt("Digite a Quantidade de Notas: "))
while(i<qtdNotas){
nota = parseFloat(prompt("Digite uma nota: "))
somaNotas += nota
i++
}
media = somaNotas/qtdNotas
document.getElementById("resposta").innerHTML = `A sua média é ${media.toFixed(1)}`
}

function algunsnomes(){
while (nome != 'SAIR'){
    nome = prompt('Digite um Nome ou SAIR:').toUpperCase()
    acumulaNome += nome + ', '
    document.getElementById("acumulaNome").innerHTML = `Os nomes digitados foram: ${acumulaNome}`}
}