let btn = document.createElement("BUTTON");
btn.id="btn";
btn.innerHTML = "0";
document.body.appendChild(btn);
btn.onclick = click;

function click(){
    btn.innerHTML++
}