import models from '../models';

const { V_Product } = models;
class StockItemCtrl {
    add = async (req, res, next) => {
        try {
            let { quantity, productId, warehouseId } = req.body;

            if (!quantity) {
                return res.status(400).json({ success: false, message: 'ต้องกรอกจำนวนสินค้า' });
            }

            quantity = parseInt(quantity);
            if (quantity === 0) {
                return res.status(400).json({ success: false, message: 'จำนวนสินค้าต้องมากว่า 0' });
            }

            await models.StockItem.create({ Quantily: quantity, ProductsId: productId, WarehouseId: warehouseId });

            res.status(200).json({ success: true, message: 'ok' });
        } catch (error) {
            next(error);
        }
    }

    getAll = async (req, res, next) => {
        try {
            const stockList = await V_Product
                .findAll({
                    attributes: [
                        ['Id', 'productId'],
                        ['Name', 'name'],
                        ['Price', 'price'],
                        ['Unit', 'unit'],
                        ['Description', 'description'],
                        ['Stock', 'stock']],
                    order: [
                        ['Id', 'DESC']
                    ]
                });

            res.status(200).json({ success: true, stockList });
        } catch (error) {
            next(error);
        }
    }

    delete = async (req, res, next) => {
        try {
            const { productId } = req.query;

            await models.StockItem.destroy({
                where: {
                    ProductsId: productId
                }
            });

            res.status(200).json({ success: true, message: 'ok' });
        } catch (error) {
            next(error);
        }
    }

    getHistory = async (req, res, next) => {
        try {
            const { productId } = req.query;

            const stockHistoryList = await models.V_History.findAll({
                where: {
                    ProductsId: productId
                },
                attributes: [['Name', 'warehouseName'], ['Quantily', 'quantity']]
            });
            res.status(200).json({ success: true, stockHistoryList });
        } catch (error) {
            next(error);
        }
    }
}

export default new StockItemCtrl();