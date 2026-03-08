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

kickBall(dx)

})

function kickBall(dx){

leg.classList.add("kick")
ball.classList.add("spin")

setTimeout(()=>{

leg.classList.remove("kick")

},200)

ball.style.bottom="300px"

let target=290+dx

if(target<200)target=200
if(target>380)target=380

ball.style.left=target+"px"

let chance=Math.random()

if(chance<0.2){

result.innerHTML="TEDDY MENCETAK GOAL"

}else{

moveKeeper()

setTimeout(()=>{

result.innerHTML="TIDAK GOAL TED"

},300)

}

setTimeout(resetBall,2000)

}

function moveKeeper(){

let pos=[220,260,300]

keeper.style.left=pos[Math.floor(Math.random()*pos.length)]+"px"

}

function resetBall(){

ball.classList.remove("spin")

ball.style.bottom="80px"
ball.style.left="290px"

result.innerHTML=""

}

})
