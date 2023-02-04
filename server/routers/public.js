const router = require("express").Router()
const publicController = require("../controllers/publicController")

router.get('/', publicController.readProduct)
router.get('/detail', publicController.readDetailProduct)
router.get('/:id', publicController.readProductById)

module.exports = router