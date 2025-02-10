import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from "cors";
import dbConnection from "./database/db.js";
import userModel from './models/userComments.js';


const app = express();

dbConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
}));


app.get('/', (req, res)=>{
    res.send("Hello From server");
})

app.post('/userdata',async (req, res)=>{
    
    const { name, email, message, star } = req.body;

    const user = await userModel.create({
        name,
        email,
        message,
        star,
    })

    res.json({user});
})

app.get('/userComment', async (req, res) => {
    const userAllData = await userModel.find({});
    res.json({ userAllData });
});




const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
