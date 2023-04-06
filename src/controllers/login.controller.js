const loginService = require('../services/login.service');

const singIn = async (req, res) => {
    try {
        const { email } = req.body;
        const login = await loginService.authenticate(email);
        return res.status(200).json({ token: login });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'internal error' });
    }
};

module.exports = {
    singIn,
};