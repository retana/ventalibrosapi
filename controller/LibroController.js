const mongoose    = require("mongoose");
const LibroModel  =  require("../model/libro.js").LibroModel;

exports.agregarLibro = (req,res)=>{
  new LibroModel(req.body).save((err,data)=>{
    if(err) console.log(err);
    else res.send({message: "Datos agregados correctamente"});
  });

};

exports.listarLibros  = (req,res)=>{
  LibroModel.find((err,datos)=>{
    if(err) console.error(err);
    res.send(datos);
  })
}

exports.eliminarLibro = (req,res)=>{
  LibroModel.remove({_id:req.params.id},(err)=>{
    if(err) console.error(err);
    else res.send({message:"Registro Eliminado"});
  });
};

exports.editarLibro = (req,res)=>{
  LibroModel.update({_id:req.body._id},{$set: req.body},(err)=>{
    if(err) console.error(err);
    else res.send({message: "Objeto editado correctamente"});
  });


};
