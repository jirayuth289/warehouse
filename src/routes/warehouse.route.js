import Warehouse from '../controllers/warehouse.controller';

export default (router) => {
    router.get('/warehouses', Warehouse.getOptions);
}