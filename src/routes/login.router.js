const router = require('express').Router();
const loginController = require('../controllers/login.controller');

router.post('/', loginController.singIn);

module.exports = router;
