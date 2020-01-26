const chatKitClient = require('../utils/chatKit');

module.exports = {
    authenticateUser: (userId) => {
        return new Promise((resolve, reject) => {
            const authData = chatKitClient.authenticate({
                userId
            });
            console.log('authData: ', authData);
            if (authData.status === 200) {
                resolve(authData.body);
            } else {
                reject();
            }
        })
    },
    getAllUsers: () => {
        return new Promise((resolve, reject) => {
            chatKitClient.getUsers()
                .then((response) => {
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
        })
    }

}