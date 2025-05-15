const StoreTypeModel = require("../Models/StoreType");
const mongoose = require('mongoose');

class StoreTypeService {
    async createStoreType(storeTypeData) {
        try {
            const {name, description, icon} = storeTypeData;
            if (!name || !description || !icon) {
                return Promise.reject(new Error("Please enter All Fields Required!"));
            }

            // Check if Shop Type already created
            const existType = await StoreTypeModel.findOne({name});
            if (existType) {
                return Promise.reject(new Error("Shop already exist"));
            }

            const newStoreType = await StoreTypeModel.create({
                name,
                description,
                icon
            });
            return newStoreType;
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async getAllStoreTypes() {
        return StoreTypeModel.find();
    }


}


module.exports = new StoreTypeService();