import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/database'
import cors from 'cors'
import morgan from 'morgan'
import router from './routes/InventoryRoutes'
import { errorHandler } from './middleware/errorHandler'

dotenv.config()

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials:true
  })
);
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/items',router)

app.use(errorHandler)

connectDB()

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`)
})


