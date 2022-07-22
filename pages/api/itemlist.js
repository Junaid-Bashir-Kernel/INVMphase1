// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {MongoClient,ServerApiVersion} from "mongodb"

export default  async function  handler(req, res) {

const uri="mongodb+srv://system:system@cluster0.0ec6y.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true,serverApi: ServerApiVersion.v1});
const collection = client.db("SMP").collection("invm");
let flag=0

let result=await collection.find({}).toArray()

res.json(result)
}