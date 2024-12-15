const itemsArray = document.getElementsByClassName("item");


for (let i = 0; i < itemsArray.length; i++) {
    if (itemsArray[i] == itemsArray[1]) {
        itemsArray[i].textContent = "hola";
        itemsArray[i].style.backgroundColor = "red"
    }

}
function modoVerde() {
    let titulo = document.getElementById("titulo");
    let color = titulo.className;
    if (color == "verde") {
        titulo.classList.remove("verde");
    } else {
        titulo.classList.add("verde");

    }
}
