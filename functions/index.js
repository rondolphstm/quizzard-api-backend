// import express and cors & etc.
import express from "express"
import cors from "cors"
import functions from "firebase-functions"
import { getPacks, addPacks} from "./src/routes.js"

const app = express()
app.use(cors())
app.use(express.json()) // will recieve json data
// app.get('/home', (req,res)=>{
//     res.send('gello world')
//   })

// app.get("/test", (req, res) => res.status(200).send("Here is my api !!!"))

// app.get("/home", getPacks)
app.get("/flashpack", getPacks)
app.post("/createpack", addPacks)
// app.patch("/updatepack", updatePack) add later
// app.delete("/deletepack", deletePack) add later

export const api = functions.https.onRequest(app)
