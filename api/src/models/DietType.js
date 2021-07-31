const { DataTypes, DATE } = require('sequelize');

module.exports = sequealize => {
	sequealize.define('type', {
		id: {
			type: DataTypes.INT,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
};
