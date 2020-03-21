'use strict';
const sql = require('../database/db');

const Llamada = function(llamada){
    this.viaje_extranjero = llamada.viaje_extranjero;
    this.contacto_enfermo = llamada.contacto_enfermo;
    this.contacto_enfermo_covid = llamada.contacto_enfermo_covid;
    this.profesional_sanitario = llamada.profesional_sanitario;
    this.sintomas = llamada.sintomas;
    this.dificultad_respiratoria = llamada.dificultad_respiratoria;
    this.persona_riesgo = llamada.persona_riesgo;
    this.creado = new Date();
};

/* llamada.createllamada = function(newllamada, result){
    sql.query("INSERT INTO llamada set ?", newllamada, function(err, res){
        if(err){
            console.log("El error es: ", err);
            result(err,null);
        }
        else{
            console.log(res.insetId);
            result(null,res.InsertId);
        }
    });
}; */

Llamada.getLlamadas = function (result) {
    sql.query("Select * from llamada", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('llamadas : ', res);  

             result(null, res);
            }
        });   
};

module.exports = Llamada;