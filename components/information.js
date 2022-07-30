import useSWR from "swr"
import Badge from "@leafygreen-ui/badge"


export default function ItemList(){

 const fetcher = (...args) => fetch(...args).then((res) => res.json())
 let url=`/api/information`

 const { data, error } = useSWR(url, fetcher)

 if (error) return <div>Failed to load</div>
 if (!data) return <div>  <Badge variant="red" className="my-badge">Loading....</Badge></div>
 console.log(data)


return (
<div>
 <table className="table">
  <tbody>
   <tr>
    <th scope="col">Items Price Altogether</th>
    <th scope="col">Quantity of Items</th>
   </tr>
   <tr>
    <td>{data.Amount}</td>
    <td>{data.totalitems}</td>
   </tr>
  </tbody>
 </table>
 <p className="p-1 my-1 alert-warning">Sold categories</p>
   <div className="row row-cols-1 row-cols-md-4  g-4">
  
    {data.Scategory.map(obj=>(
     <>
     <center>
     <p className="col" style={{fontFamily:"verdana",color:"orangered"}}>{obj}</p>
     <hr/>
     </center>
   
     </>
    ))

    }

   </div>
</div>
)



}
