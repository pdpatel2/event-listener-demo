// demo event propogation by clicking on different parts
// demo event.stopPropogation()
// demo this context and event.target and how they switch as event bubbles up
// demo changing regular function to arrow function and how that affects the this context

document.getElementById('click-button').addEventListener('click', function(event) {
  console.log('click event on button')
})

document.getElementById('parent-div').addEventListener('click', function(event) {
  console.log('click event on div')
})

document.getElementsByTagName('body')[0].addEventListener('click', function(event) {
  console.log('click event on body')
})
