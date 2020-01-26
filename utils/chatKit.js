const Chatkit = require('@pusher/chatkit-server');
const { INSTANCE_LOCATOR, SECRET_KEY } = require('../config/constants');

const chatkit = new Chatkit.default({
    instanceLocator: INSTANCE_LOCATOR,
    key: SECRET_KEY,
})


module.exports = chatkit;