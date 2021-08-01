const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
	// defino el modelo
	sequelize.define('recipe', {
		id: {
			type: DataTypes.INTEGER,
			get() {
				return `lh-${this.getDataValue('id')}`;
			},
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
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
		steps: {
			type: DataTypes.STRING,
		},
	});
};
