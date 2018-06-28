var inputEmailNode = document.getElementById('inputEmail')

inputEmailNode.onblur = validateEmail

function validateEmail(event) {
  var node = event.target

  // var values = node.value.split('a')

  // console.log(values)
  console.log(node.value)
  if (
    node.value.length >= 0 &&
    node.value.indexOf('.') != -1 &&
    node.value.indexOf('@') != -1
  ) {
    console.log('Email Correcto')
    node.classList.remove('is-invalid')
    node.classList.add('is-valid')
  } else {
    console.log('Email Invalido')
    node.classList.remove('is-valid')
    node.classList.add('is-invalid')
  }
}
