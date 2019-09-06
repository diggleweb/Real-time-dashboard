const socket = io()

socket.on('connect', () => {
  console.log('connected on socket')
})
socket.on('firebase', payload => {
  console.log('firebase', payload)
})
socket.on('bike', bike => {
  const bikeElem = document.querySelector(`#bike${bike.serial}`)
  bikeElem.querySelector('.marcha').innerText = bike.marcha
  bikeElem.querySelector('.speed').innerText = bike.somatorio_de_voltas
})
