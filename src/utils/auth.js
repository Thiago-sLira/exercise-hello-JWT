/* eslint-disable no-throw-literal */
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const configJWT = {
    expiresIn: '10d',
    algorithm: 'HS256',
};

const generateToken = (payload) => {
    const token = jwt.sign(payload, JWT_SECRET, configJWT);
    return token;
};

const validateToken = (token) => {
    if (!token) throw { message: 'Falta o token' };
    const isValid = jwt.verify(token, JWT_SECRET);
    return isValid;
};

const decodeToken = (token) => {
    if (!token) throw { message: 'Falta o token' };
    const decoded = jwt.decode(token, JWT_SECRET);
    return decoded;
};

module.exports = {
    generateToken,
    validateToken,
    decodeToken,
};