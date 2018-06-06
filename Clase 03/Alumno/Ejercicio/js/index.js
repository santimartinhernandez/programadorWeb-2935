// EJERCICIO CLASE 3

console.log('funciona')

var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

for (var i = 0; i < daysOfTheWeek.length; i++) {
  switch (daysOfTheWeek[i]) {
    case 'Lunes':
      console.log(daysOfTheWeek[i] + ' es un día de semana')
      break

    case 'Martes':
      console.log(daysOfTheWeek[i] + ' es un día de semana')
      break

    case 'Miércoles':
    case 'Miercoles':
      console.log(daysOfTheWeek[i] + ' es un día de semana')
      break

    case 'Jueves':
      console.log(daysOfTheWeek[i] + ' es un día de semana')
      break

    case 'Viernes':
      console.log(daysOfTheWeek[i] + ' es un día de semana')
      break

    case 'Sabado':
    case 'Sábado':
      console.log(daysOfTheWeek[i] + ' es fin de semana')
      break

    case 'Sabado':
    case 'Sábado':
      console.log(daysOfTheWeek[i] + ' es fin de semana')
      break

    case 'Domingo':
      console.log(daysOfTheWeek[i] + ' es fin de semana')
      break

    default:
      console.log(daysOfTheWeek[i] + ' No es un día valido')
      break
  }
}
