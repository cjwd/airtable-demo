var express = require('express');
var router = express.Router();
var modelController = require('../controllers/modelController');

/* GET home page. */
router.get('/', modelController.getModels);

module.exports = router;
