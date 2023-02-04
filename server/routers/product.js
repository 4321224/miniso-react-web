const router = require("express").Router()
const productController = require("../controllers/productController")

router.get("/", productController.readProduct);
router.get("/:id", productController.getProductById);
router.post("/", productController.addProduct);
router.put("/:id", productController.editProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router