const { DataTypes, DATE } = require('sequelize');

module.exports = sequealize => {
	sequealize.define('type', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
};
