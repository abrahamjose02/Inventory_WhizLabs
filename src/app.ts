import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/database'
import cors from 'cors'
import morgan from 'morgan'
import router from './routes/InventoryRoutes'
import { errorHandler } from './middleware/errorHandler'

// Load environment variables
dotenv.config()

// Create an express application
const app = express()

// Use Cross origin middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials:true
  })
);
// Use Morgan middleware for logging
app.use(morgan('dev'))
//  Use JSON middleware
app.use(express.json())
// Use URL encoded middleware
app.use(express.urlencoded({extended:true}))

// Define the base route for the API
app.use('/api/items',router)

// Use the error handler middleware
app.use(errorHandler)
// Connect to the database
connectDB()

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`)
})


