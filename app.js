let input = document.querySelector(".input");
let btn = document.querySelector("button");
let nick = prompt("введите ник")
btn.disabled = true
input.addEventListener("input" , ()=>{
    if(input.value == nick){
        btn.disabled = false
    }
    else{
        btn.disabled = true
    }
})
input.addEventListener("change" , ()=>{
    alert("работает?")
})