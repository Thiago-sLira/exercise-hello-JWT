// const loginService = require('../services/login.service');

const { generateToken } = require('../utils/auth');

const singIn = async (req, res) => {
    try {
        const { username } = req.body;
        const payload = {
            username,
            admin: false,
        };

        const token = generateToken(payload);

        return res.status(200).json({ token });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'internal error' });
    }
};

module.exports = {
    singIn,
};