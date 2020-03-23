'use strict';

module.exports = (sequelize, DataTypes) => {
    const sujeto = sequelize.define(
        'sujeto',
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            nombre_completo: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            dni: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            fecha_nacimiento: {
                allowNull: false,
                type: DataTypes.DATEONLY,
            },
            calle: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            numero: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            poblacion: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            codigo_postal: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
        },
        {}  
    );
    /* sujeto.associate = function(models){
        sujeto.belongsTo(models.llamada, {
            foreignKey: 'id_sujeto',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
    }; */
    return sujeto;
};