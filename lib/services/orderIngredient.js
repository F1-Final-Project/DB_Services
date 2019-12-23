const OrederIngredient = require('../models/orderIngredient');

class IngredientService {
    static async getAllOrderIngredient(){
        return await OrederIngredient.find({})
            .populate('orderIngredients')
            .exec()
    }
    static async getOrderIngredientById(id){
        return await Dish.findOne({_id: id})
            .populate('orderIngredients')
            .exec()
    }

    static async createOrderIngredient(data){
        const newData = {
            order: data.order,
            orderCategory: data.orderCategory,
            editingOrder: data.editingOrder,
            pendingOrder: data.pendingOrder,
            orderHasArrived: data.orderHasArrived
        };

        const createData = new OrederIngredient(newData);
        await createData.save();
        return createData;
    }
    static async updateOrderIngredient(data, id){
        const newData = {
            order: data.order,
            orderCategory: data.orderCategory,
            editingOrder: data.editingOrder,
            pendingOrder: data.pendingOrder,
            orderHasArrived: data.orderHasArrived,
        };

        await OrederIngredient.findOneAndUpdate({_id: id}, newData, {new: true});
    }
    static async deleteOrderIngredient(id){
        await OrederIngredient.findByIdAndRemove(id);
    }
}

module.exports = IngredientService;
