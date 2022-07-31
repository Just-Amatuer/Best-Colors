const colors = ["#222831","#393E46","#00ADB5","#EEEEEE","#F9ED69","#F08A5D","#B83B5E","#6A2C70","#E3FDFD"
,"#CBF1F5","#A6E3E9","#71C9CE","#F38181","#FCE38A","#EAFFD0","#95E1D3","#08D9D6","#252A34","#FF2E63","#EAEAEA","#FFC7C7"
,"#FFE2E2","#F6F6F6","#8785A2","#A8D8EA","#AA96DA"];
const colorShow = document.querySelector("span");
const button = document.getElementById("button");
button.addEventListener("click",myFunction);
function myFunction(){
    const randomNumber = getRandom();
    const change = document.body.style.backgroundColor = colors[randomNumber];
    colorShow.innerHTML = change;
}

function getRandom(){
    return Math.floor(Math.random() * colors.length)
}

