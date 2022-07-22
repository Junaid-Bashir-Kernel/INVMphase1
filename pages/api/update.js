import {MongoClient,ServerApiVersion,ObjectId} from "mongodb"



export default async  function Update(req,res){

const uri="mongodb+srv://system:system@cluster0.0ec6y.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true,serverApi: ServerApiVersion.v1});
const collection = client.db("SMP").collection("invm")

try {


 await collection.updateOne({_id:ObjectId(req.body.itemid)},{$set:{

  itemcode:req.body.itemcode,
  itemname:req.body.itemname,
  category:req.body.category,
  priceofitem:req.body.priceofitem,
 
 }})
 
 res.json({status:true})


}catch(e){
 console.log(e)
 res.status(200).json({status:false})
}



}

