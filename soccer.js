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

let diffX = endX - startX
let diffY = startY - endY

kickBall(diffX,diffY)

})

function kickBall(x,y){

ball.style.bottom = "250px"

if(x < -50){
ball.style.left = "25%"
}
else if(x > 50){
ball.style.left = "75%"
}
else{
ball.style.left = "50%"
}

/* sistem keeper */

let chance = Math.random()

if(chance <= 0.2){

result.innerHTML="GOAL ⚽🔥"

}
else{

moveKeeper()

setTimeout(()=>{
result.innerHTML="DITANGKAP KIPER 🧤"
},300)

}

setTimeout(resetBall,2000)

}

function moveKeeper(){

let pos = ["30%","50%","70%"]

let random = pos[Math.floor(Math.random()*pos.length)]

keeper.style.left=random

}

function resetBall(){

ball.style.bottom="20px"
ball.style.left="50%"
result.innerHTML=""

}
