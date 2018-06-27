// DESAFIO CLASE 8

console.log('funciona')

var students = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]

function Students(firstName, lastName, dni, email) {
  var id = Math.random()

  this.firstName = firstName
  this.lastName = lastName
  this.dni = dni
  this.email = email

  this.getId = function() {
    var studentID = id
    return studentID
  }

  this.getFullName = function() {
    var fullName = firstName + ' ' + lastName
    return fullName
  }

  this.getDNI = function() {
    var dniNumber = dni
    return dniNumber
  }

  this.getEmail = function() {
    var emailText = email
    return emailText
  }
}

var newStudents = []

for (i = 0; i < students.length; i++) {
  var student = new Students(
    students[i].firstName,
    students[i].lastName,
    students[i].dni,
    students[i].email
  )

  newStudents.push(student)
}

function createStudentNode(student) {
  var mainListNode = document.getElementById('main-list')
  var liNode
  liNode = document.createElement('li')
  liNode.className = 'list-group'
  liNode.innerHTML =
    '<h1> ' +
    newStudents[i].getFullName() +
    '</h1>' +
    '<h3> DNI: ' +
    newStudents[i].getDNI() +
    '</h3>' +
    '<h5> email: ' +
    newStudents[i].getEmail() +
    '</h5>'

  liNode.id = newStudents[i].getId()
  mainListNode.appendChild(liNode)

  return liNode
}

for (i = 0; i < students.length; i++) {
  createStudentNode(newStudents[i])
  //console.log(liNode)
}
