let msg = 'Your Correct Ranking is '

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function ranking(victory, defeat, match) {
  let rank = victory - defeat
  let victoryValue = victory
  let defeatValue = defeat

  console.log('match: ' + match)
  console.log('Total Number of Wins: ' + victoryValue)
  console.log('Total Number of Defeats: ' + defeatValue)

  switch (true) {
    case rank <= 10:
      console.log(msg + ' Iron')
      break
    case rank <= 20:
      console.log(msg + ' Bronze')
      break
    case rank <= 50:
      console.log(msg + ' Silver')
      break
    case rank <= 80:
      console.log(msg + ' Gold')
      break
    case rank <= 90:
      console.log(msg + ' Diamond')
      break
    case rank <= 100:
      console.log(msg + ' Legendary')
      break
    default:
      console.log(msg + ' Immortal')
  }
}

let victories = 0
let defeats = 0
let rankingHistory = []

for (let i = 0; i < 200; i++) {
  let result = Math.random() < 0.70 ? 'victory' : 'defeat'
  
  if (result === 'victory') {
    victories++
  } else {
    defeats++
  }
  
  ranking(victories, defeats, i + 1)
  
  rankingHistory.push({
    partida: i + 1,
    resultado: result,
    vitorias: victories,
    derrotas: defeats
  })
  
  console.log('------------------------')
}
let winPercentage = (victories / (victories + defeats)) * 100
console.log('Win Percentage: ' + winPercentage.toFixed(2) + '%')
