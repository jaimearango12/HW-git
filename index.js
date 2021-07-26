/* A esto se le llama mutabilidad
let variable ='soy una variable';
console.log(variable)

variable = "Ahora estoy modificada";
console.log(variable);*/

// null y undefined daran valor falso

// Objeto: es una agrupacion de datos NO TIENEN VARIABLES PERO SÍ PROPIEDADES

//para los objetos se usa {} para arreglos []

//para variables const se pueden agregar datos con el metodo push cuando son arreglos

//INICIO DE APLICACION CON UN API

const express = require('express')
const app = express()

app.get('*', (request, response) =>{
    response.send({message: 'ejemplo'})
})

app.listen(3000, () => console.log('el servidor corre en el puerto 3000'))