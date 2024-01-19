const authModel = require("../Models/auth.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { sendRegistrationMail } = require("../service/mail");

///api/register
const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // console.log(req.body);
    if (!username || !email || !password)
      return res
        .status(200)
        .send({ success: true, message: "Credential missing" });
    const userExist = await authModel.findOne({ email });
    if (userExist) {
      return res
        .status(200)
        .send({ success: true, message: "User already exist" });
    }
    const encryptPassword = await bcrypt.hash(password, 10);
    const user = await authModel.create({
      username,
      email,
      password: encryptPassword,
    });
    // console.log(user);
    const token = jwt.sign(
      {
        user,
      },
      process.env.SECRET_TOKEN,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    // sendRegistrationMail(email)
    return res.status(201).send(token);
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!email || !password)
      return res
        .status(200)
        .send({ success: true, message: "Credential missing" });
    const authUser = await authModel.findOne({ email });
    if (!authUser)
      return res
        .status(201)
        .send({ success: true, message: "User does't exist" });
    const hashedPass = authUser.password;
    await bcrypt.compare(password, hashedPass, function (err, result) {
      // res === true
      if (err) return res.send({ message: "Please login again" });
      if (result) {
        const token = jwt.sign(
          {
            authUser,
          },
          process.env.SECRET_TOKEN,
          {
            expiresIn: "30d",
          }
        );
        return res.status(201).send({ success: true, token: token });
      } else {
        return res.status(401).send({ success: false, message: "Login again" });
      }
    });
  } catch (err) {
    return res.status(500).send({ success: false, error: err.message });
  }
};

module.exports = { userRegister, userLogin };
