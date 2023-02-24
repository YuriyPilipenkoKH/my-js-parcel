
Validation
const Joi = require("joi");

 const passwordSchema = Joi.string().min(3).max(14).alphanum();
 console.log(passwordSchema.validate('q'));
 console.log(passwordSchema.validate('YuriyPilipenko'));

 