const {Schema, model} = require('mongoose')

const userSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true
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