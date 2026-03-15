const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

let score = 0
let shot = 0
let shooting = false

let ball = {
x:450,
y:380,
r:10,
vx:0,
vy:0
}

let keeper = {
x:450,
y:150,
dir:2,
jump:false,
targetX:450
}

let goal = {
x:320,
y:80,
w:260,
h:10
}

let targets = [
{x:340,y:100},
{x:450,y:100},
{x:560,y:100},
{x:340,y:150},
{x:560,y:150}
]

canvas.addEventListener("click",(e)=>{

if(shooting) return
if(shot>=5) return

let x=e.offsetX
let y=e.offsetY

for(let t of targets){

let d=Math.hypot(x-t.x,y-t.y)

if(d<25){
shootBall(t.x,t.y)
}

}

})

function shootBall(tx,ty){

shooting=true
shot++

document.getElementById("shot").innerText=shot

ball.vx=(tx-ball.x)*0.08
ball.vy=(ty-ball.y)*0.08

let guess=Math.random()

if(guess<0.6){
keeper.targetX=tx
}else{
keeper.targetX=goal.x+Math.random()*goal.w
}

keeper.jump=true

}

function drawField(){

ctx.fillStyle="#4caf50"
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.strokeStyle="white"
ctx.lineWidth=4
ctx.strokeRect(200,200,500,200)

}

function drawGoal(){

ctx.fillStyle="white"

ctx.fillRect(goal.x,goal.y,goal.w,8)
ctx.fillRect(goal.x,goal.y,8,70)
ctx.fillRect(goal.x+goal.w-8,goal.y,8,70)

ctx.strokeStyle="rgba(255,255,255,0.3)"

for(let i=0;i<goal.w;i+=20){

ctx.beginPath()
ctx.moveTo(goal.x+i,goal.y)
ctx.lineTo(goal.x+i,goal.y+70)
ctx.stroke()

}

}

function drawTargets(){

for(let t of targets){

ctx.beginPath()
ctx.arc(t.x,t.y,15,0,Math.PI*2)
ctx.strokeStyle="yellow"
ctx.lineWidth=2
ctx.stroke()

}

}

function drawKeeper(){

// kepala
ctx.fillStyle="#ffd6a5"
ctx.beginPath()
ctx.arc(keeper.x,keeper.y-35,12,0,Math.PI*2)
ctx.fill()

// badan
ctx.fillStyle="#2e7d32"
ctx.fillRect(keeper.x-12,keeper.y-30,24,35)

// tangan kiri
ctx.fillStyle="#ffd6a5"
ctx.fillRect(keeper.x-30,keeper.y-15,18,6)

// tangan kanan
ctx.fillRect(keeper.x+12,keeper.y-15,18,6)

// sarung tangan
ctx.fillStyle="orange"

ctx.beginPath()
ctx.arc(keeper.x-32,keeper.y-12,5,0,Math.PI*2)
ctx.fill()

ctx.beginPath()
ctx.arc(keeper.x+32,keeper.y-12,5,0,Math.PI*2)
ctx.fill()

// kaki
ctx.fillStyle="#1b5e20"
ctx.fillRect(keeper.x-10,keeper.y+5,8,18)
ctx.fillRect(keeper.x+2,keeper.y+5,8,18)

// sepatu
ctx.fillStyle="black"
ctx.fillRect(keeper.x-12,keeper.y+22,10,5)
ctx.fillRect(keeper.x+2,keeper.y+22,10,5)

}

function drawPlayer(){

let x=450
let y=420

// kepala
ctx.fillStyle="#ffd6a5"
ctx.beginPath()
ctx.arc(x,y-40,12,0,Math.PI*2)
ctx.fill()

// badan
ctx.fillStyle="#e53935"
ctx.fillRect(x-12,y-35,24,35)

// tangan kiri
ctx.fillStyle="#ffd6a5"
ctx.fillRect(x-28,y-25,16,6)

// tangan kanan
ctx.fillRect(x+12,y-25,16,6)

// kaki
ctx.fillStyle="#1565c0"
ctx.fillRect(x-10,y+5,8,20)
ctx.fillRect(x+2,y+5,8,20)

// sepatu
ctx.fillStyle="black"
ctx.fillRect(x-12,y+22,10,5)
ctx.fillRect(x+2,y+22,10,5)

}

function drawBall(){

ctx.fillStyle="white"

ctx.beginPath()
ctx.arc(ball.x,ball.y,ball.r,0,Math.PI*2)
ctx.fill()

ctx.strokeStyle="black"
ctx.lineWidth=2

ctx.beginPath()
ctx.arc(ball.x,ball.y,ball.r*0.6,0,Math.PI*2)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(ball.x,ball.y-5)
ctx.lineTo(ball.x+5,ball.y)
ctx.lineTo(ball.x+3,ball.y+5)
ctx.lineTo(ball.x-3,ball.y+5)
ctx.lineTo(ball.x-5,ball.y)
ctx.closePath()

ctx.fillStyle="black"
ctx.fill()

}

function update(){

ball.x+=ball.vx
ball.y+=ball.vy

ball.vx*=0.99
ball.vy*=0.99

if(!keeper.jump){

keeper.x+=keeper.dir

if(keeper.x>600 || keeper.x<300){
keeper.dir*=-1
}

}else{

keeper.x+=(keeper.targetX-keeper.x)*0.15

}

let d=Math.hypot(ball.x-keeper.x,ball.y-keeper.y)

if(d<25){
reset()
}

if(ball.y<goal.y+5 && ball.x>goal.x && ball.x<goal.x+goal.w){

score++
document.getElementById("score").innerText=score

reset()

}

if(ball.y<goal.y){
reset()
}

}

function reset(){

ball.x=450
ball.y=380
ball.vx=0
ball.vy=0

keeper.jump=false
shooting=false

}

function gameLoop(){

update()

drawField()
drawGoal()
drawTargets()
drawKeeper()
drawPlayer()
drawBall()

requestAnimationFrame(gameLoop)

}

gameLoop()
