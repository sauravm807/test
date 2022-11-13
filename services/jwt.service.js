const jwt = require('jsonwebtoken');
const privateKey = "secret";

module.exports = {
    createToken: function (id) {
        return new Promise((resolve, reject) => {
            const token = jwt.sign({
                id
            }, privateKey, { expiresIn: '1h' });
            resolve(token);
        })
    }
}