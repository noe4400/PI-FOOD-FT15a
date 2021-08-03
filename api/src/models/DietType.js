const { DataTypes, DATE } = require('sequelize');

module.exports = sequealize => {
	sequealize.define(
		'DietType',
		{
			name: {
				type: DataTypes.STRING,
				allowNull: true,
			},
		},
		{ timestamps: false }
	);
};
