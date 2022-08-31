// import {client} from './dbConnect.js'

// // get all packs: GET
// export const getFlash = (req,res) => {
//     client.connect((err) => {
//         if(err){
//             res.status(500).send(err);
//             return;
//         }
//         const packs = req.body;
//         const collection = client.db('flashpack').collection('packs');
//         collection.find().toArray((err, result) => {
//             if(err) res.status(500).send(err);
//             if(result) res.json(result);
//             client.close();
//         })
//     })
// }