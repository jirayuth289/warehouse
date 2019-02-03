import StockItem from '../controllers/stock_item.controller';

export default (router) => {
    router.route('/stocks').get(StockItem.getAll).delete(StockItem.delete);
    router.post('/stock', StockItem.add);
    router.get('/stock_history', StockItem.getHistory);
}