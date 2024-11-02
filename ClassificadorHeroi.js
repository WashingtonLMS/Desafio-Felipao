const hero = "Merlin"
function randint(max, min){
    return Math.floor(Math.random() * (max - min + 1) +min)
} 
let xp = randint(0, 13000)
let elo = 'o Herói '+ hero + ' Está no Elo'

switch (true) {
    case xp <= 1000:
        console.log(elo + ' Bronze com a xp total de ' + xp)
        break
    case xp <= 2000:
        console.log(elo + ' Prata com a xp total de ' + xp)
        break
    case xp <= 3000:
        console.log(elo + ' Ouro com a xp total de ' + xp)
        break
    case xp <= 5000:
        console.log(elo + ' Ascendente com a xp total de ' + xp)
        break
    case xp <= 8000:
        console.log(elo + ' Imortal com a xp total de ' + xp)
        break
    case xp >= 10001:
        console.log(elo + ' Radiante com a xp total de ' + xp)
        break
}
