import {packcollection} from "./dbConnect.js"
// import { connect } from "./secret.js"

export async function getPack(req, res) {
  const packs = await packcollection
    .find().toArray()
    .catch((err) => res.status(500).send(err))
  // const packs = collection.map((doc) => {
  //   let pack = doc.data()
  //   pack.id = doc.id()
  //   return pack
  
  res.json(packs)
}

export async function createPack(req, res) {
  const newPack = req.body
  if (!newPack || !newPack.pack) {
    res.status(400).send({ sucess: false, message: "invaild pack" })
    return
  }
  await packcollection
    .insertOne(newPack)
    .catch((err) => res.status(500).send(err))
  //res.status(201)
  getPack(req, res)
}

// this doesnt hit db needs to finsih
export function updatePack(req, res) {
  const updatePack = req.body
  const { packId } = req.params
  res.status(202).send("Pack Updated")
}


export function deletePack(req, res) {
  const { packId } = req.params
  res.status(203).send("Pack deleted")

}