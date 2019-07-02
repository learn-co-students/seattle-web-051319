let click = () => {
  console.log('click')
}

let bang = () => {
  console.log('BANG!')
}


// assume we will execute click
// unless a 1/6 chance to do bang
let action = click
if (Math.random() < 1 / 6) {
  action = bang
}
action()