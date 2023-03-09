const express = require("express")
const router = express.Router();
const bcrypt = require("bcryptjs")
const User = require("../model/register")

router.post("/", async (req, res) => {
    const hashPassword = bcrypt.hashSync(req.body.password)

    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        password: hashPassword
    })

    const { email } = user

    let checkExistingEmail

    try {
        checkExistingEmail = await User.findOne({ email })
    } catch (error) {
        console.log(error.message)
    }

    if (checkExistingEmail) {
        res.status(404).json({ message: "Email Already Exist" })
    } else {
        try {
            const saveUser = user.save()
            res.status(201).json({ user: saveUser })
        } catch (error) {
            res.send({ message: error.message })
        }
    }


})

module.exports = router