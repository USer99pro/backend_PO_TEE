const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.user0 );
router.get('/1', userController.user1 );
router.get('/2', userController.user2 );
router.get('/3', userController.user3 );
module.exports = router;
