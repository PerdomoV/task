require('../database/database.js')
const User = require('../Models/userModel.js');
const bcrypt = require('bcrypt')
const Role = require('../Models/rolModel.js')

module.exports = {
    show: async (req, res) => {
        try{
            const user = await User.findById(req.user._id)
            if(!user) return res.status(404).json({ message: "User not found"});
            return res.status(401).json(user)
        }catch(e){
            console.error(e)
            return res.status(500).json({ message: "Internal server error"})
        }
    },

    // update: async (req, res) => {
    //     try{
    //         const id = req.user._id
    //         const { username, email, password, roles } = req.body
    //             // const hash = await argon2.hash(password);
    //             const salt = bcrypt.genSaltSync(10);
    //             const hash = bcrypt.hashSync(password, salt);
    //             // console.log('hash: ', hash)
    //             RoleId = []
    //             if(roles.length > 0){
    //                 roles.forEach( (element) => {
    //                     console.log(element)
    //                     const role = new Role({ name: element })
    //                     RoleId.push(role._id)
                        
    //                 })
    //             }
    //         const userUpdated = await User.updateOne({_id: id}, 
    //         {username, email, hash, roles})
    //         if(!userUpdated) return res.status(404).json({message: "User not found"})
    //         return res.status(401).json({message: "User updated successfully"})
    //     }catch(e) {
    //         console.error(e)
    //         return res.status(500).json({ message: "Internal server error"})
    //     }
    // }
}