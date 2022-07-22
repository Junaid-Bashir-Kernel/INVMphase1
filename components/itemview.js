import { useState } from "react"

export default function Itemview(obj){

const[item,setitemupdate]=useState({
  itemid:obj._id,
  itemcode:obj.itemcode,
  itemname:obj.itemname,
  category:obj.category,
  priceofitem:obj.priceofitem,
  
})

async function handleSubmit(e){

e.preventDefault()
let request=await fetch("/api/update",{
  method:"post",
  headers:{
    "content-type":"application/json",
  },
  body:JSON.stringify({
    itemid:item.itemid,
    itemcode:item.itemcode,
    itemname:item.itemname,
    category:item.category,
    priceofitem:item.priceofitem
  })

})
let response=await request.json()
if(response.status==true){
alert("updated")
}
else{
  alert("error")
}

}

return (
  <div>
  <div className="container  rounded">
  <div className="">

   <form onSubmit={handleSubmit} className="form">
  
     
   <table className="table">
    <tbody>
      <tr className=" container  p-1 my-1">
        <th scope="col" style={{fontFamily:"courier new",fontWeight:"light",color:"orange"}}>Code</th>
        <th scope="col">Name</th>
        <th scope="col">Category</th>
        <th scope="col" style={{fontFamily:"courier new",fontWeight:"light",color:"blueviolet"}}>Price</th>
        <th scope="col">Action</th>
      </tr>



  <tr>

    <td> 
    <input value={item.itemcode} className="form form-control" onChange={(e)=>{setitemupdate({...item,itemcode:e.target.value})}}></input>
    </td>

      <td>
    <input value={item.itemname} className="form form-control"  onChange={(e)=>{setitemupdate({...item,itemname:e.target.value})}}></input>
     </td>


      <td>      
     <input value={item.category} className="form form-control" onChange={(e)=>{setitemupdate({...item,category:e.target.value})}}></input>
     </td>
        
      <td>
     <input value={item.priceofitem} className="form form-control" onChange={(e)=>{setitemupdate({...item,priceofitem:e.target.value})}}></input>
     </td>

   <td>
   <button type="submit"  className="badge btn-warning">update</button>
   </td>

 </tr>
    </tbody>
   </table>
        
     
  </form>
  


  </div>
 </div>
 </div>
)

}