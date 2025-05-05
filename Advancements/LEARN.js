import express from 'express'

const app = express()

//Middleware
app.use((req,res,next)=>{
    console.log("Middleware 1")
    next()
})

app.get('/',(req,res,next)=>{
    res.send('Welcome to this page. Next page will reveal my name. ')
})
app.get('/profile', (req, res,next) => {
    return next(new Error('Something went wrong'))
  })

//Error handler
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(404).send("Something broke!")
})

app.listen(3000)