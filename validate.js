const validator = require('./helper/validate');
const cleanContact = async (req, res, next) => {
    const validationRule = {
        
        "firstName": "required|string",
        "lastName": "required|string",
        "email": "required|email",
        "favoriteColor": "string",
        "birthday": "required|string"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(402)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}
module.exports = {
    cleanContact
};