import express from 'express';
import product from './product.route';
import stock from './stock_item.route';
import warehouse from './warehouse.route';

const router = express.Router();

//load routes
product(router);
stock(router);
warehouse(router);

export default router;