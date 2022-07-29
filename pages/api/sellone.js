
import {MongoClient,ServerApiVersion,ObjectId} from "mongodb"

export default  async function  handler(req, res) {


const uri="mongodb+srv://system:system@cluster0.0ec6y.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true,serverApi: ServerApiVersion.v1});
const collection = client.db("SMP").collection("sold");
const itemcollection=client.db("SMP").collection("invm")

let result=await itemcollection.findOne({_id:ObjectId(req.query.id)})


try {

  await collection.insertOne({

    itemcode:result.itemcode,
    itemname:result.itemname,
    category:result.category,
    priceofitem:result.priceofitem,

  })
  

  await itemcollection.deleteOne({_id:ObjectId(req.query.id)})


  
  res.json({status:true})
  

}
catch(e){
  res.status(200).json({status:false,error:e})
}





}