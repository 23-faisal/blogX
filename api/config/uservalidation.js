import Joi from "joi";

// register validation
export const registerValidation = () => {
  Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().email().required(),
    password: Joi.string().min(3).max(30).required(),
  });
};

// login validation

export const loginValidation = () => {
  Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(3).max(30).required(),
  });
};

