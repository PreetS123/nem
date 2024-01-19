const { validationResult, check } = require("express-validator");

exports.isValidate = [
  check("username")
    .not()
    .isEmpty()
    .withMessage("Username name is mandatory")
    .exists()
    .isString()
    .withMessage("Username should be string")
    .isLength({ min: 3, max: 20 })
    .withMessage("Username should be 3 to 20 character long")
    .trim(),
  check("email")
    .not()
    .isEmpty()
    .withMessage("Email is mandatory")
    .exists()
    .isEmail()
    .withMessage("Invalid mail")
    .trim(),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Password should not be blank")
    .exists()
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, "i")
    .withMessage("Please enter a strong password.")
    .trim(),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .send({ message: "Something went wrong", error: errors.array() });
    }
    next();
  },
];
