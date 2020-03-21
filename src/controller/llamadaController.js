'use strict';

const Llamada = require("../model/Llamada");

const mostrarLlamadas = function(req, res){
    Llamada.getLlamada(function(err, llamada){
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', llamada);
        res.send(llamada);
        });
}
/* const createllamada = function(req, res){
    const new_llamada = new llamada(req.body);
    llamada.createllamada(new_llamada, function(err,llamada){
        if (err)
      res.send(err);
    res.json(llamada);
    });
}; */

module.exports = {
    //createllamada,
    mostrarLlamadas
};