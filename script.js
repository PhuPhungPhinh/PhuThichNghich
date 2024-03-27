const question = document .querySelector(".question")
const gif=document .querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")


yesBtn.addEventListener("click",()=>{
    question.innerHTML="Yayyyy ";
    gif.src="https://i.pinimg.com/originals/38/ff/a4/38ffa4616c7e43522afa0d3569fb522b.gif"
})

noBtn.addEventListener("mouseover ",()=>{
    const noBtnRect=noBtn.getBoundingClientRect();
    const maxX=window.innerWidth -noBtnRect.width;
    const maxY= window.innerHeight -noBtnRect.height;
    
    const radomX= Math.floor(Math.random()+maxX)
    const radomY= Math.floor(Math.random()+maxY)

    noBtn.style.left =radomX +"px";
    noBtn.style.top=radomY+"px" 
})