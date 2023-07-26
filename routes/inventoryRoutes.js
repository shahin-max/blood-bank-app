const express=require('express')
const { createInventoryController, getInventoryController, getDonarsController, getHospitalController, getOrgnaisationController, getOrgnaisationForHospitalController, getInventoryHospitalController, getRecentInventoryController } = require('../controller/inventoryController')
const authMiddleware = require('../middlewares/authMiddleware')
const router=express.Router()

router.post('/create-inventory',authMiddleware,createInventoryController)

router.get('/get-inventory',authMiddleware,getInventoryController)
router.get('/get-recent-inventory',authMiddleware,getRecentInventoryController)
router.get("/get-donars", authMiddleware,getDonarsController)
router.get("/get-hospitals", authMiddleware,getHospitalController)
router.get("/get-organisation", authMiddleware,getOrgnaisationController)
router.get("/get-orgnaisation-for-hospital", authMiddleware,getOrgnaisationForHospitalController)
router.post('/get-inventory-hospital',authMiddleware,getInventoryHospitalController)

module.exports=router