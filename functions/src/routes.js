// import dbConnect from "./dbConnect.js"
// import { connect } from "./secret.js"

import db from "./dbConnect.js"

const packs = db.collection("pack") // getting the movie collection

export const getPacks = async (req, res) => {
  const allPacks = await packs.find().toArray()
  res.send(allPacks)
}

export const addPacks = async (req, res) => {
  await packs.insertOne(req.body)
  const allPacks = await packs.find().toArray()
  res.send(allPacks)
}

// export const createUser = async (req,res) => {
//   const  {email, password} = req.body

//   const token = jwt.sign({email, id:user.id}, secretKey)
//       res.send({token})
// // }

// export const createUser = async (req,res) => {
//     const  {email, password} = req.body
//     const db = dbconnect()
//     const user = await db.collection('users').insert({email, password})
//     .catch(err => res.status(500).send(err))
//     // now we create a token here....
//     const token = jwt.sign({email, id:user.id}, secretKey)
//     res.send({token})
// }

// export async function loginUser(req, res) {
//     let { email, password } = req.body; // LOWERCASE!!
//     email = email.toLowerCase();
//     const db = dbconnect();
//     const collection = await db.collection('users')
//       .where('email', '==', email)
//       .where('password', '==', password)
//       .get()
//       .catch(err => res.status(500).send(err));
//     const user = collection.docs.map(doc => {
//       let thisUser = doc.data();
//       thisUser.id = doc.id;
//       return thisUser;
//     })[0];
//     // now we create a token here...
//     const token = jwt.sign({ email: user.email, id: user.id }, secretKey);
//     res.send({ token });
//   }

// this doesnt hit db needs to finsih
// export async function updatePack(req, res) {
//   await packs.findOneAndUpdate(req.query, { $set: req.body })
//   const packUpdated = await packs.find(req.query).toArray()
//   res.send(packUpdated)
// }

// export async function deletePack(req, res) {
//   await packs.findOneAndDelete(req.query)
//   const allPacks = await packs.find().toArray()
//   res.send(allPacks)
// }