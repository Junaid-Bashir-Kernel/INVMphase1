
import {MongoClient,ServerApiVersion} from "mongodb"

export default  async function  handler(req, res) {


  if(req.method=="GET"){
    return res.status(200).json({message:"method not allowed"})

  }



const uri="mongodb+srv://system:system@cluster0.0ec6y.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true,serverApi: ServerApiVersion.v1});
const collection = client.db("SMP").collection("invm");



try {

  await collection.insertOne({

    itemcode:req.body.itemcode,
    itemname:req.body.itemname,
    category:req.body.category,
    priceofitem:req.body.priceofitem,
  })
  
  res.json({status:true})
  

}
catch(e){
  res.status(200).json({status:false,error:e})
}





}