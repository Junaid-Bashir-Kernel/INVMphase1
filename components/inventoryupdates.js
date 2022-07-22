import useSWR from "swr"
import Badge from "@leafygreen-ui/badge"
import Updateview from "./update"

export default function InventoryUpdates(){

 const fetcher = (...args) => fetch(...args).then((res) => res.json())
 let url=`/api/itemlist`
 const { data, error } = useSWR(url, fetcher)

 if (error) return <div>Failed to load</div>
 if (!data) return <div>  <Badge variant="red" className="my-badge">Loading....</Badge></div>
 console.log(data)


return (
 <div className="row row-cols-1 row-cols-md-4 g-4">
  
{data.map(obj=>(
  <>
 <div>
  <div className="col">
   
   <Updateview {...obj}/>
 
  </div>
  </div> 
        
  </>
  ))}
</div>
)




}