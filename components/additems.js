import {useEffect} from "react"
import { useState } from "react"

export  default function Home() {

const [itemvisibility,setitemvisibility]=useState({
  additemsection:false,
})

const [itemdata,setitemdata]=useState({

  itemcode:"",
  itemname:"",
  category:"",
  priceofitem:"",

})

async function formSubmit(e) {
e.preventDefault()
let request=await fetch("/api/additem",{
  method:"POST",
  headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify({

   itemcode:itemdata.itemcode,
   itemname:itemdata.itemname,
   category:itemdata.category,
   priceofitem:itemdata.priceofitem


  })
})

let response=await request.json()

if(response.status==true){

alert("Item  with code"+itemdata.itemcode+"Added")


}
else {
  alert("Error Occured")
}


}


return (
<div>
 <div className="d-flex p-3 container-fluid alert" style={{backgroundColor:""}}>

<div className="card" style={{width:600}}>
<div className="card-body">
<button type="button" className="alert-success" style={{color:"black",fontFamily:"courier new"}} id="add" onClick={()=>{setitemvisibility({...itemvisibility,additemsection:true})}}>Add Inventory Items</button>
{itemvisibility.additemsection===true?

  <div id="itemadd" className="shadow-lg p-3 mb-5 bg-body rounded">

  <form onSubmit={(e)=>formSubmit(e)}>

  <label className="form-label">ItemCode</label>
    {itemdata.itemcode}
    <input  name="itemcode" value={itemdata.itemcode}  className="form-control form-control-sm" style={{border:"1px solid grey;"}} onChange={e=>{setitemdata({...itemdata,itemcode:e.target.value})}}></input>


    <label className="form-label">Name</label>
    {itemdata.itemname}
    <input  name="itemname" value={itemdata.itemname}  className="form-control form-control-sm" style={{border:"1px solid grey;"}} onChange={e=>{setitemdata({...itemdata,itemname:e.target.value})}}></input>

    <label className="form-label">Category</label>
    {itemdata.category}
    <input value={itemdata.category} className="form-control form-control-sm" style={{border:"1px solid grey;"}} onChange={e=>{setitemdata({...itemdata,category:e.target.value})}}></input>

    <label className="form-label">PriceofItem</label>
    {itemdata.priceofitem}
    <input value={itemdata.priceofitem} className="form-control form-control-sm" style={{border:"1px solid grey;"}} onChange={e=>{setitemdata({...itemdata,priceofitem:e.target.value})}}></input>

     <center>
     <button type="submit"  className="btn btn-warning" style={{width:100,color:"white"}}>save</button>
     </center>
   
  </form>
  <button onClick={()=>{setitemvisibility({...itemvisibility,additemsection:false})}}>close</button>
 </div>

:""}
 </div>
</div>


</div>
</div>

)

}