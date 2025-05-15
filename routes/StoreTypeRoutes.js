const ShopTypeController = require("../controllers/StoreTypeController");

const express = require("express");
const router = express.Router();


router.post("/",ShopTypeController.createStoreType);
router.get("/",ShopTypeController.getAllStoreTypes);


module.exports = router;
