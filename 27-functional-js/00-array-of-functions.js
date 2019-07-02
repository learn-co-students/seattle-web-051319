let eat = () => {
  console.log('yum captain crunch!')
}

let contemplate = () => {
  console.log('stare at mirror')
}

let dread = () => {
  console.log('ponder existeance')
}

let commute = () => {
  console.log('driving')
}

let actions = [eat, contemplate, dread, commute]
let done = 0
while (done < 4) {
  let choice = Math.floor(actions.length * Math.random())
  let action = actions[choice]
  action()
  done++
}