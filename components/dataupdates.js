import useSWR from "swr"
import Badge from "@leafygreen-ui/badge"
import Charrt from "./charrt"

export default function DataUpdates(){

 const fetcher = (...args) => fetch(...args).then((res) => res.json())
 let url=`/api/dataupdates`
 const { data, error } = useSWR(url, fetcher)

 if (error) return <div>Failed to load</div>
 if (!data) return <div>  <Badge variant="red" className="my-badge">Loading....</Badge></div>
 console.log(data)
 

return (
<div className="">
<Charrt  {...data} />
</div>
)



}
