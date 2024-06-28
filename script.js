const diasEl = document.getElementById('dias')
const horasEl = document.getElementById('horas')
const minutosEl = document.getElementById('minutos')
const segundosEl = document.getElementById('segundos')

const predioPronto = '1 jan 2025'

function countdown (){
    const newPredioPronto = new Date(predioPronto)
    const dataHoje = new Date()

    const segundosTotais = (newPredioPronto - dataHoje) / 1000

    const dias = Math.floor(segundosTotais / 3600 / 24)
    const horas = Math.floor(segundosTotais / 3600) % 24
    const mins = Math.floor(segundosTotais / 60) % 60
    const segundos = Math.floor(segundosTotais) % 60

    diasEl.innerHTML = dias
    horasEl.innerHTML = tempo(horas)
    minutosEl.innerHTML = tempo(mins)
    segundosEl.innerHTML = tempo(segundos)

}
function tempo (time) {
    return time < 10 ? `0${time}` : time
}

countdown()

setInterval(countdown,1000)