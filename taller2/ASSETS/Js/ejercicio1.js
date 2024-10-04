let boton1=document.getElementById('calcular')

function calcular()
{
    let radio1=document.getElementById('radio1').value
    let altura=document.getElementById('altura1').value
    let areaLateral= (2*Math.PI*radio1)*altura
    //document.write(areaLateral)
    console.log(areaLateral)
    alert(`El Área lateral es: ${areaLateral}`)
}
function calcular2()
{
    let radio=document.getElementById('radio2').value
    let resultado=2*Math.PI*radio
    alert(`El Área de la base es: ${resultado}`)
    
}
function calcular3()
{
    let areaLateral=document.getElementById('areaLateral').value
    let areaBase=document.getElementById('areaBase').value
    let areaTotal=areaLateral+(2*areaBase)
    alert(`El Área total es: ${areaTotal}`)
}
