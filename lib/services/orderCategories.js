const OrderCategory = require('../models/orderCategories');

class OrderCategoryService {
    static async getAllOrderCategories(){
        return await OrderCategory.find({});
    }

}

module.exports = OrderCategoryService;
