document.addEventListener("DOMContentLoaded",function(){

const ball=document.getElementById("ball")
const keeper=document.getElementById("keeper")
const player=document.getElementById("player")
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

player.classList.add("kick")
ball.classList.add("spin")

setTimeout(()=>{

player.classList.remove("kick")

},200)

ball.style.bottom="300px"

let target=290+dx

if(target<200)target=200
if(target>380)target=380

ball.style.left=target+"px"

let chance=Math.random()

if(chance<=0.2){

result.innerHTML="GOAL ⚽"

}else{

keeper.classList.add("jump")

setTimeout(()=>{

result.innerHTML="SAVE 🧤"

},300)

}

setTimeout(resetBall,2000)

}

function resetBall(){

ball.classList.remove("spin")

ball.style.bottom="80px"
ball.style.left="290px"

keeper.classList.remove("jump")

result.innerHTML=""

}

})
