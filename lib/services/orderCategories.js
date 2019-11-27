const OrderCategory = require('../models/orderCategories');

class OrderCategoryService {
    static async getAllOrderCategories(){
        return await OrderCategory.find({});
    }
    static async createOrderCategories(data){
        const newData = {
            title: data.title,
        };
        const createData = new OrderCategory(newData);
        await createData.save();
        return createData;
    }
}

module.exports = OrderCategoryService;
