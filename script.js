const canvas = document.querySelector('#canvas')
const decrease = document.querySelector('#decrease')
const sizeView = document.querySelector('#size')
const increase = document.querySelector('#increase')
const colorInput = document.querySelector('#color')
const clear = document.querySelector('#clear')

const ctx = canvas.getContext('2d')
let size = 20
let color = '#000'
let x
let y
let isPressed = false

canvas.addEventListener('mousedown', (e) => {
  isPressed = true
  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener('mouseup', () => {
  isPressed = false
  x = undefined
  y = undefined
})

canvas.addEventListener('mouseout', () => {
  isPressed = false
  x = undefined
  y = undefined
})

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY
    drawLine(x, y, x2, y2)
    x = x2
    y = y2
  }
})

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.stroke()
}

decrease.addEventListener('click', () => {
  if (size <= 5) return
  size -= 5
  sizeView.innerText = size
})

increase.addEventListener('click', () => {
  if (size >= 50) return
  size += 5
  sizeView.innerText = size
})

colorInput.addEventListener('change', () => {
  color = colorInput.value
})

clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})

window.addEventListener('resize',() => {
    if(window.innerWidth < 400 || window.innerHeight < 400){
        canvas.width = 300
        canvas.height = 300
    }else if(window.innerWidth < 600 || window.innerHeight < 600)
    {
        canvas.width = 400
        canvas.height = 400
    }else if(window.innerWidth < 800 || window.innerHeight < 800)
    {
        canvas.width = 600
        canvas.height = 600
    }else{
        canvas.width = 800
        canvas.height = 800
    }
})