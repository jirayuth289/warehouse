import StockItem from '../controllers/stock_item.controller';

export default (router) => {
    router.get('/stocks', StockItem.getAll);
    router.post('/stock', StockItem.add);
    router.get('/stock_history', StockItem.getHistory);
}