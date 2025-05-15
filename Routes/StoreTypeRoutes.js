const ShopTypeController = require("../Controllers/StoreTypeController");

const express = require("express");
const router = express.Router();


router.post("/",ShopTypeController.createStoreType);
router.get("/",ShopTypeController.getAllStoreTypes);
router.put('/assign-category/:storeTypeId',ShopTypeController.assignCategory);
router.get('/categories/:storeTypeId',ShopTypeController.getAllCategories);


module.exports = router;
