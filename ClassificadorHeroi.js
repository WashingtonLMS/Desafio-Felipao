const hero = "Merlin"

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
let xp = randint(1, 13000);
const classificacao = ('O herói ' + hero + ' está no nível de ') 

switch (true) {
    case xp <= 1000:
    console.log(classificacao +'Ferro')
    break
    
    case xp <= 2000:
    console.log(classificacao + 'Bronze')
    break

    case xp <= 5000:
    console.log(classificacao + 'Prata')
    break

    case xp <= 8000:
    console.log(classificacao + 'Ouro')
    break

    case xp <= 9000:
    console.log(classificacao + 'Ascendente')
    break

    case xp <= 10000:
    console.log(classificacao + 'Imortal')
    break

    case xp >= 10001:
    console.log(classificacao + 'Radiante') 
} 



