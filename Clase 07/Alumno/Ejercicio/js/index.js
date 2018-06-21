console.log('funciona')

var studentsList = [
  'CARLOS',
  'GERONIMO',
  'NICOLAS',
  'LUCAS',
  'MARIA',
  'FEDERICO',
  'ANTONIO',
  'LORNA',
  'JULIAN',
  'DIEGO',
  'DANIELA',
  'JUAN',
  'MATEO',
  'BARBARA',
  'AGUSTIN',
  'MARIO',
  'MARIEL',
  'ANA',
  'FLORENCIA'
]

var key = 'Students_First_Names'

function saveStudents(myKey, array) {
  if (typeof myKey === 'string' && Array.isArray(studentsList)) {
    console.log('Es un array y un string')

    var stringifyNames = JSON.stringify(array)
    localStorage.setItem(key, stringifyNames)
  }
}

saveStudents(key, studentsList)

function buscarStudents(myKey) {
  var firstNames = localStorage.getItem(myKey)
  if (firstNames) {
    var firstNamesList = JSON.parse(firstNames)
    return firstNamesList
  } else {
    return []
  }
}

var savedList = buscarStudents(key)

console.log(savedList)
