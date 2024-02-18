

const bcrypt = require('bcrypt');
const saltRounds = 10;

const createHash = async(yourPassword) => {
    const hashpass = await bcrypt.hashSync(yourPassword, saltRounds);
    return hashpass;
}

module.exports = createHash;