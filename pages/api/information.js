import {MongoClient,ServerApiVersion} from "mongodb"

export default  async function  handler(req, res) {

const uri="mongodb+srv://system:system@cluster0.0ec6y.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true,serverApi: ServerApiVersion.v1});
const collection = client.db("SMP").collection("invm");


let result=await collection.find({}).toArray()
let amount=0

result.map(obj=>{

 amount+=Number(obj.priceofitem)

})

let returnObject={
 Amount:amount,
 totalitems:result.length
}
res.json(returnObject)



}