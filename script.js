const colorPicker = document.querySelector('#colorPicker');
const colorSelected = document.querySelector('#colorSelected');

const saludo = document.getElementById('saludo');
const hora = new Date().getHours();

if (hora >= 6 && hora < 12) {
  saludo.textContent = "Buenos días";
} else if (hora >= 12 && hora < 20) {
  saludo.textContent = "Buenas tardes";
} else {
  saludo.textContent = "Buenas noches";
}


/*colorPicker.addEventListener('input', function() {
  const color = this.value;
  console.log(color);
  colorSelected.style.backgroundColor = color;
  hexToRgb(color);
});
*/

function hexToRgb(hex) {
    hex = hex.replace("#", "");

    var r = parseInt(hex.substring(0,2), 16);
    var g = parseInt(hex.substring(2,4), 16);
    var b = parseInt(hex.substring(4,6), 16);
  
    console.log(r+", "+g+", "+b);
}

function mostrarColor() {
    var color = document.getElementById("color-picker").value;
    hexToRgb(color);
    console.log(color);
    mostrarTexto(color);
}

function mostrarTexto(colorTexto) {
    document.getElementById("texto").innerHTML = "Su color: " + colorTexto+" ha sido guardado";
}