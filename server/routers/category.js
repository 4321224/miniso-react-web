const router = require('express').Router()
const categoryController = require('../controllers/categoryController')

router.get('/', categoryController.readAllCategories)
router.post("/", categoryController.addCategory)
router.get('/:id', categoryController.getCategoryById)
router.put('/:id', categoryController.editCategory)
router.delete('/:id', categoryController.deleteCategory)

module.exports = router