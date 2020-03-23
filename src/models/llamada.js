'use strict';

module.exports = (sequelize, DataTypes) => {
    const llamada = sequelize.define(
        'llamada',
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            viaje_extranjero: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            contacto_enfermo: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            contacto_enfermo_covid: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            profesional_sanitario: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            sintomas: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            dificultad_respiratoria: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            grupo_riesgo: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        },
        {}  
    );
    llamada.associate = function(models){
        llamada.hasMany(models.sujeto, {
            foreignKey: 'id_sujeto',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
    };
    return llamada;
}