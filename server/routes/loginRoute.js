const express = require("express")
const router = express.Router();

const existingUser = require("../model/register")
const bcrypt = require("bcryptjs");


router.post("/", async (req, res) => {
    const { email, password } = req.body
    const hashpassword = bcrypt.hashSync(password)

    const getUser = ({
        email, hashpassword
    })

    let checkIfUserExist

    try {
        checkIfUserExist = await existingUser.findOne({ email })

        if (!checkIfUserExist) {
            res.status(404).json({ message: "User not found" })
        } else {
            const checkIfPasswordExist = bcrypt.compareSync(password, checkIfUserExist.password)
            if (!checkIfPasswordExist) {
                res.status(404).json({ message: "Incorrect Password" })
            } else {
                try {
                    return res.send(getUser)
                } catch (error) {
                    res.send({ message: error.message })
                }
                return res.status(200).json({ message: "User Logged In" })
            }
        }
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

module.exports = router
