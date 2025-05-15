const StoreTypeService = require("../services/StoreTypeServices");

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


}
module.exports = new StoreTypeController;