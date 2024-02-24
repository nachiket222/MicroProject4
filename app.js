const display = document.getElementsByClassName("number");
const script = document.getElementsByClassName("display");

for(let elem of display){
    console.log(elem.innerText)
    elem.addEventListener("click", ()=>{
        script[0].innerText+=elem.innerText
    })
}

document.getElementsByClassName("reset")[0].addEventListener("click", ()=>{
    script[0].innerText=""
})

document.getElementsByClassName("delete")[0].addEventListener("click", ()=>{
    script[0].innerText=script[0].innerText.substring(0,script[0].innerText.length-1)
})

document.getElementsByClassName("equal")[0].addEventListener("click", ()=>{
    script[0].innerText=eval(script[0].innerText)
})