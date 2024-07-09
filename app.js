function imprimirContenido() {
var prinContent = document.getElementById('contenido').innerHTML;
var originalContent = document.body.innerHTML;
document.body.innerHTML = prinContent;
window.print();
document.body.innerHTML = originalContent

}