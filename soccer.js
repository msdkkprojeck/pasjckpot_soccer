document.addEventListener("DOMContentLoaded",function(){

const ball=document.getElementById("ball")
const keeper=document.getElementById("keeper")
const leg=document.getElementById("kickLeg")
const result=document.getElementById("result")

let startX,startY

document.addEventListener("mousedown",(e)=>{
startX=e.clientX
startY=e.clientY
})

document.addEventListener("mouseup",(e)=>{

let dx=e.clientX-startX
let dy=startY-e.clientY

kickBall(dx,dy)

})

function kickBall(dx,dy){

leg.classList.add("kick")

setTimeout(()=>{
leg.classList.remove("kick")
},200)

let x=290
let y=80
let vx=dx*0.15
let vy=-Math.abs(dy*0.25)

let gravity=0.25

let interval=setInterval(()=>{

x+=vx
y+=vy
vy+=gravity

ball.style.left=x+"px"
ball.style.bottom=y+"px"

if(y>300){

clearInterval(interval)
checkGoal(x)

}

},20)

}

function checkGoal(ballX){

let chance=Math.random()

if(chance<0.2){

result.innerHTML="GOAL ⚽"

}else{

moveKeeper()

setTimeout(()=>{
result.innerHTML="SAVE 🧤"
},200)

}

setTimeout(resetBall,2000)

}

function moveKeeper(){

let pos=[220,260,300]

keeper.style.left=pos[Math.floor(Math.random()*pos.length)]+"px"

}

function resetBall(){

ball.style.bottom="80px"
ball.style.left="290px"

result.innerHTML=""

}

})
