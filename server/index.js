const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require("mongoose");
dotenv.config()
const authRoutes = require('./routes/auth')
const usersRoutes = require('./routes/users')
const movieRoutes = require('./routes/movie')
const listRoutes = require('./routes/lists')




const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,

})
    .then(() => console.log('MongoDB connection successful.'))
    .catch((error) => console.error("MongoDB connection failed:", error.message))

app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/movies', movieRoutes)
app.use('/api/lists', listRoutes)

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})

