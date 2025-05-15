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


    async assignCategory(storeTypeId, categoryId) {
        if (!categoryId) {
            return Promise.reject(new Error("Please enter categoryId Required!"));
        }

        if (!storeTypeId) {
            return Promise.reject(new Error("Please enter storeTypeId Required!"));
        }
        return StoreTypeModel.findByIdAndUpdate(storeTypeId,{$push: {categories:categoryId}}, {new: true});
    }

    async getAllCategories(storeTypeId) {
        if (!storeTypeId) {
            return Promise.reject(new Error("Please enter storeTypeId Required!"));
        }
        return StoreTypeModel.findById(storeTypeId).select('categories');
    }





}


module.exports = new StoreTypeService();