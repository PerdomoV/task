const jwt = require('jsonwebtoken')
const User = require('../Models/userModel.js')
const Task = require('../Models/taskModel.js')

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.info("authenticateToken")
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

async function checkTaskAuthor(req, res, next){
   
   try{
        const user = await User.findOne({ _id: req.user._id })
        if(!user) res.sendStatus(401)
        next()
   }catch(e){
       console.error(e)
   }
}

module.exports = {authenticateToken, checkTaskAuthor}