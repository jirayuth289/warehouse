/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Stock_item', {
		Id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Quantily: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		ProductsId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Products',
				key: 'Id'
			}
		},
		WarehouseId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Warehouse',
				key: 'Id'
			}
		}
	}, {
		tableName: 'Stock_item',
		timestamps: false
	});
};
