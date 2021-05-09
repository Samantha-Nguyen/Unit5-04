document.getElementById('change-image').addEventListener('click', image)

document.getElementById('change-text').addEventListener('click', text)

document.getElementById('hide').addEventListener('click', hide)

document.getElementById('show').addEventListener('click', show)

document.getElementById('background-color').addEventListener('click', background)

function image () {
  document.getElementById('img1').src = './images/kaguya-2.png'
}

function text () {
  document.getElementById('text').innerHTML = 'How cute'
  document.getElementById('text').style.color = '#fff'
}

function hide () {
  document.getElementById('text').style.display = 'none'
}

function show () {
  document.getElementById('text').style.display = 'block'
}

function background () {
  document.body.style.backgroundColor = '	#0d1426'
}
