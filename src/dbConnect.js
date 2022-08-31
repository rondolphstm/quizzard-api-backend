//  import MongoClient and ServerApiVersion from mongodb
import { MongoClient } from 'mongodb'
//  import sercret uri
import { connect } from './secret.js'

const client = new MongoClient(connect);
const database = client.db('flashpacks');
export const packcollection = database.collection('pack');

// create new MongoClient instance and export it 
// export const client = new MongoClient(connect, 
// )

//  export default function dbConnect