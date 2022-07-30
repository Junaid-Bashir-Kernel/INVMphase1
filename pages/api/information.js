import {MongoClient,ServerApiVersion} from "mongodb"

export default  async function  handler(req, res) {

const uri="mongodb+srv://system:system@cluster0.0ec6y.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true,serverApi: ServerApiVersion.v1});
const collection = client.db("SMP").collection("invm");
const collection2=client.db("SMP").collection("sold")

let result=await collection.find({}).toArray()
let categoryresult=await collection2.find({}).toArray()
let amount=0
let soldcategories=[]

result.map(obj=>{

 amount+=Number(obj.priceofitem)

})

categoryresult.map((obj,i)=>{

 soldcategories[i]=obj.category
 
 })

let returnObject={
 Amount:amount,
 totalitems:result.length,
 Scategory:soldcategories
}
res.json(returnObject)



}