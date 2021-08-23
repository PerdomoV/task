const taskRouter = require('./Routes/taskRoutes.js')
const authRouter = require('./Routes/authRoutes.js')
const userRouter = require('./Routes/userRoutes.js')
const express = require('express')
const path = require('path')
//Archivo con las variables de entorno:
const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.set('port', process.env.PORT || 3000)
app.use(express.json())


app.use('/api', authRouter)
app.use('/api', taskRouter)
app.use('/api', userRouter)



app.use(express.static(path.join(__dirname, 'public')))


app.listen(app.get('port'), () => {
  console.log(`Example app listening at http://localhost:${app.get('port')}`)
  
})
