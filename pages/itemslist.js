import useSWR from "swr"
import Badge from "@leafygreen-ui/badge"
import Itemview from "../components/itemview"

export default function ItemList(){

 const fetcher = (...args) => fetch(...args).then((res) => res.json())
 let url=`/api/itemlist`
 const { data, error } = useSWR(url, fetcher)

 if (error) return <div>Failed to load</div>
 if (!data) return <div>  <Badge variant="red" className="my-badge">Loading....</Badge></div>
 console.log(data)
 //row row-cols-1 row-cols-md-4  g-4

return (
<div className="">
{data.map(obj=>(
  <>
 <div>
  <div className="">
  <Itemview {...obj}/>
  </div>
  </div> 
        
  </>
  ))}
</div>
)



}

