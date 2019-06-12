document.getElementById('click-button').addEventListener('click', function(event) {
  console.log('click event on button')
  // console.log('click event on button', event.target, this)

})

document.getElementById('parent-div').addEventListener('click', function(event) {
  // event.stopPropagation()
  console.log('click event on div')
  // console.log('click event on button', event.target, this)

})

document.getElementsByTagName('body')[0].addEventListener('click', function(event) {
  console.log('click event on body')
  // console.log('click event on button', event.target, this)
})
