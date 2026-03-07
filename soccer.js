const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

canvas.width = 600
canvas.height = 400

const result = document.getElementById("result")

/* bola */

let ball = {
x:300,
y:320,
vx:0,
vy:0,
moving:false
}

/* kiper */

let keeper = {
x:260,
y:120,
width:80,
height:20
}

/* swipe */

let startX = 0
let startY = 0

canvas.addEventListener("touchstart",(e)=>{

startX = e.touches[0].clientX
startY = e.touches[0].clientY

})

canvas.addEventListener("touchend",(e)=>{

let endX = e.changedTouches[0].clientX
let endY = e.changedTouches[0].clientY

let dx = endX - startX
let dy = startY - endY

kickBall(dx,dy)

})

/* tendang */

function kickBall(dx,dy){

if(ball.moving) return

ball.vx = dx * 0.15
ball.vy = -Math.abs(dy * 0.25)

ball.moving = true

let chance = Math.random()

if(chance <= 0.2){

setTimeout(()=>{
result.innerHTML="GOAL ⚽"
},700)

}else{

moveKeeper()

setTimeout(()=>{
result.innerHTML="SAVE 🧤"
},700)

}

setTimeout(resetBall,2000)

}

/* gerak kiper */

function moveKeeper(){

let pos = [180,260,340]

keeper.x = pos[Math.floor(Math.random()*pos.length)]

}

/* reset */

function resetBall(){

ball.x=300
ball.y=320
ball.vx=0
ball.vy=0
ball.moving=false

result.innerHTML=""

}

/* physics */

function update(){

if(ball.moving){

ball.x += ball.vx
ball.y += ball.vy

ball.vy += 0.2

}

}

/* render */

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

/* gawang */

ctx.strokeStyle="white"
ctx.lineWidth=4
ctx.strokeRect(200,80,200,80)

/* kiper */

ctx.fillStyle="yellow"
ctx.fillRect(keeper.x,120,keeper.width,keeper.height)

/* bola */

ctx.beginPath()
ctx.arc(ball.x,ball.y,10,0,Math.PI*2)
ctx.fillStyle="white"
ctx.fill()

}

/* game loop */

function gameLoop(){

update()
draw()

requestAnimationFrame(gameLoop)

}

gameLoop()
