const ball = document.getElementById("ball")
const keeper = document.getElementById("keeper")
const result = document.getElementById("result")

let startX,startY

document.addEventListener("mousedown",(e)=>{

startX = e.clientX
startY = e.clientY

})

document.addEventListener("mouseup",(e)=>{

let dx = e.clientX - startX
let dy = startY - e.clientY

kickBall(dx,dy)

})

function kickBall(dx,dy){

ball.style.bottom="300px"

let target = 280 + dx

if(target < 200) target = 200
if(target > 360) target = 360

ball.style.left = target+"px"

let chance = Math.random()

if(chance <= 0.2){

result.innerHTML="GOAL ⚽"

}else{

moveKeeper()

setTimeout(()=>{
result.innerHTML="SAVE 🧤"
},300)

}

setTimeout(resetBall,2000)

}

function moveKeeper(){

let pos=[220,260,300]

keeper.style.left=pos[Math.floor(Math.random()*pos.length)]+"px"

}

function resetBall(){

ball.style.bottom="70px"
ball.style.left="280px"

result.innerHTML=""

}
