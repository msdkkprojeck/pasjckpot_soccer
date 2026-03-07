document.addEventListener("DOMContentLoaded",function(){

const ball=document.getElementById("ball")
const keeper=document.getElementById("keeper")
const player=document.getElementById("player")
const result=document.getElementById("result")

let startX,startY

document.addEventListener("mousedown",function(e){

startX=e.clientX
startY=e.clientY

})

document.addEventListener("mouseup",function(e){

let dx=e.clientX-startX
let dy=startY-e.clientY

kickBall(dx,dy)

})

/* kiper bergerak otomatis */

setInterval(function(){

let pos=[220,260,300]

keeper.style.left=pos[Math.floor(Math.random()*pos.length)]+"px"

},1500)

function kickBall(dx,dy){

ball.classList.add("ballKick")

player.classList.add("kick")

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

setTimeout(()=>{

result.innerHTML="SAVE 🧤"

},300)

}

setTimeout(resetBall,2000)

}

function resetBall(){

ball.classList.remove("ballKick")

ball.style.bottom="80px"
ball.style.left="290px"

result.innerHTML=""

}

})
