import {MongoClient,ServerApiVersion} from "mongodb"


export default async function handler(req,res) {

 const uri="mongodb+srv://system:system@cluster0.0ec6y.mongodb.net/?retryWrites=true&w=majority";
 const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true,serverApi: ServerApiVersion.v1});
 const collection = client.db("SMP").collection("invm");
 const collection2=client.db("SMP").collection("sold")


 let result=await collection.find({}).toArray()
 let result2=await collection2.find({}).toArray()

 let amount=0
 let soldamount=0
 let invitems=result.length
 let solditems=result2.length
 let date=new Date()


 result.map(obj=>{

  amount+=Number(obj.priceofitem)
 
 })

 result2.map(obj=>{

  soldamount+=Number(obj.priceofitem)
 
 })



 res.status(200).json({amount,soldamount,invitems,solditems,date})


}
