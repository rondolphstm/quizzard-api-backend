// // import express and cors
// import express from 'express';
// import cors from 'cors'
// import {MongoClient} from 'mongodb'
// import { connect } from './src/sercret.js';

// const client = new MongoClient(connect);
// const datebase = client.db('quizzard-api');
// const packs = database.collection('flashpacks');

// client.connect()
// console.log('Flashpack found')

// // import route functions
// // import {getFlash, addFlash} from './src/Cars.js'

// // create a new server instance
// const app = express();
// app.use(cors())
// app.use(express.json()) // will recieve json data
// const PORT = 4040;//  defining the port

// //  listen to the server on the specified port
// app.listen(PORT, () => {
//     console.log(`server is running on port ${PORT}`);
// });

// app.get('/', (req,res)=> res.json('hey api'))

// //POST
// //DELETE
// //PUT

// // routes
// // get all flashpacks from db
// app.get('/Cars', getFlash)

// // create new car
// app.post('/Cars', addFlash)
