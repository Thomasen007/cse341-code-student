
const validator = require('./helper/validate');
const cleanPatient = async (req, res, next) => {
    const validationRule = {       
            "firstName": "required|string" ,
            "middleIntial": "string",
            "lastName": "required|string",
            "dateOfBirth": "required|string",
            "gender": "required|string",
            "address": "required|string",
            "id":"required|string",
            "contact": {
                "number1":{
                    "type": "required|string",
                    "phone": "string",
                    "variety": {"type": "string"},
                    "text": "required|boolean"
                },
                "number2":{
                    "type": "required|string",
                    "phone": "string",
                    "variety": {"type": "string"},
                    "text": "required|boolean"
                },
                "number3":{
                    "type": "required|string",
                    "phone": "string",
                    "variety": {"type": "string"},
                    "text": "required|boolean"
                },
                "email":{
                    "primary": "email",
                    "secondary": "email"
                }      
            },
            "insurance":{
                "primary":{
                    "insurancePlan": "string",
                    "bin": "string",
                    "pcn": "string",
                    "patientID": "string",
                    "rxGroup": "string"
                },
                "secondary":{
                    "insurancePlan": "string",
                    "bin": "string",
                    "pcn": "string",
                    "patientID": "string",
                    "rxGroup": "string"
                },
                "tertiary":{
                    "insurancePlan": "string",
                    "bin": "string",
                    "pcn": "string",
                    "patientID": "string",
                    "rxGroup": "string"
                }
            }
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(404)
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
const cleanMedication = async (req, res, next) => {
    const validationRule = {       
        
            "patientID": "required|integer",
            "scriptNumber": "required|integer",
            "storeNumber": "required|integer",
            "dateWritten": "required|date",
            "name": "required|string",
            "amount": "required|integer",
            "dispenceAmount": "required|integer",
            "expDate": "required|date",
            "DAW": "required|boolean",
            "sig": "required|string",
            "Doctor":{
                "firstName": "required|string",
                "LastName": "required|string",
                "NPI": "required|integer",
                "DEA": "string",
                "phoneNumber": "required|string",
                "faxNumber": "string",
                "address": "required|string"
            },
            "DAWCode": "required|integer"
        
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(404)
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
    cleanPatient, cleanMedication
};