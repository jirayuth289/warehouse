/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('v_history', {
		Id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Quantily: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		ProductsId: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		WarehouseId: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'v_history',
		timestamps: false
	});
};
