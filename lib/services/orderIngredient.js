const OrederIngredient = require('../models/ingredient');

class IngredientService {
    static async getAllOrderIngredient(){
        return await OrederIngredient.find({});
    }
    static async createOrderIngredient(data){
        const newData = {
            order: data.order,
        };

        const createData = new OrederIngredient(newData);
        await createData.save();
        return createData;
    }
    static async updateOrderIngredient(data, id){
        const newData = {
            order: data.order,
        };

        await OrederIngredient.findOneAndUpdate({_id: id}, newData, {new: true});
    }
    static async deleteIngredient(id){
        await OrederIngredient.findByIdAndRemove(id);
    }
}

module.exports = IngredientService;
