const mongose = requiree("mongoose")

const loginSchema = mongose.Schema(
    {
        email: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        }
    }
)

module.exports = mongose.model("user", loginSchema)