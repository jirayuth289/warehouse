import Sequelize from 'sequelize';

const sequelize = new Sequelize('mini_warehouse', 'sa', 'P@ssw0rd', {
    host: 'localhost',
    dialect: 'mssql'
});

// load models
const Product = sequelize.import(__dirname + '/Products');
const StockItem = sequelize.import(__dirname + '/Stock_item');
const Warehouse = sequelize.import(__dirname + '/Warehouse');
const V_Product = sequelize.import(__dirname + '/v_product');
const V_History = sequelize.import(__dirname + '/v_history');

const db = {
    Product,
    StockItem,
    Warehouse,
    V_Product,
    V_History
}

export { sequelize };
export default db;

//sequelize-auto -o "./src/models" -d mini_warehouse -h localhost -u sa -p 1433 -x P@ssw0rd -e mssql -c "./sequelize-auto.json"