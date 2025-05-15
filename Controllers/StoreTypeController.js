const StoreTypeService = require("../services/StoreTypeServices");
const StoreTypeModel = require("../Models/StoreType");

class StoreTypeController {
    async createStoreType(req, res) {
        try {
            const {name, description, icon} = req.body;
            if(!name || !description || !icon) {
                res.status(400).send({
                    status: 'Failed',
                    message: 'Please enter All Fields Required!'
                });
            }
            const shopTypeData = {name, description, icon};
            const newShopType = await StoreTypeService.createStoreType(shopTypeData);
            res.status(200).send({
                status: 'Success',
                message: 'Shop Type created successfully!',
                ShopType: newShopType,

            });
        }
        catch (error){
            res.status(400).send({
                status: 'Failed',
                message: error.message
            })
        }
    }


    async getAllStoreTypes(req, res) {
        try {
            const storeTypes = await StoreTypeService.getAllStoreTypes();
            res.status(200).send({
                status: 'Success',
                message: 'Shop Type list successfully!',
                StoreTypes: storeTypes,
            })
        }
        catch (error){
            res.status(400).send({
                status: 'Failed',
                error: error.message
            })
        }
    }

    async assignCategory(req, res) {
        const { storeTypeId } = req.params;
        const { categoryId } = req.body;
        if (!categoryId) {
            res.status(400).send({
                status: 'Failed',
                message: 'Please enter categoryId Required!'
            })
        }

        if (!storeTypeId) {
            res.status(400).send({
                status: 'Failed',
                message: 'Please enter storeTypeId Required!'
            })
        }
        try {
            const updated = await StoreTypeService.assignCategory(storeTypeId, categoryId);
            res.status(200).send({
                status: "Success",
                message: "Category assigned to store type",
                data: updated
            });
        } catch (error) {
            res.status(400).send({
                status: "Failed",
                message: error.message
            });
        }
    }

    async getAllCategories(req,res) {
        const { storeTypeId } = req.params;
        if (!storeTypeId) {
            res.status(400).send({
                status: 'Failed',
                message: 'Please enter storeTypeId Required!'
            })
        }
        const Categories = await StoreTypeService.getAllCategories(storeTypeId);
        res.status(200).send({
            status: 'Success',
            Data: Categories
        })
    }


}
module.exports = new StoreTypeController;