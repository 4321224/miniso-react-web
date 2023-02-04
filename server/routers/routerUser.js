const router = require("express").Router();
const userController = require("../controllers/userController");
const{ authentication, authorization} = require("../middleware/authentication");

router.post("/login", userController.login);
router.use(authentication);
router.post("/register",authorization, userController.register);

module.exports = router;