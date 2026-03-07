const ball = document.getElementById("ball")
const keeper = document.getElementById("goalkeeper")
const result = document.getElementById("result")

let startX = 0
let startY = 0

document.addEventListener("touchstart",(e)=>{

startX = e.touches[0].clientX
startY = e.touches[0].clientY

})

document.addEventListener("touchend",(e)=>{

let endX = e.changedTouches[0].clientX
let endY = e.changedTouches[0].clientY

let deltaX = endX - startX
let deltaY = startY - endY

kickBall(deltaX,deltaY)

})

function kickBall(x,y){

/* kekuatan swipe */
let power = Math.sqrt(x*x + y*y)

if(power < 30) return

/* arah horizontal */
let direction = x / 5

/* posisi target bola */
let targetLeft = 50 + direction

if(targetLeft < 5) targetLeft = 5
if(targetLeft > 95) targetLeft = 95

ball.style.transition="0.6s"

ball.style.bottom="260px"
ball.style.left=targetLeft+"%"

/* peluang gol */

let chance = Math.random()

if(chance <= 0.2){

setTimeout(()=>{
result.innerHTML="GOAL ⚽🔥"
},500)

}
else{

moveKeeper()

setTimeout(()=>{
result.innerHTML="DITANGKAP KIPER 🧤"
},400)

}

setTimeout(resetBall,2000)

}

function moveKeeper(){

let pos = ["20%","40%","60%","80%"]

let random = pos[Math.floor(Math.random()*pos.length)]

keeper.style.left=random

}

function resetBall(){

ball.style.bottom="20px"
ball.style.left="50%"
result.innerHTML=""

}
