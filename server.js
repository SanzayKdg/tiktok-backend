// importing
import express from "express";
import mongoose from "mongoose";
import Data from "./tiktokData.js";
import Videos from "./dbModel.js"
import Cors from 'cors';


// app config
const app = express();
const port = process.env.PORT || 9000

// Connected using = Access your data through tools --> MongoDB compass
// const connUrl = "mongodb+srv://sanjay:sanjaykdg@cluster0.pvwrymf.mongodb.net/tiktok-backend?retryWrites=true&w=majority";
const connUrl = "mongodb+srv://sanjay:sanjaykdg@cluster0.pvwrymf.mongodb.net/tiktok-backend";

// middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connUrl);

// API routes/ endpoints
app.get('/', (req, res)=>{
    res.status(200).send("Hello tiktokers");
});

app.get('/v1/posts', (req, res)=>{
    res.status(200).send(Data);
})
app.post('/v2/posts', (req, res)=>{
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }

    })
})

app.get('/v2/posts', (req, res)=>{
    Videos.find((err, data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})

// listeners
app.listen(port, ()=>{
    console.log(`Listening on localhost:${port}`)
});



// pw --> sanjaykdg