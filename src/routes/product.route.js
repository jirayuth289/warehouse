import Product from '../controllers/product.controller';

export default (router) => {
    router.route('/product').post(Product.add).put(Product.update);
    router.get('/products', Product.getOptions);
}