const COLORS = [
  'rebeccapurple',
  'magenta',
  'lime',
  'violet',
  'red',
  'cyan',
  'yellow',
  'springgreen',
  'aqua',
  'orange',
  'crimson',
  'coral',
  'deeppink',
  'dodgerblue',
  'gold'
]

const ICONS = [
  '!',
  '"',
  '#',
  '$',
  '&',
  ')',
  '*',
  '/',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  ':',
  '?',
  '@',
  'B',
  'C',
  'A',
  'D',
  'E',
  'K',
  'L',
  'O',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '\\',
  ']',
  '^',
  '_',
  '`',
  'b',
  'e',
  'g',
  'i',
  'm',
  'n',
  'o',
  'u',
  'v',
  'z',
  'y',
  '{',
  '|',
  '~',
  'Ä',
  'I',
  'U'
]

const changeColorButton = document.getElementById('change-color')
const changeIconButton = document.getElementById('change-icon')
const changePatternButton = document.getElementById('change-pattern')

const icon = document.getElementById('icon')
const nametagHeader = document.getElementById('nametag__header')
const nametagFooter = document.getElementById('nametag__footer')

changeColorButton.addEventListener('click', changeColor)
changeIconButton.addEventListener('click', changeIcon)
changePatternButton.addEventListener('click', changePattern)

function changeIcon () {
  const maxIdx = ICONS.length - 1
  const idx = Math.floor(Math.random() * Math.floor(maxIdx))
  const newIcon = ICONS[idx]
  icon.innerText = newIcon
}

function changeColor () {
  const maxIdx = COLORS.length - 1
  const idx = Math.floor(Math.random() * Math.floor(maxIdx))
  const newColor = COLORS[idx]
  nametagHeader.style.background = newColor
  nametagFooter.style.background = newColor
}

function changePattern () {
  const newPattern = Math.floor(Math.random() * 36) + 1  
  document.body.style.background = 'url(/images/' + newPattern + '.gif)'
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('url').innerText = window.location
  document.getElementById('library-url').href = `beaker://library/${window.location}`

  // is this a Dat-supported website? If so, use a dat:// URL for the beakerbrowser.com link
  const beakerLink = document.getElementById('beaker-url')
  if (window.DatArchive) {
    beakerLink.href = 'dat://beakerbrowser.com'
  } else {
    beakerLink.href = 'https://beakerbrowser.com'
  }
})
