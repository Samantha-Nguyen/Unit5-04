document.getElementById('change-image').addEventListener('click', image)

document.getElementById('change-text').addEventListener('click', text)

document.getElementById('hide').addEventListener('click', hide)

document.getElementById('show').addEventListener('click', show)

document.getElementById('background-color').addEventListener('click', background)

// This makes the first button change to the second image added in the images file
function image () {
  document.getElementById('img1').src = './images/kaguya-2.png'
}

// This makes the second button change the text and color of the paragraph "O Kawaii"
function text () {
  document.getElementById('text').innerHTML = 'How cute'
  document.getElementById('text').style.color = '#fff'
}

// This button is used to hide the text
function hide () {
  document.getElementById('text').style.display = 'none'
}

// This button makes the text reappear
function show () {
  document.getElementById('text').style.display = 'block'
}

// This button changes the background
function background () {
  document.body.style.backgroundColor = '#0d1426'
}
