let resultado = document.getElementById("operar")

function operar() {
  let radio = document.getElementById("radio").value;
  let area = 4 * Math.PI * Math.pow(radio, 2);
  let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
  alert(`El area de su esfera con radio ${radio} es ${area} y tiene un volumen de ${volumen}`)
}
