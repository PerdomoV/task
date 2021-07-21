const jwt = require('jsonwebtoken')
const User = require('../Models/userModel.js')
const Task = require('../Models/taskModel.js')

async function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    //     console.info("authenticateToken")
    //     if (err) return res.sendStatus(403)
    //     req.user = user
    //     next()
    // })

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        console.log(decoded)
    
        const user = await User.findById(req.user._id, { password: 0 });
        if (!user) return res.status(404).json({ message: "No user found" });
    
        next();
      } catch (error) {
        return res.status(401).json({ message: "Unauthorized!" });
      }
}

async function checkTaskAuthor(req, res, next){
    try{
        const task = await Task.findOne({ user: req.user._id })
        if (!task) return res.status(401).json({ message: "No access allowed to this task"}) //Deben retornar 
        
        next();
    } catch(error){
        console.error(error)
        return res.status(401).json({ message: "Unauthorized!" });
    }
    
}

module.exports = {authenticateToken, checkTaskAuthor}