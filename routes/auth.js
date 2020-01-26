const express = require('express');
const router = express.Router();


const { successResponse, errorResponse } = require('../utils/responseHandler');
const chatKitController = require('../controllers/chatKit');

router.get('/:userId', (req, res) => {
    console.log('user id in req handler: ', req.params);
    if (req.params !== '') {
        chatKitController.authenticateUser(req.params.userId)
            .then(data => {
                successResponse(res, data);
            }).catch(err => {
                errorResponse(res, 'User authentication failed.');
            })
    } else {
        errorResponse(res, 'User id is missing in params.');
    }
})



module.exports = router;