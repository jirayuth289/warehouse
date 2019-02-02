import model from '../models';

const { Product } = model;
class ProductCtrl {
    add = async (req, res, next) => {
        try {
            const { name, description, price, unit } = req.body;

            if (!name) {
                return res.status(400).json({ success: false, message: 'ต้องกรอกชื่อสินค้า' });
            }

            if (!description) {
                return res.status(400).json({ success: false, message: 'ต้องกรอกรายละเอียดสินค้า' });
            }

            if (!price) {
                return res.status(400).json({ success: false, message: 'ต้องกรอกราคาสินค้า' });
            }

            if (!unit) {
                return res.status(400).json({ success: false, message: 'ต้องกรอกหน่วยสินค้า' });
            }

            await Product.create({ Name: name, Price: price, Unit: unit, Description: description });

            res.json({ success: true, message: 'ok' });
        } catch (error) {
            next(error);
        }
    }

    update = async (req, res, next) => {
        try {
            const { productId, name, description, price, unit } = req.body;

            if (!name) {
                return res.status(400).json({ success: false, message: 'ต้องกรอกชื่อสินค้า' });
            }

            if (!description) {
                return res.status(400).json({ success: false, message: 'ต้องกรอกรายละเอียดสินค้า' });
            }

            if (!price) {
                return res.status(400).json({ success: false, message: 'ต้องกรอกราคาสินค้า' });
            }

            if (!unit) {
                return res.status(400).json({ success: false, message: 'ต้องกรอกหน่วยสินค้า' });
            }

            // await Product.update({ Name: name, Price: price, Unit: unit, Description: description }, { where: { Id: productId } });

            const product = await Product.findOne({ where: { Id: productId } });

            if (!product) {
                return res.status(400).json({ success: false, message: 'ไม่พบข้อมูลสินค้าชิ้นนี้' });
            }

            product.Name = name;
            product.Price = price;
            product.Unit = unit;
            product.Description = description;

            await product.save();

            res.json({ success: true, message: 'ok' });
        } catch (error) {
            next(error);
        }
    }

    getOptions = async (req, res, next) => {
        try {
            const productList = await Product.findAll({
                attributes: [['Id', 'productId'], ['Name', 'name']],
                order: [
                    ['Id', 'DESC']
                ]
            });

            res.json({ success: true, productList });
        } catch (error) {
            next(error);
        }
    }
}

export default new ProductCtrl();