const { Schema, model } = require('mongoose')

const rolSchema = new Schema(
    {
    name:  {
            type: String,
            unique: true,
            required: true
           }
    },
           {
               versionKey: false
           }
);

module.exports = model('Rol', rolSchema)
