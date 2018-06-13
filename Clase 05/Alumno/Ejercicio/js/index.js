// EJERCICIO CLASE 5

console.log('holis funciona')

var cars = [
  {
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: `Audi TT`,
    brand: 'Audi',
    year: 2017
  },
  {
    model: `Gran turismo`,
    brand: 'Maserati',
    year: 2018
  }
]

function Car(model, brand, year) {
  var id = Math.random()

  this.model = model
  this.brand = brand
  this.year = year

  this.getCarName = function() {
    var carName = 'MODELO ' + model + '  MARCA ' + brand + '  AÑO ' + year
    return carName
  }
}

// var car1 = new Car(cars[0].model, cars[0].brand, cars[0].year)
// var car2 = new Car(cars[1].model, cars[1].brand, cars[1].year)
// var car3 = new Car(cars[2].model, cars[2].brand, cars[2].year)

// console.log(car1.getCarName())
// console.log(car2.getCarName())
// console.log(car3.getCarName())

var car

var newCars = []

for (i = 0; i < cars.length; i++) {
  var car = new Car(cars[i].model, cars[i].brand, cars[i].year)

  newCars.push(car)
}

console.log(newCars[2].getCarName())

// Objetos

// ¿Qué es un objeto?

// Forma Old Fashion

// var obj = {
//   title: 'Shrek',
//   director: 'Andrew Adamson',
//   year: 2001
// }

// console.log(obj.title)
// console.log(obj['title'])

// var obj1 = {
//   title: 'Shrek',
//   director: 'Andrew Adamson',
//   year: 2001
// }

// var obj2 = {
//   title: 'Shrek',
//   director: 'Andrew Adamson',
//   year: 2001
// }

// var obj3 = obj1

// console.log(obj1.title)
// console.log(obj3.title)

// obj1.title = 'Coco'

// console.log('Cambie el nombre del obj1 a Coco')

// console.log(obj1.title)
// console.log(obj3.title)

// obj3.title = 'La última nieve de primavera'
// obj3.actor = 'Pocho la pantera'

// console.log('Cambie el nombre del obj1 a La última nieve de primavera')

// console.log(obj1.actor)
// console.log(obj3.actor)

// console.log(obj1 === obj3)

// Función constructora y `new`

// function Movie (title, director, year) {
//   var id = Math.random()

//   this.title = title
//   this.director = director
// }

// var shrek = new Movie('Shrek', 'Andrew Adamson', 2001)

// console.log(shrek.title)
// console.log(shrek.director)
// console.log(shrek.year)

// var showMessage = function (name) {
//   console.log('Hola ' + name)
// }

// showMessage('Pedro')

// function Movie (title, director, year) {
//   var id = Math.random()

//   var modified = false

//   this.title = title
//   this.director = director

//   this.getYear = function () {
//     return year
//   }

//   this.getId = function () {
//     return id
//   }

//   this.setYear = function (newYear) {
//     if (typeof newYear === 'number') {
//       year = newYear
//       modified = true
//     }
//   }
// }

// var shrek = new Movie('Shrek', 'Andrew Adamson', 2001)

// var matrix = new Movie('Matrix', 'Hermanas Wachowsky', 1999)

// console.log(shrek.title)
// console.log(shrek.getId())

// console.log(matrix.title)
// console.log(matrix.getId())

// console.log(shrek === matrix)

// var movies = [
//   {
//     title: 'Shrek',
//     director: 'Andrew Adamson',
//     year: 2001
//   },
//   {
//     title: 'Matrix',
//     director: 'Hermanas Wachowsky',
//     year: 1999
//   }
// ]

// var newMovies = []

// var movie
// var newMovie

// for (var i = 0; i < movies.length; i++) {
//   movie = movies[i]
//   newMovie = new Movie(movie.title, movie.director, movie.year)
//   newMovies.push(newMovie)
// }

// console.log(newMovies[0].getId())

// console.log(shrek.year)

// shrek.year = 2018

// console.log(shrek.year)
// console.log(shrek.getYear())

// shrek.setYear(2018)

// console.log(shrek.getYear())

// shrek.setYear('Pato')

// console.log(shrek.getYear())

// console.log(shrek.title)

// shrek.title = 'Matrix'

// console.log(shrek.title)

// console.log(shrek.director)
// console.log(shrek.year)
// console.log(shrek.getYear())
// console.log(shrek.getId())

// Propiedades de los objetos
// Métodos de los objetos
// Uso del `this` para publico y privado
