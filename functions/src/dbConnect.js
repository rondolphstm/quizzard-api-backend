import { credential } from "./secret.js"

import { MongoClient } from "mongodb"

const client = new MongoClient(credential) // creating client mongo instance
const db = client.db('flashpacks') // connecting to db = bocacod-test

export default db
