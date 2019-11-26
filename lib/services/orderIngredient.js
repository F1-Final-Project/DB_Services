const OrederIngredient = require('../models/orderIngredient');

class IngredientService {
    static async getAllOrderIngredient(){
        return await OrederIngredient.find({});
    }
    static async createOrderIngredient(data){
        const newData = {
            order: data,
        };

        const createData = new OrederIngredient(newData);
        await createData.save();
        return createData;
    }
    static async updateOrderIngredient(data, id){
        const newData = {
            order: data,
        };

        await OrederIngredient.findOneAndUpdate({_id: id}, newData, {new: true});
    }
    static async deleteOrderIngredient(id){
        await OrederIngredient.findByIdAndRemove(id);
    }
}

module.exports = IngredientService;
