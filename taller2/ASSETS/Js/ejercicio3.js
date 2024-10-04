function calcular() {
    let juan = new Date('2000-01-13')
    let mario = new Date('2014-03-19')

    let tiempoMs = mario - juan

    let diferenciaHoras = (tiempoMs / (1000 * 60 * 60)) 
    let diferenciaDias = (tiempoMs / (1000 * 60 * 60 * 60))

    alert(`Juan y Mario se llevan, ${diferenciaDias} días y ${diferenciaHoras} horas`)
}