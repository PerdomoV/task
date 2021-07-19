const User = require('../Models/userModel.js')
const jwt = require('jsonwebtoken');
const Role = require('../Models/rolModel.js')
const authHelpers = require('../Helpers/authHelpers.js')


const bcrypt = require('bcrypt')

module.exports =  {
    signUp: async (req, res) => {
        const { username, email, password, roles } = req.body
        const userFound = await authHelpers.findUser(req, res, username, email)
        if( !userFound ){
            try{
                // const hash = await argon2.hash(password);
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(password, salt);
                // console.log('hash: ', hash)
                RoleId = []
                if(roles.length > 0){
                    roles.forEach( (element) => {
                        console.log(element)
                        const role = new Role({ name: element })
                        RoleId.push(role._id)
                        
                    })
                }
                const createdUser = await new User(
                    {
                        username: username,
                        email: email,
                        password: hash,
                        roles: RoleId
                    }
                    );
                const saveResponse = await createdUser.save()
                res.status(201).send(saveResponse)

            }catch(e){
                console.error(e)
            }
        }
    },

    signIn: async (req,res) => {
        try{
            const { username, email, password } = req.body
            const userFound = await User.findOne({ email: email })  
            if(!userFound){
                res.status(404).send("¡Usuario no encontrado!")
            }
            const hash = userFound.password 
            const logged = bcrypt.compareSync(password, hash); // true or false

            if(logged){
                //Crear aquí el token
                var accessToken = jwt.sign({ name: username }, process.env.ACCESS_TOKEN_SECRET)

                res.status(200).json({ accessToken: accessToken })
            }
        }catch(e){
            console.error(e)
        }

    }



}
