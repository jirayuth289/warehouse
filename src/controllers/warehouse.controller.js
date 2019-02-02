import models from '../models';

class WarehouseCtrl {
    getOptions  = async (req, res, next) => {
        try {
            const warehouseList = await models.Warehouse.findAll({
                attributes: [['Id', 'warehouseId'], ['Name', 'name']]
            });

            res.json({ success: true, warehouseList });
        } catch (error) {
            next(error);
        }
    }
}

export default new WarehouseCtrl();