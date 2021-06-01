
const { urlencoded } = require('express')
const express =require('express')
const morgan =require('morgan')
const userRoute =require('./contactRout')

const app =express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/users',userRoute)

app.get('*',(req,res)=>{
    res.send('<h2>page not found 404 error</h2>')
})

const PORT= process.env.PORT || 4000
app.listen(PORT,()=>{
console.log(`the app in running on port ${PORT}`)
})























/* const express = require('express')
const morgan = require('morgan')

const contactRoutes = require('./contactRout')

const app = express()
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/contacts', contactRoutes)

app.get('*', (req, res) => {
    res.send('<h1>Please Use The Correct Routes</h1>')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})
 */




/* const express = require('express')
const morgan =require('morgan')
const contactRout= require('./contactRout')


const app = express()

app.use(morgan('dev'))




app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/contacts', contactRout)

app.get('*', (req, res)=>{
    res.send('<h1>nothing found 404 page</h1>')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`a server is running on port ${PORT}`)
})
 */