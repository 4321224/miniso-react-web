const router = require("express").Router();
const product = require("./product");
const routerUser = require("./routerUser");
const public = require("./public");
const category = require("./category");
const errorHanddler = require("../middleware/errorHanddler");

router.use("/public", public);
router.use("/", routerUser);
router.use("/product", product);
router.use("/category", category);
router.use(errorHanddler);

module.exports = router;
