/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('v_product', {
		Id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Price: {
			type: "MONEY",
			allowNull: false
		},
		Unit: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Stock: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'v_product',
		timestamps: false
	});
};
