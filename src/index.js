const taskRouter = require('./Routes/taskRoutes.js')
const express = require('express')
const path = require('path')


const app = express()

app.set('port', process.env.PORT || 3000)
app.use(express.json())
app.use('/api', taskRouter)
app.use(express.static(path.join(__dirname, 'public')))


app.listen(app.get('port'), () => {
  console.log(`Example app listening at http://localhost:${app.get('port')}`)
  
})
