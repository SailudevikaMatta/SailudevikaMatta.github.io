function hamburg(){
    const navbar=document.querySelector(".dropdown")
    navbar.style.transform="transalteY(0px)"
}
function cancel(){
    const navbar=document.querySelector(".dropdown")
    navbar.style.transform="transalteY(-500px)"
}

const texts=[
    "Student",
    "Fresher",
    
]
let speed=100;
const textElements=document.querySelector(".typewriter-text");

let textindex=0;
let charcterindex=0;

function typeWriter(){
    if(charcterindex < texts[textindex].length){
        textElements.innerHTML +=texts[textindex].charAt(charcterindex);
        charcterindex ++;
        setTimeout(typeWriter,speed);
    }
    else{
        setTimeout(eraseText,1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML=textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText,50)
    }
    else{
        textindex=(textindex + 1)%texts.length;
        charcterindex=0;
        setTimeout(typeWriter,500)
    }
}

window.onload=typeWriter
