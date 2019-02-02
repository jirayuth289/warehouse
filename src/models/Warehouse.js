/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Warehouse', {
		Id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'Warehouse',
		timestamps: false
	});
};
