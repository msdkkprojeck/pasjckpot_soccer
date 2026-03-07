const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

canvas.width = 600
canvas.height = 350

const result = document.getElementById("result")

/* gambar */

const player = new Image()
player.src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"

const ballImg = new Image()
ballImg.src="https://cdn-icons-png.flaticon.com/512/53/53283.png"

const keeperImg = new Image()
keeperImg.src="https://cdn-icons-png.flaticon.com/512/149/149071.png"

const goalImg = new Image()
goalImg.src="https://cdn-icons-png.flaticon.com/512/861/861512.png"

/* posisi */

let ball = {
x:200,
y:260,
vx:0,
vy:0,
moving:false
}

let keeper = {
x:280,
y:140
}

/* swipe */

let startX=0
let startY=0

canvas.addEventListener("touchstart",(e)=>{

startX = e.touches[0].clientX
startY = e.touches[0].clientY

})

canvas.addEventListener("touchend",(e)=>{

let endX = e.changedTouches[0].clientX
let endY = e.changedTouches[0].clientY

let dx = endX - startX
let dy = startY - endY

kick(dx,dy)

})

/* tendang */

function kick(dx,dy){

if(ball.moving) return

ball.vx = dx * 0.15
ball.vy = -Math.abs(dy * 0.2)

ball.moving = true

let chance = Math.random()

if(chance <= 0.2){

setTimeout(()=>{

result.innerHTML="GOAL ⚽🔥"

},800)

}
else{

moveKeeper()

setTimeout(()=>{

result.innerHTML="DITANGKAP KIPER 🧤"

},800)

}

setTimeout(resetBall,2000)

}

/* gerak kiper */

function moveKeeper(){

let pos = [200,280,360]

keeper.x = pos[Math.floor(Math.random()*pos.length)]

}

/* reset */

function resetBall(){

ball.x=200
ball.y=260
ball.vx=0
ball.vy=0
ball.moving=false

result.innerHTML=""

}

/* update physics */

function update(){

if(ball.moving){

ball.x += ball.vx
ball.y += ball.vy

ball.vy += 0.15

}

}

/* render */

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

/* gawang */

ctx.drawImage(goalImg,180,80,240,120)

/* kiper */

ctx.drawImage(keeperImg,keeper.x,130,60,60)

/* player */

ctx.drawImage(player,120,200,90,120)

/* bola */

ctx.drawImage(ballImg,ball.x,ball.y,30,30)

}

/* game loop */

function gameLoop(){

update()
draw()

requestAnimationFrame(gameLoop)

}

gameLoop()
