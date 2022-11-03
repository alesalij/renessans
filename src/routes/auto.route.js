const Router = require("express");
const router = new Router();
const customerAuto = require("../controllers/auto.controller");

router.post("/", customerAuto.createAuto);
router.get("/", customerAuto.getAllAuto);
router.get("/:id", customerAuto.getAuto);
router.put("/:id", customerAuto.updateAuto);
router.delete("/:id", customerAuto.deleteAuto);

module.exports = router;
