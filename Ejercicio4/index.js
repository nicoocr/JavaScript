const capa=document.getElementById("capa");
const boton_rojo=document.getElementById("btn_rojo");

boton_rojo.addEventListener("click",rojo);
function rojo(){
    capa.style.background="red";
}