const { Schema, model } = require('mongoose')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },

        email: {
            type: String,
            unique: true
        },

        password: {
            type: String,
            required: true
        },

        roles: [{
            ref: "Role",
            type: Schema.Types.ObjectId
        }]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model( 'User', userSchema )