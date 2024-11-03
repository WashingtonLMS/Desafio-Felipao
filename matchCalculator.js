let msg = 'Your Correct Ranking is '

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function ranking(victory, defeat) {
  let rank = victory - defeat

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
ranking(random(1,150),random(1,150))