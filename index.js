const taskRouter = require('./Routes/taskRoutes.js')
const express = require('express')


const app = express()

app.set('port', process.env.PORT || 3000)
app.use(express.json())
app.use('/api', taskRouter)


app.listen(app.get('port'), () => {
  console.log(`Example app listening at http://localhost:${app.get('port')}`)
  
})
