// EDESAFÍO 4

var number1
var number2
var operation
var result
var resultMessage = 'El resultado de la '

operation = prompt('Ingresá la operación a realizar sum, res, div o mul')
number1 = prompt('Ingresá el primer número')
number2 = prompt('Ingresá el segundo número')

var parsedNumber1 = parseFloat(number1, 10)
var parsedNumber2 = parseFloat(number2, 10)

switch (operation) {
  case 'sum':
    result = parsedNumber1 + parsedNumber2
    console.log(resultMessage + operation + ' es ' + result)
    break

  case 'res':
    result = parsedNumber1 - parsedNumber2
    console.log(resultMessage + operation + ' es ' + result)
    break

  case 'mul':
    result = parsedNumber1 * parsedNumber2
    console.log(resultMessage + operation + ' es ' + result)
    break

  case 'div':
    result = parsedNumber1 / parsedNumber2
    console.log(resultMessage + operation + ' es ' + result)
    break

  default:
    resultMessage = 'Operación inexistente'
    break
}

// 5. Variables

// var fullName

// var fullName1

// var fullName2

// // Privado

// var _fullName

// // Clases

// var FullName

// // No usado

// var $fullName

// var fullName

// console.log('Hola 0 ' + fullName)

// fullName = 'Adrián Ferré'

// console.log('Hola 1 ' + fullName)

// fullName = 'Marcela Correa'

// console.log('Hola 2 ' + fullName)

// fullName = 2

// console.log('Hola 3 ' + fullName)

// var box = 'Soy una caja'

// console.log(box)

// 6. Tipos de valores
// Boolean

// var value1 = false

// var value2 = true

// // Number

// var number1 = 2

// var number2 = -5

// var pi = 3.1416

// // String

// var fullName = 'Marcela Correa'

// var text = 'jhdskjfhkhjfgkdsjhgfksjgfkjdhskfjhjkjhkjhkj kjhkjhkjhkjhkj jhkjhj'

// var message = 'Hola "Pedro"'

// var message2 = "Hola 'juan'"

// null / undefined

// var undefinedValue = undefined

// var nullValue = null

// Array

// var examsResults = [ 10, 9, 8, 5 ]

// examsResults[3] = 8

// console.log(examsResults[3])

// var students = [ 'Juan', 'Pedro', 'Ramiro' ]

// console.log(students[1])

// var arrayAnyValue = [ 2, 'Ad', false, [ 1, 2, 3 ] ]

// Object

// var age = 29

// var student = {
//   name: 'Adrián',
//   lastName: 'Ferré',
//   age: age
// }

// var obj = {}

// console.log(student['name'])

// student.name = 'Pepe'

// console.log(student.name)

// 7. Operadores aritméticos

// var value1 = 2

// var value2 = '4'

//  +

// var parsedValue1 = parseFloat(value1, 10)

// var parsedValue2 = parseFloat(value2, 10)

// var resultSum = parsedValue1 + parsedValue2

// console.log(resultSum)

//  -

// var resultRes = value1 - value2

// console.log(resultRes)

//  *

// var resultMul = value1 * value2

// console.log(resultMul)

//  /

// value2 = 0

// var resultDiv = value1 / value2

// console.log(resultDiv)

//  %

// var resultPer = 87687687684 % 2

// console.log(resultPer)

// 8. Web API's y funciones de alto nivel útiles
// - prompt()

// var value

// value = prompt('Decime un número')

// console.log(value)

// - console.log()
// - parseInt()
