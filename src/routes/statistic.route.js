const Router = require("express");
const router = new Router();
const statisticController = require("../controllers/statistic.controller");

router.get("/proceeds", statisticController.getProceeds);
router.get("/deals", statisticController.getDeals);

module.exports = router;
