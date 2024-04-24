import express from "express";
import {PORT,mongoDBURL} from './config.js';
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use('/books', booksRoute);

// As middleware
app.use(cors());


app.get('/', (req, res)=>{
    console.log(req)
    return res.status(234).send("Mern");
})



mongoose.connect(mongoDBURL)
.then(()=>{console.log('Connected to database')

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})
})

.catch((error)=>{
    console.log(error)
})