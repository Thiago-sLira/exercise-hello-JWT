const { validateBody } = require('../services/validations/validateBody');

module.exports = (req, res, next) => {
    const { error } = validateBody(req.body);

    if (error) return next(error);

    next();
};