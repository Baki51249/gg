var input = document.getElementById("input");
var listaDeTarefas = document.getElementById("listaDeTarefas");

document.addEventListener("keypress", function (event) {
    console.log(event.code);
    if (event.key === "Enter") {
        add();
    }
});
 document.addEventListener("click" ,function (event){
    var alvo=event.target;
        if(alvo.nodeName== "LI"){}
    alvo.remove()
  
 })

function add() {
    var itemDigitado = input.value;
    if (itemDigitado.trim() === "") {
        return;
    }
    var li = document.createElement("li");
    li.innerText = itemDigitado;
    listaDeTarefas.appendChild(li);
    input.value = "";
    input.focus();
}

function teste() {
    console.log("testando");
}
