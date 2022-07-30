import {MongoClient,ServerApiVersion} from "mongodb"

export default  async function  handler(req, res) {

const uri="mongodb+srv://system:system@cluster0.0ec6y.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true,serverApi: ServerApiVersion.v1});

const collection = client.db("SMP").collection("invm");
const collection2=client.db("SMP").collection("sold")

let result=await collection.find({}).toArray()
let result2=await collection2.find({}).toArray()

let itemsininventory=result.length
let itemssold=result2.length





res.json({itemsininventory,itemssold})

}