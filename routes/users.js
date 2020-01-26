var express = require('express');
var router = express.Router();

const { successResponse, errorResponse } = require('../utils/responseHandler');
const chatKitController = require('../controllers/chatKit');


/* GET users listing. */
router.get('/', (req, res, next) => {
	chatKitController.getAllUsers().then(data => {
		successResponse(res, data);
	}).catch(err => {
		errorResponse(res, err);
	})
});

module.exports = router;
