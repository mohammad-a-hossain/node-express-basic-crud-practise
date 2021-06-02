// using database mongoose PART- 2


const express =require('express')
const morgan =require('morgan')
const mongoose = require('mongoose')
const router =require('./contactRout')

const app =express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/contacts',router)

mongoose.connect('mongodb://localhost/stacks',{
    useNewUrlParser: true ,
    useUnifiedTopology: true 

})
.then(()=>console.log('connection success'))
.catch((err)=>console.log(err))



app.get('*',(req,res)=>{
    res.json({
        message:"welcome to out site "
    })
})

const PORT= process.env.PORT || 4000
app.listen(PORT,()=>{
console.log(`the app in running on port ${PORT}`)
})


















/* PART 1 */
// without database using



// const { urlencoded } = require('express')
// const express =require('express')
// const morgan =require('morgan')
// const userRoute =require('./contactRout')

// const app =express()

// app.use(morgan('dev'))
// app.use(express.urlencoded({extended:true}))
// app.use(express.json())

// app.use('/users',userRoute)

// app.get('*',(req,res)=>{
//     res.send('<h2>page not found 404 error</h2>')
// })

// const PORT= process.env.PORT || 4000
// app.listen(PORT,()=>{
// console.log(`the app in running on port ${PORT}`)
// })




















