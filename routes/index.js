//Imports
const routes = require('express').Router();
const libroController = require('../controller/LibroController.js');
//Modulo de rutas
module.exports = ()=>{

  //CRUD libros
   //Insert
  routes.post('/api/v1/libro',libroController.agregarLibro);
  //Listar
  routes.get('/api/v1/libro',libroController.listarLibros);
  //Eliminar
  routes.delete('/api/v1/libro/:id',libroController.eliminarLibro);
  //Editar
  routes.put('/api/v1/libro/',libroController.editarLibro);

  return routes;
}
