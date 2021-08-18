const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
	// defino el modelo
	sequelize.define(
		'recipe',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			summary: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			score: {
				type: DataTypes.DOUBLE,
			},
			healthscore: {
				type: DataTypes.DOUBLE,
			},
			instructions: {
				type: DataTypes.STRING,
			},
		},
		{ timestamps: false }
	);
};
