require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { userModal } = require("../model/user.model");

const signIn = async (req, res) => {
    console.log(signIn)
    const { firstname, lastname, username, email, password, phone } = req.body;

    try {
        if (!firstname || !lastname || !username || !email || !password || !phone) {
            return res.status(400).send("All fields are required");
        }

        const userExists = await userModal.findOne({ email }).lean().exec();
        if (userExists) return res.status(400).send("User already exists");

        const hash = bcrypt.hashSync(password, 10);
        if (!hash) return res.status(500).send("Something went wrong");

        const user = new userModal({ ...req.body, password: hash });
        await user.save();

        return res.status(201).send({ message: "User Registered Successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const logIn = async (req, res) => {
    const { username, password } = req.body;

    try {
        const userExists = await userModal.findOne({ username }).exec();
        if (!userExists) return res.status(400).send("User does not exist");

        const isMatch = bcrypt.compareSync(password, userExists.password);
        if (!isMatch) return res.status(400).send("Incorrect password");

        const AccessToken = createToken(userExists);
        res.cookie("AccessToken", AccessToken, { httpOnly: true });

        res.status(200).send({ message: "Login Successful", AccessToken });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const resetPassword = async (req, res) => {
    const{password,newpassword}=req.body
    try {
        let user = await userModal.findById(req.params.id);
        if (!user) return res.status(400).send({ message: "User not found" });

        const { password } = req.body;
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) return res.status(400).send({ message: "Incorrect password" });

        const hash = bcrypt.hashSync(newpassword, 10);
        user = await userModal.findByIdAndUpdate(
            req.params.id,
            { $set: { password: hash } },
            { new: true }
        );

        const AccessToken = createToken(user);
        res.cookie("AccessToken", AccessToken, { httpOnly: true });

        res.status(200).send({ message: "Password Reset Successful", AccessToken });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const createToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.KEY, { expiresIn: "1h" });
};

module.exports = { signIn, logIn, resetPassword };
