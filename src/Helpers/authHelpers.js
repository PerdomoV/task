const User = require('../Models/userModel.js')

module.exports = {
    findUser: async function(req, res, username, email){
        try{
            const userNameFound = await User.findOne({username: username})
            if ( userNameFound ) {
                return res.status(409).send('¡Nombre de usuario en uso!')
            }
            const userEmailFound = await User.findOne({email: email})
            if( userEmailFound ){
                return res.status(409).send('¡El Email provisto ya ser encuentra en uso!')
            }
        }catch(e){
            console.error(e)
        }
    }
}