// using database mongoose PART- 2


<<<<<<< HEAD
=======
const express =require('express')
const morgan =require('morgan')
const mongoose = require('mongoose')
const router =require('./contactRout')
>>>>>>> 03bb26519793ac31de7013bf9e1f33e40f0a64bc



<<<<<<< HEAD

=======
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
>>>>>>> 03bb26519793ac31de7013bf9e1f33e40f0a64bc



















/* PART 1 */
// without database using


// const { urlencoded } = require('express')
// const express =require('express')
// const morgan =require('morgan')
// const userRoute =require('./contactRout')

<<<<<<< HEAD
// const app =express()

// app.use(morgan('dev'))
// app.use(express.urlencoded({extended:true}))
// app.use(express.json())

=======
// const { urlencoded } = require('express')
// const express =require('express')
// const morgan =require('morgan')
// const userRoute =require('./contactRout')

// const app =express()

// app.use(morgan('dev'))
// app.use(express.urlencoded({extended:true}))
// app.use(express.json())

>>>>>>> 03bb26519793ac31de7013bf9e1f33e40f0a64bc
// app.use('/users',userRoute)

// app.get('*',(req,res)=>{
//     res.send('<h2>page not found 404 error</h2>')
// })

// const PORT= process.env.PORT || 4000
// app.listen(PORT,()=>{
// console.log(`the app in running on port ${PORT}`)
// })




















