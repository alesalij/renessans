const Router = require("express");
const router = new Router();
const dealController = require("../controllers/deal.controller");

router.post("/", dealController.createDeal);
router.get("/", dealController.getAllDeals);
router.get("/:id", dealController.getDeal);
router.put("/:id", dealController.updateDeal);
router.delete("/:id", dealController.deleteDeal);

module.exports = router;
