// import express and cors & etc.
import express from 'express'
import cors from 'cors'
import {MongoClient} from 'mongodb'
// import { connect } from './src/secret.js';
import { getPack, updatePack, createPack, deletePack } from './src/routes.js';

// const client = new MongoClient(connect);
// const database = client.db('quizzard-api');
// const packs = database.collection('flashpacks');

// client.connect()
console.log('Flashpack found')

// create a new server instance
const app = express();
app.use(cors())
app.use(express.json()) // will recieve json data
const PORT = 4040;//  defining the port

//  listen to the server on the specified port

//POST
//DELETE
//PUT

// app.get('/', (req,res)=> res.json('hey api'))
// app.post('/', async (req,res) => {
    // await packs.instertOne(req.body)
    // res.send('New Flashpack Added!') 
    // }) 
    
    app.get("/packs", getPack)
    app.post("/packs", createPack)
    app.patch("packs/:taskId", updatePack)
    app.delete("/packs/", deletePack)
    
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });